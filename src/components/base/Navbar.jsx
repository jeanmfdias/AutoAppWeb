import {Link} from "react-router-dom";
import NavItem from "./NavItem.jsx";

const links = [
  {
    url: "/cars",
    label: "Cars",
  },
]

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">AutoApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { links.map((item, index) => <NavItem key={index} item={item} />) }
          </ul>
        </div>
      </div>
    </nav>
  );
}