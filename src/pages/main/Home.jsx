import React from "react";
import Banner from "../../components/banner/Banner";
import FaqSection from "../../components/accordion/FaqSection";
import Articles from "../../components/articles/Articles";

const Home = () => {
  return (
    <>
      <Banner />
      <FaqSection />
      <Articles />
    </>
  );
};

export default Home;
