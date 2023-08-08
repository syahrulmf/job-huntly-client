import { createBrowserRouter } from "react-router-dom";

import DetailJob from "../pages/DetailJob";
import FindJobs from "../pages/FindJobs";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "find-jobs",
    element: <FindJobs />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "job/detail/:id",
    element: <DetailJob />,
  },
]);
