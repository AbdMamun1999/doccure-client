import React from "react";
import { MdDelete } from "react-icons/md";
// import doctorOne from "../../assets/doctors/doctor-01.jpg";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { useGetAppointmentQuery } from "../../../features/appointment/appointmentApi";

const AllAppointment = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    data: appointments,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAppointmentQuery(user?.email);

  const { data } = appointments || {};

  let content;

  if (isLoading) content = <p>Loading</p>;

  if (!isLoading && isError) content = <p>There was and error occured</p>;

  if (!isLoading && !isError && data?.length === 0)
    content = <p>No Appointment</p>;

  if (!isLoading && !isError && data?.length > 0) {
    content = data.map((appointment) => (
      <tr key={appointment._id}>
        <td className="pl-4 pr-4 pt-2 pb-2 whitespace-nowrap">
          <div class="flex items-center gap-2">
            {/* <img
              // src={doctor.image}
              class="h-[36px] w-[36px] rounded-full object-cover"
            /> */}
            <p class="label">{appointment?.doctorName}</p>
          </div>
        </td>
        <td className="pl-4 pr-4 pt-2 pb-2 whitespace-nowrap">
          {moment(appointment.appointmentDate).format("MMM Do YY")}
        </td>
        <td className="pl-4 pr-4 pt-2 pb-2 whitespace-nowrap">100</td>
        <td className="pl-4 pr-4 pt-2 pb-2 whitespace-nowrap flex gap-x-2">
          <button
          // onClick={handleDelete}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-red-500 cursor-pointer transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <Link to={`/admin/editAssignment`}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
        </td>
      </tr>
    ));
  }

  return (
    <div className="overflow-x-auto py-20 px-20 bg-[#f8fafc] text-[#171c2a] min-h-screen ">
      <div className="flex flex-col lg:flex-row justify-between gap-y-4 px-4 mb-5">
        <div>
          <input
            className="rounded-full px-4 py-1 text-black border-2 border-blue-600"
            placeholder="Search doctor"
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <button className="rounded-full border-white bg-[#34b5fd] px-4 py-1 border-2">
            Add Doctor
          </button>
        </div>
      </div>

      <table className="divide-y-1 text-base divide-gray-600 w-full ">
        <thead>
          <tr>
            <th className="whitespace-nowrap pl-4 pr-4 pt-2 pb-2 text-left font-medium">
              Doctor's Name
            </th>
            <th className="pl-4 pr-4 pt-2 pb-2 text-left font-medium">
              Appointment date
            </th>
            <th className="pl-4 pr-4 pt-2 pb-2 text-left font-medium">Fees</th>
            <th className="pl-4 pr-4 pt-2 pb-2 text-left font-medium">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-600/50">{content}</tbody>
      </table>
    </div>
  );
};

export default AllAppointment;
