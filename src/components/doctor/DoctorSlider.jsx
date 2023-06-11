import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import DoctorSliderCard from "./DoctorSliderCard";
import SliderHeader from "../ui/SliderHeader";
import { useGetAllDoctorQuery } from "../../features/doctor/doctorApi";

const DoctorSlider = () => {
  const SlideRef = useRef();

  const { data, isLoading, isSuccess, isError, error } = useGetAllDoctorQuery();
  const { data: doctors } = data || {};

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  let content;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  }

  if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        <p>An error found</p>
        {/* <Error message={error?.data} /> */}
      </li>
    );
  }

  console.log(error);

  if (!isLoading && !isError && doctors?.length === 0) {
    content = <li className="m-2 text-center">No Doctors found</li>;
  }

  if (!isLoading && !isError && doctors?.length > 0 && isSuccess) {
    content = (
      <section className="mt-16  bg-blue-gray-50 py-5">
        <div className="w-[85%] mx-auto">
          <SliderHeader
            title="Clinic & Specialities"
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          <div className="mt-10">
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

                760: {
                  slidesPerView: 2,
                },

                998: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {doctors.map((doctor) => (
                <SwiperSlide className=" rounded-md overflow-hidden">
                  <DoctorSliderCard key={doctor._id} doctor={doctor} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center my-6">
              <Link
                to="/all-doctors/serarch"
                className="py-2 px-8 bg-[#1b5f92] rounded text-white"
              >
                See All Specialities
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return content;
};

export default DoctorSlider;
