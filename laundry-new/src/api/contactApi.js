import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL =
  // import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  
  import.meta.env.VITE_API_BASE_URL || "http://10.10.1.90:5000";
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