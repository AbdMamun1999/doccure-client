import React from "react";
import FaqBanner from "./FaqBanner";
import FaQuestions from "./FaQuestions";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  return (
    <div className="w-[85%] mx-auto mt-20">
      <h2 className="text-[26px] text-[#204892] font-semibold mb-5">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 content-center gap-x-8 ">
        <FaqBanner />
        <FaQuestions />
        {/* <FaqAccordion /> */}
      </div>
    </div>
  );
};

export default FaqSection;
