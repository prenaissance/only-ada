import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Courses from "@pages/Courses";
import Layout from "@components/ui/Layout";
import Challenges from "@pages/Challenges";

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
        path: "/challenges",
        element: <Challenges />,
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

const Router = () => <RouterProvider router={router} />;

export default Router;
