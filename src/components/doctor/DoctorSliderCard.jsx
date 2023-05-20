import React from "react";
import { GoLocation } from "react-icons/go";
import { FaStar, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorSliderCard = ({ doctor }) => {
  const { _id, name, image, title, chamber, visitingFees, totalPatient } =
    doctor || {};
  return (
    <div className="rounded-md overflow-hidden p-2 bg-[#e0f2fe]">
      <div className="relative">
        <img className="object-cover rounded-t-md" src={image} />
        <div className="absolute top-3 right-5 bg-[#1b5d92] px-2 py-1 rounded-md">
          <p className="text-white text-[14px] font-semibold">
            ${visitingFees}
          </p>
        </div>
      </div>
      <div className="px-3 py-4 bg-white">
        <div className="  flex items-center gap-x-1">
          <p className="text-[#1c5b90] flex gap-x-1 items-center py-1 rounded-md text-[12px] font-semibold ">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </p>
          <p className="text-[12px] text-[#1c5b90] ">(4.5)</p>
        </div>
        <div>
          <h5 className="mb-[-4px] text-[#1c5b90] font-semibold text-[18px]">
            {name}
          </h5>
          <small className="text-[12px] text-[#204892] leading-[8px]">
            {title}
          </small>
        </div>

        <div className="flex gap-x-2 items-center justify-between py-4">
          <p className="flex gap-x-1 items-center text-[13px]">
            <span>
              <GoLocation />
            </span>
            <span title={chamber}>{chamber?.slice(0, 20) + ".."}</span>{" "}
          </p>
          <p className="flex gap-x-1 items-center text-[13px]">
            <span>
              <FaUserTie />
            </span>
            <span>{totalPatient} Consultations</span>{" "}
          </p>
        </div>
        <div className="flex justify-between gap-x-3">
          <Link
            to={`/doctors-profile/${_id}`}
            className="rounded-full px-4 py-2 text-[14px] text-[#204892] bg-[#e8f6ff] hover:bg-[#1b5d92] hover:text-white ease-in-out duration-300"
          >
            View Profile
          </Link>
          <button className="rounded-full px-4 py-2 text-[14px] text-white bg-[#10defd]  hover:bg-[#1b5d92] hover:text-white ease-in-out duration-300">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorSliderCard;
