import React from "react";
import { useGetAllDoctorQuery } from "../../../features/doctor/doctorApi";
import DoctorRow from "../../../components/doctor/DoctorRow";
// import { MdDelete } from "react-icons/md";
// import moment from "moment/moment";

const DoctorsTable = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetAllDoctorQuery();
  const { data: doctors } = data || {};

  let content;

  if (isLoading) content = <p>Loading</p>;

  if (!isLoading && isError) content = <p>There was and error occured</p>;

  if (!isLoading && !isError && doctors?.length === 0)
    content = <p>No Appointment</p>;

  if (!isLoading && !isError && doctors?.length > 0) {
    content = (
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
                Doctor's Title
              </th>
              <th className="pl-4 pr-4 pt-2 pb-2 text-left font-medium">
                Fees
              </th>
              <th className="pl-4 pr-4 pt-2 pb-2 text-left font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-600/50">
            {doctors.map((doctor) => (
              <DoctorRow key={doctor._id} doctor={doctor} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return content;
};

export default DoctorsTable;
