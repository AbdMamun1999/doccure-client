import React, { useEffect } from "react";
import doctorImgOne from "../../assets/doctors/doctor-01.jpg";
import specialOne from "../../assets/icons/specialities-01.png";
import { SlLike } from "react-icons/sl";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DoctorTab from "../../components/doctor/DoctorTabs";
import { useGetADoctorQuery } from "../../features/doctor/doctorApi";

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

  console.log(doctor?.data);

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
      <div className="w-[88%] mx-auto mt-12">
        <div className="w-full grid grid-cols-1 justify-items-center lg:grid-cols-3">
          <div className="w-full  h-full">
            <div className="w-full  h-full">
              <div className="w-full h-full">
                <div className="w-full h-full overflow-hidden mx-auto">
                  <img
                    className="h-full w-full object-cover "
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className="w-full px-3">
              <div className=" h-full">
                <div className="flex justify-center md:justify-start items-center gap-x-4">
                  <h6 className="flex items-center gap-x-2 text-[#2E384] text-[20px] font-semibold">
                    {name}
                  </h6>
                </div>
                <div>
                  <p className="text-center md:text-left text-[14px] text-[#272b41] hover:text-blue-600 transition-colors duration-200 ease-in-out">
                    {title}
                  </p>
                </div>
                <div className=" flex items-center justify-center lg:justify-start gap-x-1">
                  <p className="text-center md:text-left text-[14px] text-[#6B7280]">
                    {specialist} Specialist
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-x-1">
                  <span className="text-[14px]">
                    <SlLike />
                  </span>
                  <p className="text-center md:text-left text-[14px] text-[#6B7280]">
                    97
                  </p>
                </div>
                <div className="flex items-center gap-x-1 justify-center lg:justify-start md:text-left text-[14px] text-[#6B7280]">
                  <span className="text-[14px]">
                    <FaMapMarkerAlt />
                  </span>
                  <p>{location}</p>
                </div>
                <div></div>
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
