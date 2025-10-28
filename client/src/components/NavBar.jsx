import { NavLink } from "react-router-dom";
import "../styles/nav.css";

export default function NavBar() {
  return (
    <nav>
      <p>GI 15</p>
      <ul className="navlinks">
        <li>
          <NavLink to={"/"}>Counter</NavLink>
        </li>
        <li>
          <NavLink to={"/search-movies"}>Search Movies</NavLink>
        </li>
        <li>
          <NavLink to={"/to-do"}>To Do List</NavLink>
        </li>
      </ul>
    </nav>
  );
}
