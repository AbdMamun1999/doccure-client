import React from "react";
import blogOne from "../../assets/blogs/blog-11.jpg";
import specialOne from "../../assets/icons/specialities-01.png";
import { SlLike } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorsCard = ({ doctor }) => {
  return (
    <div className="border-2 rounded-md p-5">
      <div>
        <div className="flex flex-col lg:flex-row gap-x-4 gap-y-3 ">
          <div>
            <div>
              <div className="w-[160px] h-[160px] rounded-md overflow-hidden mx-auto">
                <img
                  className="rounded-md w-full h-full object-cover hover:scale-105 duration-300 ease-in-out"
                  src={doctor?.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" h-full">
              <div className="flex justify-center md:justify-start items-center gap-x-4">
                <h6 className="flex items-center gap-x-2 text-[#2E384] text-[20px] font-semibold">
                  {doctor.name}
                </h6>
              </div>
              <div>
                <p className="text-center md:text-left text-[14px] text-[#272b41] hover:text-blue-600 transition-colors duration-200 ease-in-out">
                  {doctor.title}
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-x-1">
                <div>
                  <div className="w-4">
                    <img src={specialOne} alt="" />
                  </div>
                </div>
                <p className="text-center md:text-left text-[14px] text-[#6B7280]">
                  {doctor.specialist}
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
                <p>Location</p>
              </div>
              <div>
                <div>
                  <div className="z-0 text-center md:text-left">
                    <Link
                      to={`/doctors-profile/${doctor._id}`}
                      className="mr-4 relative inline-flex items-center justify-start  px-4 py-2 overflow-hidden font-medium transition-all bg-[#e8f6ff]  rounded-md hover:bg-[#1b5d92] group"
                    >
                      <span className="z-0 absolute inset-0 border-2 group-hover:border-[25px] ease-linear duration-100 transition-all border-[#1b5d92] rounded-md"></span>
                      <span className="z-0 relative w-full text-left text-[#1b5d92] transition-colors duration-200 ease-in-out group-hover:text-white">
                        View Profile
                      </span>
                    </Link>
                    <a
                      href="#_"
                      className=" relative inline-flex items-center justify-start  px-4 py-2 overflow-hidden font-medium transition-all bg-[#e8f6ff]  rounded-md hover:bg-[#1b5d92] group"
                    >
                      <span className="z-0 absolute inset-0 border-2 group-hover:border-[25px] ease-linear duration-100 transition-all border-[#1b5d92] rounded-md"></span>
                      <span className="z-0 relative w-full text-left text-[#1b5d92] transition-colors duration-200 ease-in-out group-hover:text-white">
                        Appointment
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
