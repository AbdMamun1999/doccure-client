import React from "react";
import blogOne from "../../assets/blogs/blog-11.jpg";
import { BiUser } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";

const ArticleCard = () => {
  return (
    <div className="border-2 rounded-md p-5">
      <div>
        <div className="flex flex-col lg:flex-row gap-x-4 ">
          <div>
            <div>
              <div className="rounded-md overflow-hidden">
                <img
                  className="rounded-md w-full object-cover hover:scale-105 duration-300 ease-in-out"
                  src={blogOne}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col  gap-y-2">
                <div className="flex justify-center md:justify-start items-center gap-x-4">
                  <p className="flex items-center gap-x-2 text-[#6B7280] te">
                    <span>
                      <BiUser />
                    </span>
                    <span>John Doe</span>
                  </p>
                  <p className="flex items-center gap-x-2 text-[#6B7280]">
                    <span>
                      <CiCalendar />
                    </span>
                    <span>13 Aug, 2023</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-center md:text-left text-[16px] font-semibold text-[#272b41] hover:text-blue-600 transition-colors duration-200 ease-in-out">
                    Doccure – Making your clinic painless visit?
                  </h4>
                </div>
                <div>
                  <p className="text-center md:text-left text-[15px] text-[#6B7280]">
                    Sed perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium
                  </p>
                </div>
                <div>
                  <div>
                    <div className="z-0 text-center md:text-left">
                      {/*  <button className="border-2 px-3 py-2 rounded">Read More</button> */}

                      {/* inline-block */}

                      <a
                        href="#_"
                        className=" relative inline-flex items-center justify-start  px-4 py-2 overflow-hidden font-medium transition-all bg-[#e8f6ff]  rounded-md hover:bg-[#1b5d92] group"
                      >
                        <span className="z-0 absolute inset-0 border-2 group-hover:border-[25px] ease-linear duration-100 transition-all border-[#1b5d92] rounded-md"></span>
                        <span className="z-0 relative w-full text-left text-[#1b5d92] transition-colors duration-200 ease-in-out group-hover:text-white">
                          Read More
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
