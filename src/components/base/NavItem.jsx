import {Link} from "react-router-dom";

export default function NavItem({item}) {
  return (
    <li className="nav-item">
      <Link to={item.url} className="nav-link">{item.label}</Link>
    </li>
  );
}