import React, { useState } from "react";
import docImgOne from "../../assets/doctors/doctor-01.jpg";
import { useSelector } from "react-redux";
import { useGetADoctorQuery } from "../../features/doctor/doctorApi";
import { useParams } from "react-router-dom";
import { useCreateAppointmentMutation } from "../../features/appointment/appointmentApi";

const AppointmentBook = () => {
  const { doctorId } = useParams();

  const { user } = useSelector((state) => state.auth);
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const [
    createAppointment,
    {
      data: appointment,
      isLoading: isLoadingAppointment,
      isError: isErrorAppointment,
      isSuccess: isSuccessAppointment,
      error: errorAppointment,
    },
  ] = useCreateAppointmentMutation();

  //
  const {
    data: doctor,
    isLoading: isLoadingDoctor,
    isError: isErrorDoctor,
    isSuccess: isSuccessDoctor,
    error: errorDoctor,
  } = useGetADoctorQuery(doctorId);

  const {
    _id,
    name: doctorName,
    email: doctorEmail,
    image,
    title,
    about,
    role,
    specialist,
    gender,
    consultant_status,
    location,
    visiting_hour,
    visiting_fees,
    total_patient,
    like,
  } = doctor?.data || {};

  const {
    _id: patientId,
    firstName,
    lastName,
    email: patientEmail,
  } = user || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    createAppointment({
      doctorId,
      doctorEmail,
      doctorName,
      patientId,
      patientEmail,
      patientPhone: phone,
      reason,
      appointmentDate: date,
      patientName: firstName + " " + lastName,
    });
  };

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
                <div className="flex items-center justify-center">
                  <div className="mx-auto w-full  bg-white p-8 rounded-md">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Full Name
                        </label>
                        <input
                          value={firstName + " " + lastName}
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          readOnly
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="phone"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Phone Number
                        </label>
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Enter your phone number"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          required
                        />
                      </div>

                      <div className="mb-5">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Email Address
                        </label>
                        <input
                          value={patientEmail}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          readOnly
                          required
                        />
                      </div>

                      <div className="mb-5">
                        <label
                          htmlFor="reason"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Reason for appointment
                        </label>
                        <textarea
                          onChange={(e) => setReason(e.target.value)}
                          name="emreasonail"
                          id="reason"
                          placeholder="Reason for appoint"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          required
                        ></textarea>
                      </div>

                      <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label
                              htmlFor="date"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Date
                            </label>
                            <input
                              onChange={(e) => setDate(e.target.value)}
                              type="date"
                              name="date"
                              id="date"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              required
                            />
                          </div>
                        </div>
                        {/* <div className="w-full px-3 sm:w-1/2">
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
                        </div> */}
                      </div>

                      <div>
                        <button
                          disabled={isLoadingAppointment}
                          type="submit"
                          class={`hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none ${
                            user?._id ? "cursor-pointer" : "cursor-not-allowed"
                          } `}
                        >
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
                            src={image}
                            alt={doctorName}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold">{doctorName}</p>
                      <p className="text-xs font-semibold">{specialist}</p>
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
