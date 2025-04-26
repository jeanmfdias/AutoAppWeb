import {createBrowserRouter} from "react-router-dom";
import Container from "./components/base/Container.jsx";
import Home from "./pages/Home.jsx";
import Cars from "./pages/cars/Cars.jsx";
import CarCreate from "./pages/cars/CarCreate.jsx";
import CarDetail from "./pages/cars/CarDetail.jsx";
import CarEdit from "./pages/cars/CarEdit.jsx";
import CarDelete from "./pages/cars/CarDelete.jsx";

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
      },
      {
        path: "/cars/create",
        element: <CarCreate />
      },
      {
        path: "/cars/:id",
        element: <CarDetail />
      },
      {
        path: "/cars/:id/edit",
        element: <CarEdit />
      },
      {
        path: "/cars/:id/delete",
        element: <CarDelete />
      }
    ]
  }
]);