import React from "react";
import { useSwiper } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const SliderHeader = ({ title, handleNext, handlePrev }) => {
  return (
    <div className="flex justify-between items-center my-5">
      <div>
        <h2 className="text-[26px] text-[#204892] font-semibold">{title}</h2>
        <p className="text-[14px] text-[#757578]">
          Access to expert physicians and surgeons, advanced technologies and
          top-quality{" "}
        </p>
        <p className="text-[14px] text-[#757578]">
          surgery facilities right here.
        </p>
      </div>
      <div className="flex gap-x-4">
        <button
          onClick={handlePrev}
          className="w-[30px] h-[30px] text-5xl border flex justify-center items-center rounded-full hover:bg-blue-500 hover:text-white ease-in-out duration-300"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-[30px] h-[30px] text-5xl border flex justify-center items-center rounded-full hover:bg-blue-500 hover:text-white ease-in-out duration-300"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SliderHeader;
