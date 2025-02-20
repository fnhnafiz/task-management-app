import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../main/Mainlayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";

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
    ],
  },
]);

export default Router;
