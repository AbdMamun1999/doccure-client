import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="w-full px-4  md:w-[75%] mx-auto mt-10 lg:mt-16">
      <h2 className="text-3xl font-medium text-center text-[#272b41]">
        What are you looking for?
      </h2>
      <div className="mt-14 w-full flex flex-col lg:flex-row gap-x-5 gap-y-5">
        <Service
          img="https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-07.jpg"
          title="Visit a Doctor"
        />
        <Service
          img="https://doccure.dreamguystech.com/html/template/assets/img/img-pharmacy1.jpg"
          title="Find a Pharmacy"
        />
        <Service
          img="https://doccure.dreamguystech.com/html/template/assets/img/lab-image.jpg"
          title="Find a Lab"
        />
      </div>
    </div>
  );
};

export default Services;
