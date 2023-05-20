import React from "react";
import faqImage from "../../assets/doctors/faq-img.png";

const FaqBanner = () => {
  return (
    <div className="">
      <div>
        <div className="md:w-[546px] md:h-[467px] lg:w-full h:h-full mx-auto">
          <img className="w-full" src={faqImage} alt="FAQ-Icon" />
        </div>
      </div>
    </div>
  );
};

export default FaqBanner;
