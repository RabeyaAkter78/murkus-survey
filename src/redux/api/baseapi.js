import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://115.127.156.13:7000/api",
  }),
  endpoints: (builder) => ({
   getSurveyQN: builder.query({
      query: () => "/single-surveys-questions/7e8f18c7-540e-4faa-b818-f08c3335e586",
    }),


    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    setForgetPass: builder.mutation({
      query: (values) => ({
        url: "/forget-pass",
        method: "POST",
        body: values,
      }),
    }),
    setvarificationCode: builder.mutation({
      query: (otp) => ({
        url: "/email-verified",
        method: "POST",
        body: otp,
      }),
    }),
    setResendCode: builder.mutation({
      query: (resendOtp) => ({
        url: "/resend-otp",
        method: "POST",
        body: resendOtp,
      }),
    }),
    setResetPass: builder.mutation({
      query: (values) => ({
        url: "/reset-pass",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const {useGetSurveyQNQuery,useLoginUserMutation, useSetForgetPassMutation, useSetvarificationCodeMutation,useSetResendCodeMutation,useSetResetPassMutation } =
  baseApi;
export default baseApi;
