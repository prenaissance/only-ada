import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Courses from "@pages/Courses";
import Layout from "@components/ui/Layout";
import Challenges from "@pages/Challenges";
import Upload from "@pages/Upload";
import NewCourse from "@pages/NewCourse";
import Course from "@pages/Course";

const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "courses/:courseId",
        element: <Course />,
      },
      {
        path: "/challenges",
        element: <Challenges />,
      },
      {
        path: "upload",
        element: <Upload />,
      },
      {
        path: "new-course",
        element: <NewCourse />,
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

const Router = () => <RouterProvider router={router} />;

export default Router;
