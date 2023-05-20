import React from "react";
import Banner from "../../components/banner/Banner";
import FaqSection from "../../components/accordion/FaqSection";
import Articles from "../../components/articles/Articles";
import Testimonials from "../../components/testimonials/Testimonials";
import DoctorSlider from "../../components/doctor/DoctorSlider";

const Home = () => {
  return (
    <>
      <Banner />
      <DoctorSlider />
      <FaqSection />
      <Articles />
      <Testimonials />
    </>
  );
};

export default Home;
