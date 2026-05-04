import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  console.error("⚠️ Backend not connected. Please set VITE_API_BASE_URL.");
}

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    submitContactForm: builder.mutation({
      query: (payload) => ({
        url: "/api/contact",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSubmitContactFormMutation } = contactApi;