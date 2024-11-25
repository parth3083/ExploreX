import { configureStore} from "@reduxjs/toolkit"
import searchReducer from "@/redux/slices/searchSlice"
import googleSearchReducer from "@/redux/slices/googleSearchSlice"


export const store = configureStore({
  reducer: {
    search: searchReducer,
    googleSearch: googleSearchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;