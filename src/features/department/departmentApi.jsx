import { apiSlice } from "../api/apiSlice";

export const departmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDeparment: builder.query({
      query: () => ({
        url: "/hospital/department",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDeparmentQuery } = departmentApi;
