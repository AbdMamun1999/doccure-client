import React from "react";
import DoctorsFilter from "../../components/search_doctors/DoctorFilter";
import DoctorGrid from "../../components/search_doctors/DoctorsGrid";

const SearchedDoctor = () => {
  return (
    <section className="overflow-hidden">
      <div className="w-[88%] mx-auto my-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-5 gap-x-5 ">
          <div className="rounded-md border-2 lg:col-span-1 h-[100vh] lg:overflow-y-auto lg:scrollbar-hide">
            <DoctorsFilter />
          </div>
          <div className="lg:col-span-4 h-[100vh]  lg:overflow-y-auto bg-white  lg:scrollbar-hide">
            <DoctorGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchedDoctor;
