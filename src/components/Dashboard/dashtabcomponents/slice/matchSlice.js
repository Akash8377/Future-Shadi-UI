
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import config from "../../../../config";

export const matchesApi = createApi({
  reducerPath: "matchesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${config.baseURL}/api/profile` }),
  endpoints: (builder) => ({
    getUsersByLookingFor: builder.query({
      query: (looking_for) => `users-by-looking-for?looking_for=${looking_for}`,
    }),
  }),
});

// Export the hook like this:
export const { useGetUsersByLookingForQuery } = matchesApi;
