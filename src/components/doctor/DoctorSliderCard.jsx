import React from "react";
import { GoLocation } from "react-icons/go";
import { FaStar, FaUserTie } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import ToolTipUi from "../ui/ToolTipUi";
import RatingUi from "../ui/Ratings";

const DoctorSliderCard = ({ doctor }) => {
  const {
    _id,
    name,
    image,
    title,
    chamber,
    visitingFees,
    totalPatient,
    visitingHour,
  } = doctor || {};

  console.log(doctor);
  return (
    <Card className="w-full max-w-[26rem]  shadow-lg">
      <CardHeader floated={false} color="blue-gray" className="shadow-none  ">
        <img className="shadow-none " src={image} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>

      <CardBody className="py-2 px-3.5">
        <div className="flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-medium capitalize"
          >
            {name}
          </Typography>
        </div>
        <Typography color="gray">{title.slice(0, 26)}</Typography>
        <div className="flex flex-col gap-1">
          <RatingUi />
          <ToolTipUi title="Chamber" para={chamber} Icon={GoLocation} />
          <ToolTipUi title="Visiting Hour" para={visitingHour} Icon={BsClock} />
          <Typography variant="small" className=" flex gap-1 items-center">
            <MdInfoOutline />${visitingFees}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="py-0 px-3.5 pb-3">
        <div className="flex justify-between gap-x-3">
          <Link
            to={`/doctors-profile/${_id}`}
            className="rounded-full px-4 py-2 text-[14px] text-[#204892] bg-[#e8f6ff] hover:bg-[#1b5d92] hover:text-white ease-in-out duration-300"
          >
            View Profile
          </Link>
          <Link
            to={`/doctors-booking/${_id}`}
            className="rounded-full px-4 py-2 text-[14px] text-white bg-[#10defd]  hover:bg-[#1b5d92] hover:text-white ease-in-out duration-300"
          >
            Book now
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DoctorSliderCard;

/*   <div className="rounded-md overflow-hidden p-2 bg-[#e0f2fe]">
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
          <Link
            to={`/doctors-booking/${_id}`}
            className="rounded-full px-4 py-2 text-[14px] text-white bg-[#10defd]  hover:bg-[#1b5d92] hover:text-white ease-in-out duration-300"
          >
            Book now
          </Link>
        </div>
      </div>
    </div> */
