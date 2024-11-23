import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  results: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

// Utility function to construct URLs
const constructUrl = (
  baseUrl: string,
  params: Record<string, string | undefined>
): string => {
  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `${baseUrl}?${queryString}`;
};

// Async thunk to fetch videos
export const fetchYoutubeVideos = createAsyncThunk(
  "search/fetchYoutubeVideos",
  async (query: string, { rejectWithValue }) => {
    try {
      const yt_api_key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      if (!yt_api_key) {
        throw new Error("YouTube API key is not defined in environment variables.");
      }

      // Construct URLs for global trending and India trending
      const globalTrendingUrl = constructUrl(
        "https://www.googleapis.com/youtube/v3/search",
        {
          part: "snippet",
          q: query,  
          key: yt_api_key,
          maxResults: "15",
          regionCode: "US",  
        }
      );

      const indiaTrendingUrl = constructUrl(
        "https://www.googleapis.com/youtube/v3/search",
        {
          part: "snippet",
          q: query,  
          key: yt_api_key,
          maxResults: "15",
          regionCode: "IN",  
        }
      );

      // Fetch videos from both endpoints
      const [globalResponse, indiaResponse] = await Promise.all([
        axios.get(globalTrendingUrl),
        axios.get(indiaTrendingUrl),
      ]);

      // Process global trending videos
      const globalVideos = globalResponse.data.items.map((item: any) => ({
        ...item,
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        videoId: item.id.videoId,
      }));

      // Process India trending videos
      const indiaVideos = indiaResponse.data.items.map((item: any) => ({
        ...item,
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        videoId: item.id.videoId,
      }));

      // Combine global and India trending results
      return [...globalVideos, ...indiaVideos];
    } catch (error: any) {
      console.error("Error fetching YouTube videos:", error);
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchYoutubeVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYoutubeVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchYoutubeVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
