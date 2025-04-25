import {RouterProvider} from "react-router-dom";
import {routes} from "./routes.jsx";
import "./assets/scss/styles.scss";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
