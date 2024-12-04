import axios from "axios";
import NewsModel from "@/models/news";
import dbConnect from "@/lib/dbConnect";

interface NewsArticle {
  title: string;
  imageUrl: string;
}

interface NewsItems {
  todaysNews: NewsArticle[];
  thisWeeksNews: NewsArticle[];
  thisMonthsNews: NewsArticle[];
}
async function fetchNews(apiKey: string): Promise<NewsItems> {
  const defaultImage = "there_is_an_image.jpg"; // Default image URL for missing images

  // Default empty structure for NewsItems
  const defaultNews: NewsItems = {
    todaysNews: [],
    thisWeeksNews: [],
    thisMonthsNews: [],
  };

  try {
    const currentDate = new Date();
    const today = currentDate.toISOString().split("T")[0];

    // Construct URLs
    const url = `https://newsapi.org/v2/everything?from=${today}&to=${today}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;
    const weekUrl = `https://newsapi.org/v2/everything?from=${getStartOfWeek()}&to=${today}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;
    const monthUrl = `https://newsapi.org/v2/everything?from=${getStartOfMonth()}&to=${today}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

    // Fetch news data
    const [todayResponse, weekResponse, monthResponse] = await Promise.all([
      axios.get(url),
      axios.get(weekUrl),
      axios.get(monthUrl),
    ]);

    // Map response data
    const todaysNews: NewsArticle[] = todayResponse.data.articles.map((news: any) => ({
      title: news.title,
      imageUrl: news.urlToImage || defaultImage,
    }));

    const thisWeeksNews: NewsArticle[] = weekResponse.data.articles.map((news: any) => ({
      title: news.title,
      imageUrl: news.urlToImage || defaultImage,
    }));

    const thisMonthsNews: NewsArticle[] = monthResponse.data.articles.map((news: any) => ({
      title: news.title,
      imageUrl: news.urlToImage || defaultImage,
    }));

    return { todaysNews, thisWeeksNews, thisMonthsNews };
  } catch (error) {
    console.error("Error fetching news:", error);
    return defaultNews; // Return default structure in case of an error
  }
}



function getStartOfWeek(): string {
  const date = new Date();
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  const startOfWeek = new Date(date.setDate(diff));
  return startOfWeek.toISOString().split("T")[0];
}

function getStartOfMonth(): string {
  const date = new Date();
  date.setDate(1);
  return date.toISOString().split("T")[0];
}

export async function POST(request: Request) {
  dbConnect();
  const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY||"";
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];

  const existingData = await NewsModel.findOne();

  if (
    !existingData ||
    existingData.lastUpdated.toISOString().split("T")[0] !== today
  ) {
    try {
      const { todaysNews, thisMonthsNews, thisWeeksNews } = await fetchNews(apiKey);
      await NewsModel.updateOne(
        {},
        {
          todaysNews,
          thisMonthsNews,
          thisWeeksNews,
          lastUpdated: new Date(),
        },
        {
          upsert: true,
        }
      );
      return Response.json(
        { todaysNews, thisMonthsNews, thisWeeksNews },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Failed to fetch news" }, { status: 500 });
    }
  } else {
    return Response.json(existingData);
  }
}
