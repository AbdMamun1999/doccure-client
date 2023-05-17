import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/main/Home";
import Main from "../layout/main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default routes;
