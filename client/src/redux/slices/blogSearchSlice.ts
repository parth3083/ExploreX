import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SearchState {
  query: string;
  blogs: {
    blogResults: { title: string; link: string; description: string }[];
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: "",
  blogs: null,
  loading: false,
  error: null,
};

export const fetchBlogSearchResults = createAsyncThunk(
  "blogSearch/fetchBlogSearchResults",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/blogSearch",
        { query },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error("Error fetching Google search results:", error); // Log the error
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const blogSearchSlice = createSlice({
  name: "blogSearch",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions and reducer
export const { setQuery } = blogSearchSlice.actions;
export default blogSearchSlice.reducer;
