import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ClinicSpecialities.css";

// react icons

import imgOne from "../../assets/specialities/specialities-01.svg";
import SliderHeader from "../ui/SliderHeader";
import ClinicSpecialitiesCard from "./ClinicSpecialitiesCard";

const ClinicSpecialities = () => {
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  return (
    <section className="w-[85%] mx-auto -z-0 mt-10">
      <SliderHeader
        title="Browse by Specialities"
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        spaceBetween={30}
        ref={SlideRef}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          998: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className="-z-50 res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
        <SwiperSlide className="res-slide w-[172px] h-[172px] flex justify-center items-center border rounded-md">
          <ClinicSpecialitiesCard img={imgOne} />
        </SwiperSlide>
      </Swiper>

      <div className="text-center my-6 mt-10">
        <button className="py-2 px-8 bg-[#1b5f92] rounded text-white">
          See All Specialities
        </button>
      </div>
    </section>
  );
};

export default ClinicSpecialities;
