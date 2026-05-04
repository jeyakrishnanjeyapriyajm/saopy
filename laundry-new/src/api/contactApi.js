import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
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
