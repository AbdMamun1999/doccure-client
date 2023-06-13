import React from "react";
import counterBgOne from "../../assets/counter/counter-bg-01.png";
import counterBgTwo from "../../assets/counter/counter-bg.png";
import { FaUserMd, FaTrophy } from "react-icons/fa";
import CountUp from "react-countup";
import CountUpUi from "../countUp/CountUp";

const CounterSection = () => {
  return (
    <section
      className="relative mt-20 h-[500px] md:h-auto"
      style={{
        background:
          "linear-gradient(90deg, #1B5A90 0%, #13A0CA 66.9%, #0CE0FF 106.51%)",
      }}
    >
      <div className="">
        <div className="hidden md:block">
          <div className=" flex justify-between items-end">
            <img src={counterBgTwo} alt="Counter Bg Two" />
            <img src={counterBgOne} alt="Counter Bg One" />
          </div>
        </div>
        <div class="absolute top-0  left-0 w-full h-full">
          <div class="w-11/12 md:w-3/4 mx-auto h-full grid gap-y-5 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center content-center">
            <div class="">
              <div class="flex items-center gap-3">
                <span class=" border-white w-20 h-20 rounded-full bg-white flex items-center justify-center text-[42px] text-[#1B5A90]">
                  <FaUserMd />
                </span>
                <div class="text-white">
                  <h3>
                    <CountUpUi endPoint={180} time={3} />
                  </h3>
                  <p>Expert Doctors</p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex items-center gap-3">
                <span class="border border-white w-20 h-20 rounded-full bg-white flex items-center justify-center text-[42px] text-[#1B5A90]">
                  <FaUserMd />
                </span>
                <div class="text-white">
                  <h3>
                    <CountUpUi endPoint={26} time={3} />
                  </h3>
                  <p>Expert Doctors</p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex items-center gap-3">
                <span class="border border-white w-20 h-20 rounded-full bg-white flex items-center justify-center text-[42px] text-[#1B5A90]">
                  <FaUserMd />
                </span>
                <div class="text-white">
                  <h3>
                    <CountUpUi endPoint={10} time={3} number="K" />
                  </h3>
                  <p>Expert Doctors</p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex items-center gap-3">
                <span class="border border-white w-20 h-20 rounded-full bg-white flex items-center justify-center text-[42px] text-[#1B5A90]">
                  <FaUserMd />
                </span>
                <div class="text-white">
                  <h3>
                    <CountUpUi endPoint={150} time={3} number="K" />
                  </h3>
                  <p>Expert Doctors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
