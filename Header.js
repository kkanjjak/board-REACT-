import { NavLink } from "react-router-dom";
import "./App.css";

function Header(props) {
  return (
    <div>
      <div className="headerCanvas">
        <div>
          <h1 style={{ marginBottom: 5, marginLeft: 10 }}>Hi, React!</h1>
        </div>
        <div className="navbarContainer">
          <NavLink
            className="navbar"
            to={"/"}
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: 800,
                    color: "rgb(77, 163, 76)",
                    transition: "0.5s ease-out",
                    borderLeft: "1.5px solid rgb(77, 163, 76)",
                    paddingLeft: 10,
                  }
                : { color: "black" }
            }
          >
            Home
          </NavLink>
          <NavLink
            className="navbar"
            to={"/about"}
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: 800,
                    color: "rgb(77, 163, 76)",
                    transition: "0.5s ease-out",
                    borderLeft: "1.5px solid rgb(77, 163, 76)",
                    paddingLeft: 10,
                  }
                : { color: "black" }
            }
          >
            About
          </NavLink>
          <NavLink
            className="navbar"
            to={"/board"}
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: 800,
                    color: "rgb(77, 163, 76)",
                    transition: "0.5s ease-out",
                    borderLeft: "1.5px solid rgb(77, 163, 76)",
                    paddingLeft: 10,
                  }
                : { color: "black" }
            }
          >
            Board
          </NavLink>
          <NavLink
            className="navbar"
            to={"/qna"}
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: 800,
                    color: "rgb(77, 163, 76)",
                    transition: "0.5s ease-out",
                    borderLeft: "1.5px solid rgb(77, 163, 76)",
                    paddingLeft: 10,
                  }
                : { color: "black" }
            }
          >
            Q&A
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
