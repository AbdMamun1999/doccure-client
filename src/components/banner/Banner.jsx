import React from "react";
import bannerOne from "../../assets/banner/01.jpg";

const Banner = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <div
        className=" w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerOne})` }}
      >
        <div className="bg-blend-overlay h-full  bg-[rgba(60,72,88,.7)] ">
          <div className="w-[85%] h-full flex items-center mx-auto">
            <div className="lg:flex-1">
              <div>
                <h1 className="mb-4 text-5xl font-semibold text-white">
                  Meet The{" "}
                </h1>
                <h1 className="text-5xl font-semibold  text-white">
                  Best Doctor{" "}
                </h1>
                <p className="my-4 text-[rgba(255,255,255,.5)]">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>

                <div>
                  <div>
                    <button className="px-4 bg-blue-400 py-2 rounded-md text-white">
                      Make appointment
                    </button>
                  </div>
                </div>
                <small className=" text-[rgba(255,255,255,.5)]">
                  T&C apply. Please read Terms and Conditions{" "}
                </small>
              </div>
            </div>
            <div className="lg:flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
