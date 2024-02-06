import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllArticles = createAsyncThunk(
  "articles/fetchAllArticles",
  async function (currentPage=1, api) {
    const baseUrl = `https://blog.kata.academy/api/`;
    const limit = 5;
    const offset = limit * currentPage - limit;
    const url = `articles?limit=${limit}&offset=${offset}`;
    try{
        const response = await fetch(`${baseUrl}${url}`);
        if (!response.ok){
            throw new Error (`Could not fetch articles`)
        }
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch (e){
        return api.rejectWithValue(e.message);
        }
    }
   
  
);
export const fetchAnArticle = createAsyncThunk(
    "articles/fetchAnArticle",
    async function (slug, api) {
      const baseUrl = `https://blog.kata.academy/api/`;
      const url = `articles/${slug}`;
      const response = await fetch(`${baseUrl}${url}`);
      const data = await response.json();
      console.log(data)
      return data;
    }
  );



