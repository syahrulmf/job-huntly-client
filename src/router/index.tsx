import { createBrowserRouter } from "react-router-dom";

import FindJobs from "../pages/FindJobs";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/find-jobs",
    element: <FindJobs />,
  },
]);
