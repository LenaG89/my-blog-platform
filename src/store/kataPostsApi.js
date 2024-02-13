import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kataPostsApi = createApi({
  reducerPath: "kataPostsApi",
  tagTypes: ["Articles", "Article"],
  baseQuery: fetchBaseQuery({
    baseUrl: `https://blog.kata.academy/api/`,
  }),
  endpoints: (build) => ({
    getAllArticles: build.query({
      query: (offset = 0) => `articles?limit=5&offset=${offset}`,
      providesTags: (result) =>
        result
          ? [
              ...result.articles.map(({ slug }) => ({
                type: "Articles",
                slug,
              })),
              { type: "Articles", id: "LIST" },
            ]
          : [{ type: "Articles", id: "LIST" }],
    }),

    getAnArticle: build.query({
      query: (slug) => `articles/${slug}`,
      providesTags: ["Article"],
    }),

    createAnArticle: build.mutation({
      query: (body) => ({
        url: "articles",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Articles", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetAnArticleQuery,
  useCreateAnArticleMutation,
} = kataPostsApi;
