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

    getADoctor: builder.query({
      query: (id) => ({
        url: `/doctors/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllDoctorQuery,
  useAddDoctorMutation,
  useGetADoctorQuery,
} = doctorApi;
