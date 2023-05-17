import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "accessToken",
            JSON.stringify({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );
        } catch (error) {}
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "accessToken",
            JSON.stringify({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation } = authApi;
