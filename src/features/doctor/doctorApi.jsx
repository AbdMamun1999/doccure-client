import { apiSlice } from "../api/apiSlice";

export const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDoctor: builder.query({
      query: () => ({
        url: "/doctors/alldoctor",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDoctorQuery } = doctorApi;
