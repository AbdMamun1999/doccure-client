import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/main/Home";
import Dashboard from "../layout/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import AddDoctor from "../pages/dashboard/admin/AddDoctor";
import AllDoctors from "../pages/dashboard/admin/AllDoctors";
import AllPatient from "../pages/dashboard/admin/AllPatient";
import DoctorProfile from "../pages/main/DoctorProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/doctors-profile/:doctorId",
        element: <DoctorProfile />,
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
        path: "admin/all-patients",
        element: <AllPatient />,
      },
    ],
  },
]);

export default routes;
