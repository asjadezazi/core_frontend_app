import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addMyInfo } from "./slice";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
    credentials: "include",
    //  credentials: true,
    //
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    //
  }),
  keepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ["Post", "User", "Me"],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: "/api/register",
          method: "POST",
          body: data,
        }
      ),
      invalidateTags: ["Me"],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/api/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
    myInfo: builder.query({
      query: () => ({
        url: "/api/me",
        method: "GET",
      }),
      providesTags: ["Me"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addMyInfo(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
        logout: builder.mutation({
      query: () => ({
        url: "/api/logout",
        method: "POST",
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useSigninMutation,
  useLoginMutation,
  useLogoutMutation,
  useMyInfoQuery,
} = serviceApi;
