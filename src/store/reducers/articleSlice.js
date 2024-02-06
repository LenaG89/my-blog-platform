import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllArticles,
  fetchAnArticle,
} from "../serverActions/articlesThunks";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    article: null,
    currentPage: null,
    articlesCount: null,
    status: null,
    loading: false,
    error: null,
  },
  reducers: {
    togglePage(state, action) {
      state.currentPage = action.payload;
    },
    
  },
  extraReducers: (bulder) => {
    bulder.addCase(fetchAllArticles.pending, (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = null;
    });
    bulder.addCase(fetchAllArticles.fulfilled, (state, action) => {
      state.status = "resolved";
      state.loading = false;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    });
    bulder.addCase(fetchAllArticles.rejected, (state, action) => {
      state.status = "rejected";
      state.loading = false;
      state.error = action.payload.errors.body;
    });
    bulder.addCase(fetchAnArticle.pending, (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = null;
    });
    bulder.addCase(fetchAnArticle.fulfilled, (state, action) => {
      state.status = "resolved";
      state.loading = false;
      state.article = action.payload.article;
    });
    bulder.addCase(fetchAnArticle.rejected, (state, action) => {
      state.status = "rejected";
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { togglePage, setArticle } = articleSlice.actions;
export default articleSlice.reducer;
