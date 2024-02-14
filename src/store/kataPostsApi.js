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
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        body,
      }),
      invalidatesTags: [{ type: "Articles", id: "LIST" }],
    }),
    updateAnArticle: build.mutation({
        query: ({body, slug}) => ({
          url: `articles/${slug}`,
          method: "PUT",
          headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          body,
        }),
        invalidatesTags: [{ type: "Article" }],
      }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetAnArticleQuery,
  useCreateAnArticleMutation,
  useUpdateAnArticleMutation,
} = kataPostsApi;
