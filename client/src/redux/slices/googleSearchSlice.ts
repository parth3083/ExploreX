import { createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

interface SearchState {
    query: string;
    output:  { filteredResults: { title: string; link: string; description: string }[] } | null;
    loading: boolean;
    error: string | null;
  }

const initialState:SearchState = {
    query: '',
    output: null,
    loading: false,
    error: null
}

export const fetchGoogleSearchResults = createAsyncThunk(
    'googleSearch/fetchGoogleSearchResults', async (query: string, { rejectWithValue }) => {
        try {
            const response = await axios.post("/api/googleSearch", { query }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log("This is the output of the googleSearchSlice : ",response.data)
            return response.data;
        } catch (error:any) {
            console.error("Error fetching Google search results:", error); // Log the error
      return rejectWithValue(error.response?.data || error.message);
        }
    }
)
const googleSearchSlice = createSlice({
    name: "googleSearch",
    initialState,
    reducers: {
      setQuery: (state, action) => {
        state.query = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchGoogleSearchResults.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchGoogleSearchResults.fulfilled, (state, action) => {
          state.loading = false;
          state.output = action.payload;
        })
        .addCase(fetchGoogleSearchResults.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  // Export actions and reducer
  export const { setQuery } = googleSearchSlice.actions;
  export default googleSearchSlice.reducer;