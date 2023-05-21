import React, { useEffect } from "react";
import doctorImgOne from "../../assets/doctors/doctor-01.jpg";
import specialOne from "../../assets/icons/specialities-01.png";
import { SlLike } from "react-icons/sl";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DoctorTab from "../../components/doctor/DoctorTabs";
import { useGetADoctorQuery } from "../../features/doctor/doctorApi";
import moment from "moment/moment";

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const {
    data: doctor,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetADoctorQuery(doctorId);

  const {
    _id,
    name,
    email,
    image,
    title,
    about,
    role,
    specialist,
    gender,
    consultant_status,
    location,
    visiting_hour,
    visiting_fees,
    total_patient,
    like,
  } = doctor?.data || {};

  console.log(doctorId);

  //   let content = null;

  //   if (isLoading) {
  //     content = <p>Loading</p>;
  //   }

  //   if (!isLoading && isError) {
  //     content = <p>There was an error</p>;
  //   }

  //   if (!isLoading && !isError && doctor?.data?._id && isSuccess) {
  //   }

  return (
    <section>
      <div className="w-[75%] mx-auto mt-24 lg:h-[100vh] overflow-auto">
        <div className="flex flex-col lg:flex-row border items-center gap-10 p-3 rounded-md">
          <div>
            <div>
              <div className="w-[300px] h-[300px] rounded-md overflow-hidden border">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src={image}
                  alt={name}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <p className="mb-2 text-[#8492a6]">
                    {moment(new Date()).format("MMM Do YY")}
                  </p>
                  <h3 className="text-[#396cf0] text-3xl font-bold mb-2">
                    {name}
                  </h3>
                  <p className="mb-2 text-[#8492a6]">
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                  </p>
                  <p className="mb-2 text-[.9375rem] text-black font-semibold">
                    You have <span className="text-[#396cf0]">18 patients</span>{" "}
                    remaining today!
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-3">
                <button className="px-4 py-2 bg-blue-700 text-white rounded-md font-semibold">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <DoctorTab />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
