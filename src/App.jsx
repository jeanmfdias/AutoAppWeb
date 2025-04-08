import {Header} from "./components/base/Header.jsx";
import {Outlet, RouterProvider} from "react-router-dom";
import {routes} from "./routes.jsx";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
