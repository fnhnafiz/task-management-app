import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../main/Mainlayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
