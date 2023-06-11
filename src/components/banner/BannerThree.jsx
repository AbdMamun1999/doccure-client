import React from "react";
import bannerOne from "../../assets/banner/search-bg.png";
import { MdSearch } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";

const BannerThree = () => {
  return (
    <section
      className=" min-h-[360px] md:min-h-[330px] lg:min-h-[401px]  md:banner-bg-image mx-auto max-w-screen-3xl bg-[#f9f9f9]  w-full bg-contain bg-no-repeat  bg-bottom bg-blend-darken overflow-hidden "
      // style={{ backgroundImage: `url(${bannerOne})` }}
    >
      <div className="mt-4 md:mt-[70px] lg:mt-[63px]">
        <div className=" max-w-3xl mx-auto ">
          <h1 className="text-center text-[32px] lg:text-[34px] font-semibold text-[#272b41]">
            Search Doctor, Make an Appointment
          </h1>
          <p className="md:mt-1 lg:mt-[6px] text-center text-[#757575] text-[16] md:text-[18px] lg:text-xl">
            Discover the best doctors, clinic & hospital the city nearest to
            you.
          </p>
          <div className="flex flex-col md:flex-row gap-y-4 max-w-full px-5 mx-auto mt-[26px] gap-x-3">
            <div class="relative w-full max-w-md mx-auto">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-xl">
                  <IoLocationOutline />
                </span>

                <input
                  type="text"
                  class="w-full py-2 lg:py-2 pl-10 pr-4 text-gray-700 bg-white border border-[#ccc] rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-[#ccc] focus:border-[#ccc] dark:focus:border-[#ccc] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  placeholder="Search by location"
                />
              </div>
              <p className="text-xs mt-1 text-[#757575]">
                Based on your Location
              </p>
            </div>
            <div class="relative w-full max-w-md  mx-auto rounded-md">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-xl">
                  <MdSearch />
                </span>

                <input
                  type="text"
                  class="w-full py-2 lg:py-2 pl-10 pr-4 text-gray-700 bg-white border border-[#ccc] rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-[#ccc] focus:border-[#ccc] dark:focus:border-[#ccc] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  placeholder="Search by doctor"
                />
              </div>
              <p className="text-sm mt-1 text-[#757575]">
                Ex : Dental or Sugar Check up etc
              </p>
            </div>

            <div>
              <button
                type="submit"
                class="hidden md:block p-2.5 text-xl font-medium text-white bg-primary rounded-lg   hover:bg-primary  focus:outline-none "
              >
                <MdSearch />
              </button>
              <Button
                color="primary"
                className="max-w-md md:hidden mx-auto"
                fullWidth
              >
                block level button
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default BannerThree;
