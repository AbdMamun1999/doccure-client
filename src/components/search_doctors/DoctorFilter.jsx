import React, { useEffect, useState } from "react";
import { departmentApi } from "../../features/department/departmentApi";
import {
  addDepartment,
  removeDepartment,
  addGender,
  addSearch,
  removeGender,
} from "../../features/filter/filterSlice";
import { useDispatch } from "react-redux";
import TextInput from "../ui/TextInput";

const genders = [
  { _id: 1, gender: "male" },
  { _id: 2, gender: "female" },
];

const DoctorFilter = () => {
  const [department, setDepartments] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(addDepartment(e.target.value));
    } else {
      dispatch(removeDepartment(e.target.value));
    }
  };

  const handleSearch = (e) => {
    dispatch(addSearch(e.target.value));
  };

  const handSearchByGender = (e) => {
    if (e.target.checked) {
      dispatch(addGender(e.target.value));
    } else {
      dispatch(removeGender(e.target.value));
    }
  };

  useEffect(() => {
    dispatch(departmentApi.endpoints.getAllDeparment.initiate())
      .unwrap()
      .then((data) => {
        setDepartments(data.data);
      });
  }, [dispatch]);

  return (
    <div className="h-full  z-50">
      <div className="px-4 mt-5">
        <TextInput
          placeholder="Search by name"
          className="w-full rounded-md px-4 py-2 border-2"
          onChange={handleSearch}
        />
      </div>
      <div className="pl-5 mt-3">
        <h6>Gender</h6>

        {genders?.map((gen) => (
          <div key={gen._id} className="flex gap-2 px-2">
            <input
              type="checkbox"
              id={gen?._id}
              value={gen?.gender}
              onChange={(e) => handSearchByGender(e, gen)}
            />
            <p>{gen.gender}</p>
          </div>
        ))}
      </div>
      <div className="pl-5 mt-3 pb-4">
        <h6>Filter by specialist</h6>
        {department.map((dept) => (
          <div key={dept._id} className="flex gap-2 px-2">
            <input
              type="checkbox"
              id={dept._id}
              value={dept.specialist}
              onChange={(e) => handleChange(e, dept)}
            />
            <p>{dept.specialist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorFilter;
