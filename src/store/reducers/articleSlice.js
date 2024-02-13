import { createSlice } from "@reduxjs/toolkit";


const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    article: null,
    currentPage: 1,
    articlesCount: null,
    loading: false,
    error: null,
  },
  reducers: {
    togglePage(state, action) {
      state.currentPage = action.payload;
    },
  }
});
export const { togglePage, setArticle } = articleSlice.actions;
export default articleSlice.reducer;
