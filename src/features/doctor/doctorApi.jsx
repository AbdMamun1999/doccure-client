import { apiSlice } from "../api/apiSlice";

export const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDoctor: builder.query({
      query: () => ({
        url: "/doctors/alldoctor",
        method: "GET",
      }),
    }),

    addDoctor: builder.mutation({
      query: (data) => ({
        url: `/doctors/alldoctor`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllDoctorQuery, useAddDoctorMutation } = doctorApi;
