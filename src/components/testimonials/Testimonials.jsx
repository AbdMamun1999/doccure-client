import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronRight } from "react-icons/bs";

// react icons

import imgOne from "../../assets/specialities/specialities-01.svg";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  return (
    <section className="bg-[#e8f6ff] mb-20">
      <div>
        <div className="lg:h-[350px]  flex items-center ">
          <div className="w-[85%] mx-auto ">
            <div>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                loop={true}
                spaceBetween={30}
                ref={SlideRef}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <TestimonialItem img={imgOne} />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem img={imgOne} />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem img={imgOne} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
