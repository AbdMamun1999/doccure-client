import React from "react";
import docImgOne from "../../assets/doctors/doctor-01.jpg";

const AppointmentBook = () => {
  return (
    <section className="bg-gray-100 overflow-hidden">
      <div className="mx-auto w-[80%] my-20">
        <h2 className="text-center text-3xl font-bold">
          Appointment booking page
        </h2>
        <div className="mt-8 flex flex-col lg:flex-row justify-between gap-5">
          <div className="order-2 lg:order-1 lg:basis-3/5">
            <div>
              <div>
                {/* form */}
                <h6 className="text-xl font-semibold capitalize mb-2">
                  patient info
                </h6>
                <div class="flex items-center justify-center">
                  <div class="mx-auto w-full  bg-white p-8 rounded-md">
                    <form>
                      <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="phone"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Enter your phone number"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>

                      <div class="mb-5">
                        <label
                          for="email"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>

                      <div class="mb-5">
                        <label
                          for="reason"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Reason for appointment
                        </label>
                        <textarea
                          name="emreasonail"
                          id="reason"
                          placeholder="Reason for appoint"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                      </div>

                      <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-5">
                            <label
                              for="date"
                              class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Date
                            </label>
                            <input
                              type="date"
                              name="date"
                              id="date"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-5">
                            <label
                              for="time"
                              class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Time
                            </label>
                            <input
                              type="time"
                              name="time"
                              id="time"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div class="mb-5 pt-3">
                        <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                          Address Details
                        </label>
                        <div class="-mx-3 flex flex-wrap">
                          <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                              <input
                                type="text"
                                name="area"
                                id="area"
                                placeholder="Enter area"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>
                          </div>
                          <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                              <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="Enter city"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>
                          </div>
                          <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                              <input
                                type="text"
                                name="state"
                                id="state"
                                placeholder="Enter state"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>
                          </div>
                          <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                              <input
                                type="text"
                                name="post-code"
                                id="post-code"
                                placeholder="Post Code"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}

                      <div>
                        <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                          Book Appointment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* form */}
              </div>
            </div>
          </div>
          {/* booking summary */}
          <div className="order-1 lg:order-2  lg:basis-2/5">
            <h6 className="text-xl font-semibold capitalize mb-2">
              Doctor's Summary
            </h6>
            <div>
              <div>
                <div className="border-2 px-3 py-3">
                  {/* card */}
                  <div className="flex items-center gap-x-3">
                    <div>
                      <div>
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                          <img
                            className="w-[40px] h-[40px] rounded-full object-cover border-2 border-blue-600"
                            src={docImgOne}
                            alt="name"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold">Doctors name</p>
                      <p className="text-xs font-semibold">Dentist</p>
                    </div>
                  </div>
                  {/* card */}
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          {/* booking summary */}
        </div>
      </div>
    </section>
  );
};

export default AppointmentBook;
