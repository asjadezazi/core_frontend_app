import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/",
    credentials: "include",
  }),
  keepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ["Post", "User", "Me"],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => (
        console.log("service wala signin", data),
        {
          url: "register",
          method: "POST",
          body: data,
        }
      ),
      invalidDateTags: ["Me"],
    }),
    login: builder.mutation({
      query: (data) => (
        console.log("service wala login", data),
        {
          url: "login",
          method: "POST",
          body: data,
        }
      ),
      invalidDateTags: ["Me"],
    }),
  }),
});

// export const { useSigninMutation } = serviceApi;
export const { useSigninMutation, useLoginMutation } = serviceApi;
