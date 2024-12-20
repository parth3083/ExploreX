import { z } from "zod";
import puppeteer from "puppeteer";

// Reusable function to initialize the browser
async function initializeBrowser() {
  return puppeteer.launch({
    headless: true, // Optimized headless mode
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

// Function to fetch search results
async function fetchSearchResults(query: string) {
  const browser = await initializeBrowser();
  let page;

  try {
    page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    );

    // Block unnecessary resources to save bandwidth
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const blockedResources = ["image", "stylesheet", "font"];
      if (blockedResources.includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });

    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}&hl=en&gl=us&num=20`;
    await page.goto(searchUrl, { waitUntil: "domcontentloaded" });

    // Scrape search results
    const results = await page.evaluate(() => {
      const elements = document.querySelectorAll(".tF2Cxc");
      return Array.from(elements).map((el) => ({
        title: el.querySelector("h3")?.innerText || "No title",
        link: el.querySelector("a")?.href || "No link",
  
      }));
    });

    return results;
  } catch (error) {
    console.error("Error in fetchSearchResults:", error);
    throw new Error("Failed to fetch search results");
  } finally {
    if (page) await page.close();
    await browser.close();
  }
}

// Function to filter out blog websites
function filterBlogResults(results: Array<{ link: string }>) {
  const blogKeywords = ["blog", "wordpress", "medium", "tumblr", "blogger"];
  return results.filter(
    (result) =>
      !blogKeywords.some((keyword) =>
        result.link.toLowerCase().includes(keyword)
      )
  );
}

// Main POST handler
export async function POST(request: Request) {
  try {
    // Validate input
    const searchSchema = z.object({
      query: z.string().min(1, "Query must not be empty"),
    });
    const { query } = searchSchema.parse(await request.json());

    // Fetch and filter results
    const results = await fetchSearchResults(query);
    const filteredResults = filterBlogResults(results);

    return Response.json({ filteredResults });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ message: error.errors[0].message }, { status: 400 });
    }
    console.error("Unhandled error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}