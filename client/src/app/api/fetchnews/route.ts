import axios from "axios";
import NewsModel from "@/models/news";
import { title } from "process";

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
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];
  const url = `https://newsapi.org/v2/everything?from=${today}&to=${today}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

  const response = await axios.get(url);

  const todaysNews: NewsArticle[] = response.data.articles.map((news: any) => ({
    title: news.title,
    imageUrl: news.urlToImage || "there_is_an_image.jpg",
  }));

  const weekUrl = `https://newsapi.org/v2/everything?from=${getStartOfWeek()}&to=${today}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;
  const monthUrl = `https://newsapi.org/v2/everything?from=${getStartOfMonth()}&to=${today}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

  const weekResponse = await axios.get(weekUrl);
  const monthResponse = await axios.get(monthUrl);

  const thisWeeksNews: NewsArticle[] = weekResponse.data.articles.map(
    (news: any) => ({
      title: news.title,
      imageUrl: news.urlToImage || "there_is_an_image.jpg",
    })
  );
  const thisMonthsNews: NewsArticle[] = weekResponse.data.articles.map(
    (news: any) => ({
      title: news.title,
      imageUrl: news.urlToImage || "there_is_an_image.jpg",
    })
  );

  return { todaysNews, thisMonthsNews, thisWeeksNews };
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
  const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY || "";
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];

  const existingData = await NewsModel.findOne();

  if (
    !existingData ||
    existingData.lastUpdated.toISOString().split("T")[0] !== today
  ) {
    try {
      const { todaysNews, thisMonthsNews, thisWeeksNews } = await fetchNews(
        apiKey
      );
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
