import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAppointment: builder.mutation({
      query: (data) => ({
        url: "/doctor/appointments",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
        } catch (error) {}
      },
    }),
  }),
});

export const { useCreateAppointmentMutation } = authApi;
