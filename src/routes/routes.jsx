import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/main/Home";
import Dashboard from "../layout/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import AddDoctor from "../pages/dashboard/admin/AddDoctor";
import AllDoctors from "../pages/dashboard/admin/AllDoctors";
import DoctorProfile from "../pages/main/DoctorProfile";
import AppointmentBook from "../pages/main/AppointmentBook";
import Login from "../pages/main/Login";
import SearchedDoctor from "../pages/main/SearchedDoctor";
import AllAppointment from "../pages/dashboard/admin/AllAppointment";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/doctors-profile/:doctorId",
        element: <DoctorProfile />,
      },
      {
        path: "/doctors-booking/:doctorId",
        element: <AppointmentBook />,
      },
      {
        path: "/all-doctors/serarch",
        element: <SearchedDoctor />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "admin/add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "admin/all-doctors",
        element: <AllDoctors />,
      },
      {
        path: "admin/all-appointment",
        element: <AllAppointment />,
      },
    ],
  },
]);

export default routes;
