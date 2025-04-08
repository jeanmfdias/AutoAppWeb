import {createBrowserRouter} from "react-router-dom";
import Container from "./components/base/Container.jsx";
import Home from "./pages/Home.jsx";
import Cars from "./pages/cars/Cars.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <Cars />
      }
    ]
  }
]);