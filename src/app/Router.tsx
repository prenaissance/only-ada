import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/courses",
  },
];

const router = createBrowserRouter(routeConfig);

const Router = () => <RouterProvider router={router} />;

export default Router;
