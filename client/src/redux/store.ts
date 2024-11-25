import { configureStore} from "@reduxjs/toolkit"
import searchReducer from "@/redux/slices/searchSlice"
import googleSearchReducer from "@/redux/slices/googleSearchSlice"
import blogSearchReducer from "@/redux/slices/blogSearchSlice"


export const store = configureStore({
  reducer: {
    search: searchReducer,
    googleSearch: googleSearchReducer,
    blogSearch:blogSearchReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;