import { z } from "zod";
import puppeteer from "puppeteer";

async function initializeBrowser() {
  return puppeteer.launch({
    headless: true, 
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

async function fetchSearchResults(query: string) {
  const browser = await initializeBrowser();
  let page;

  try {
    page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    );

    await page.setRequestInterception(true);
    page.on("request", (request) => {
      const blockedResources = ["image", "stylesheet", "font"];
      if (blockedResources.includes(request.resourceType())) {
        request.abort();
      } else {
        request.continue();
      }
    });

    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query + " inurl:blog"
    )}&hl=en&gl=us&num=20`;
    await page.goto(searchUrl, { waitUntil: "domcontentloaded" });

    const blogResults = await page.evaluate(() => {
      const elements = document.querySelectorAll(".tF2Cxc");
      return Array.from(elements).map((el) => ({
        title: el.querySelector("h3")?.innerText || "No title",
        link: el.querySelector("a")?.href || "No link",
    
      }));
    });

    return blogResults;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Failed to fetch search results");
  } finally {
    if (page) await page.close();
    await browser.close();
  }
}

export async function POST(request: Request) {
  try {
    const searchSchema = z.object({
      query: z.string().min(1, "Query must not be empty"),
    });

    const parsedBody = searchSchema.parse(await request.json());
    const { query } = parsedBody;

    const blogResults = await fetchSearchResults(query);

    return Response.json({ blogResults });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ message: error.errors[0].message }, { status: 400 });
    }
    console.error("Unhandled error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}