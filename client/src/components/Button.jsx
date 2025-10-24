import { NavLink } from "react-router-dom";

export default function Button({ src, page }) {
  return (
    <button>
      <NavLink to={src}>{page}</NavLink>
    </button>
  );
}
