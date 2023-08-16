import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Board</NavLink>
      <NavLink>Q&A</NavLink>
    </div>
  );
}

export default Nav;
