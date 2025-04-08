import {Outlet} from "react-router-dom";
import {Header} from "./Header.jsx";

export default function Container() {
  return (
    <>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}