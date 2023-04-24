import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface AuthResponse {
  token: string;
}

const BASE_URL = "https://api.wisey.app/api/v1";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/anonymous?platform=subscriptions`,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Request-Headers", "authorization");
      return headers;
    },
  }),
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getToken: builder.query<AuthResponse, string>({
      query: () => "",
      providesTags: ["Auth"],
    }),
  }),
});

export const { useGetTokenQuery } = authApi;
