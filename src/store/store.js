import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./reducers/articleSlice";

export default configureStore({
  reducer: {
    articles: articleReducer,
  },
});
