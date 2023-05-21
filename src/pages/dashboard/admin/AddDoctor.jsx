import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAddDoctorMutation } from "../../../features/doctor/doctorApi";
import { departmentApi } from "../../../features/department/departmentApi";
import TextInput from "../../../components/ui/TextInput";

const genders = [
  { gender: "male", _id: 1 },
  { gender: "female", _id: 2 },
];

export default function AddDoctor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [jobInstitution, setJobInstitution] = useState("");
  const [chamber, setChamber] = useState("");
  const [visitingHour, setVisitingHour] = useState("");
  const [totalPatient, setTotalPatient] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [fees, setFees] = useState("");
  const [consultant, setConsultant] = useState("");

  const [department, setDepartment] = useState("");

  const [departments, setDepartments] = useState([]);
  const dispatch = useDispatch();

  const [addDoctor, { data, isLoading, isSuccess, isError, error }] =
    useAddDoctorMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const doctor = {
      name: firstName + " " + lastName,
      email,
      image,
      title,
      about,
      specialist: department,
      gender,
      consultantStatus: consultant,
      chamber,
      jobInstitute: jobInstitution,
      visitingHour,
      visitingFees: fees,
      totalPatient,
      password,
    };
    addDoctor(doctor);
  };

  useEffect(() => {
    dispatch(departmentApi.endpoints.getAllDeparment.initiate())
      .unwrap()
      .then((data) => {
        setDepartments(data.data);
        setDepartment(data?.data[0]?.specialist);
      });
  }, [dispatch]);

  return (
    <section className="bg-gray-200 px-5 pt-16 pb-5">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="w-full lg:w-[80%] h-full mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Add Doctors
              </h2>
              <p className="font-normal mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2">
                <label htmlFor="name">Doctor's Name</label>
                <div className="col-span-3 grid lg:grid-cols-2 gap-x-2 gap-y-2">
                  <div>
                    <input
                      placeholder="First name"
                      type="text"
                      className="w-full rounded-md px-4 py-2"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Last name"
                      type="text"
                      className="w-full rounded-md px-4 py-2"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2">
                <TextInput
                  className="w-full rounded-md px-4 py-2"
                  title="Doctor's email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2">
                <TextInput
                  className="w-full rounded-md px-4 py-2"
                  title="Doctor's Title"
                  type="Text"
                  placeholder="Doctor's title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2 items-center">
                <TextInput
                  title="Doctor's Image"
                  className="py-2 px-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400"
                  // type="file"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2 items-center">
                <h6 className="col-span-1">Gender</h6>
                <div className="col-span-3">
                  {genders.map((gen) => (
                    <div key={gen._id} className="flex gap-x-1">
                      <input
                        type="radio"
                        name="gender"
                        value={gen.gender}
                        id={gen._id}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="gender" className="capitalize">
                        {gen.gender}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2">
                <label className="col-span-1" htmlFor="name">
                  Doctor's bio
                </label>
                <div className="col-span-3">
                  <textarea
                    className="w-full px-4 py-2 rounded-md"
                    name="about"
                    placeholder="write about yoursefl"
                    cols="30"
                    rows="5"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2">
                <label className="col-span-1" htmlFor="name">
                  Specialist
                </label>
                <div className="col-span-3">
                  <select
                    className="w-full rounded-md px-4 py-2"
                    name="department"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    {departments?.map((dept) => {
                      return (
                        <option key={dept._id} value={dept.specialist}>
                          {dept.specialist}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2 border-b pb-10">
                <TextInput
                  className="w-full rounded-md px-4 py-2"
                  title="Hospital name(working)"
                  type="text"
                  placeholder="Name of Institution"
                  value={jobInstitution}
                  onChange={(e) => setJobInstitution(e.target.value)}
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2 mt-2">
                <TextInput
                  className="w-full rounded-md px-4 py-2"
                  title="Doctor's chamber"
                  type="text"
                  placeholder="Doctor's chamber"
                  value={chamber}
                  onChange={(e) => setChamber(e.target.value)}
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2 mt-2">
                <TextInput
                  className="w-full rounded-md px-4 py-2"
                  title="Visiting Hour"
                  type="text"
                  placeholder="Visiting hour"
                  value={visitingHour}
                  onChange={(e) => setVisitingHour(e.target.value)}
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2">
                <label className="col-span-1" htmlFor="name">
                  Visiting Fees
                </label>
                <div className="col-span-3">
                  <select
                    className="w-full rounded-md px-4 py-2"
                    name="department"
                    required
                    onChange={(e) => setFees(e.target.value)}
                  >
                    <option>300 Taka</option>
                    <option>400 Taka</option>
                    <option>500 Taka</option>
                    <option>600 Taka</option>
                    <option>700 Taka</option>
                    <option>800 Taka</option>
                    <option>900 Taka</option>
                    <option>1000 Taka</option>
                    <option>1200 Taka</option>
                  </select>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2 mt-2">
                <TextInput
                  className="w-full rounded-md px-4 py-2"
                  title="Total Patient"
                  placeholder="patients"
                  type="text"
                  value={totalPatient}
                  onChange={(e) => setTotalPatient(e.target.value)}
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2">
                <label className="col-span-1" htmlFor="name">
                  Consultant Status
                </label>
                <div className="col-span-3">
                  <select
                    className="w-full rounded-md px-4 py-2"
                    name="department"
                    required
                    onChange={(e) => setConsultant(e.target.value)}
                  >
                    <option>Jonior consultant</option>
                    <option>Senior consultant</option>
                  </select>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-x-2 gap-y-2 mt-2">
                <TextInput
                  className="w-full rounded-md px-4 py-2"
                  title="Set a password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button className="py-2 px-4 border bg-white rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
