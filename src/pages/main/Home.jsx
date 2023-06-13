import React from "react";
import Banner from "../../components/banner/Banner";
import FaqSection from "../../components/accordion/FaqSection";
import Articles from "../../components/articles/Articles";
import Testimonials from "../../components/testimonials/Testimonials";
import DoctorSlider from "../../components/doctor/DoctorSlider";
import ClinicSpecialities from "../../components/clinic/ClinicSpecialities";
import BannerTwo from "../../components/banner/BannerTwo";
import BannerThree from "../../components/banner/BannerThree";
import Services from "../../components/services/Services";
import CounterSection from "../../components/counter/CounterSection";

const Home = () => {
  return (
    <>
      <BannerThree />
      {/* <Banner /> */}
      {/* <BannerTwo /> */}
      <Services />
      <DoctorSlider />
      <ClinicSpecialities />
      <FaqSection />
      <CounterSection />
      <Articles />
      <Testimonials />
    </>
  );
};

export default Home;
