import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface searchState {
  query: string;
  results: any[];
  loading: boolean;
  error: string | null;
}

const initialState: searchState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

export const fetchYoutbeVideo = createAsyncThunk(
  "search/fetchYoutubeVideos",
  async (query: string, { rejectWithValue }) => {
    try {
      const yt_api_key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${yt_api_key}&maxResults=10`;
      const response = await axios.get(url);
      return response.data.items;
    } catch (error: any) {
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
      .addCase(fetchYoutbeVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYoutbeVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchYoutbeVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
