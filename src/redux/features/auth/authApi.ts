import { baseApi } from "@/redux/api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    register: builder.mutation({
      query: (userInfo) => {
        return {
          url: "auth/signup",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    getUserByEmail: builder.query({
      query: (email) => {
        console.log(email);
        return {
          url: `auth/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserByEmailQuery } =
  authApi;
