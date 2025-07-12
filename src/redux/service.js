import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/",
    credentials: true,
  }),
  keepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ["Post","User","Me"],
  endPoint: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({
        url: "login",
        method: POST,
        body: data,
      }),
      invalidDateTags: ["Me"]
    }),
  }),
});

// export const { useSigninMutation } = serviceApi;
export const { useSigninMutation } = serviceApi;
