import { Route, RouterProvider, Routes } from "react-router-dom";
// import Home from "./pages/main/Home";
import routes from "./routes/routes";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authChecked = useAuthCheck();
  return <RouterProvider router={routes} />;
}

export default App;

// <Routes>
// <Route path="/" element={<Home />} />
// </Routes>
