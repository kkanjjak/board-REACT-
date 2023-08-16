import {
  BrowserRouter,
  useParams,
  useLocation,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Board from "./Board";
import Create from "./Create";
import { useState } from "react";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function Header(props) {
  let location = useLocation();
  console.log(location);
  return (
    <div onChange={props.onChange(location.pathname)}>
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

/* App.js */

function App() {
  let time = new Date();
  let timeNow = time.toLocaleDateString();
  const [topics, setTopics] = useState([
    {
      id: 1,
      keyword: "test",
      context: "im a test page",
      date: null,
      author: "Hong",
    },
  ]);
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(2);

  const [mode, setMode] = useState("home");
  const [locationNow, setLocaionNow] = useState("");
  let content = null;

  /* mode */
  if (locationNow === "/board") {
    content = (
      <div>
        <Board topics={topics} />
      </div>
    );
  } else if (locationNow === "/create") {
    content = (
      <div>
        <Create
          onCreate={(keyword, context, author) => {
            const newTopic = {
              id: nextId,
              keyword: keyword,
              context: context,
              date: timeNow,
              author: author,
            };
            setTopics([...topics, newTopic]);
            setId(nextId);
            setNextId(nextId + 1);
            setLocaionNow("/board");
          }}
        />
      </div>
    );
  }
  console.log("현재 위치는" + locationNow);

  return (
    <div className="canvas">
      <BrowserRouter>
        <Header
          onChange={(e) => {
            setLocaionNow(e);
          }}
        />
        {content}
      </BrowserRouter>
    </div>
  );
}

export default App;
