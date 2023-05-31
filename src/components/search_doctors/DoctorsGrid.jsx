import React, { useState } from "react";
import { useGetAllDoctorQuery } from "../../features/doctor/doctorApi";
import { useSelector } from "react-redux";
import DoctorsCard from "./DoctorCard";

const DoctorGrid = () => {
  const { search, departments, gender } = useSelector((state) => state.filter);
  const { data, isLoading, isSuccess, isError, error } = useGetAllDoctorQuery();
  const { data: doctors } = data || {};

  const filterByDepartment = (doctor) => {
    const exists = departments.find(
      (dept) => dept.toLowerCase() === doctor.specialist.toLowerCase()
    );

    const genderExists = gender.find(
      (gen) => gen.toLowerCase() === doctor.gender.toLowerCase()
    );

    if (exists || genderExists) {
      return true;
    } else {
      return false;
    }
  };

  // filter by name
  const filterBySearchText = (doctor) => {
    if (search) {
      return doctor.name
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    } else {
      return true;
    }
  };

  let content;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  }

  if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        {/* <Error message={error?.data} /> */}
      </li>
    );
  }

  if (!isLoading && !isError && doctors?.length === 0) {
    content = <li className="m-2 text-center">No Doctors found</li>;
  }

  if (!isLoading && !isError && doctors?.length > 0 && isSuccess) {
    content = doctors
      .filter(filterBySearchText)
      .map((doctor) => <DoctorsCard key={doctor._id} doctor={doctor} />);
  }
  if (
    !isLoading &&
    !isError &&
    doctors?.length > 0 &&
    isSuccess &&
    (gender?.length || departments.length)
  ) {
    content = doctors
      .filter(filterByDepartment)
      .filter(filterBySearchText)
      .map((doctor) => <DoctorsCard key={doctor._id} doctor={doctor} />);
  }

  return <div className="grid grid-cols-1 gap-4">{content}</div>;
};

export default DoctorGrid;
