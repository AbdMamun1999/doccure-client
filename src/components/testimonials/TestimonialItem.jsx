import React from "react";
import clientOne from "../../assets/client/client-05.jpg";

const TestimonialItem = () => {
  return (
    <div className=" py-7">
      {/* px-12 */}
      <div>
        {/* grid grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 ">
          <div className="lg:col-span-1 flex justify-center items-center">
            <div>
              <div className="w-[200px] h-[200px] mx-auto text-center rounded-full  overflow-hidden">
                <img
                  className="object-cover w-full rounded-full"
                  src={clientOne}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 flex items-center">
            <div>
              <div>
                <div>
                  <h6 className="text-[18px] font-semibold text-[#0E82FD] mb-[8px]">
                    Testimonial
                  </h6>
                  <h1 className="text-[40px] font-semibold ">
                    What our client says
                  </h1>
                </div>
                <div>
                  <p className="text-[16px] mb-[10px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <h6>
                    <span>Richard</span>
                    <span>Michigan</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
