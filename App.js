import {
  BrowserRouter,
  useParams,
  useLocation,
  NavLink,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Board from "./Board";
import Create from "./Create";
import Detail from "./Detail";
import Update from "./Update";

import { useState } from "react";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function Header(props) {
  let location = useLocation();
  console.log(location);
  return (
    <div onChange={props.onChange(location.pathname)}>
      <div className="headerCanvas">
        <div>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            {/* <div><img src="./logo.svg" /></div> */}
            <h1 style={{ marginBottom: 5, marginLeft: 10 }}>Hi, React!</h1>
          </Link>
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
      title: "게시판 테스트",
      context: "im a test page",
      date: "2023. 8. 10.",
      author: "홍기원",
    },
  ]);
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(2);

  const [mode, setMode] = useState("home");
  const [locationNow, setLocationNow] = useState("");
  let content = null;

  /* mode */
  if (locationNow === "/") {
    content = (
      <div>
        <Home />
      </div>
    );
  } else if (locationNow === "/board" || mode === "/board") {
    content = (
      <div>
        <Board topics={topics} onClick={(id) => setId(id)} />
      </div>
    );
  } else if (locationNow === "/create") {
    content = (
      <div>
        <Create
          onCreate={(keyword, title, context, author) => {
            const newTopic = {
              id: nextId,
              keyword: keyword,
              title: title,
              context: context,
              date: timeNow,
              author: author,
            };
            setTopics([...topics, newTopic]);
            setId(nextId);
            setNextId(nextId + 1);
          }}
        />
      </div>
    );
  } else if (locationNow === "/read") {
    let topic = {};
    let keyword = null;
    let title = null;
    let context = null;
    let date = null;
    let author = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        topic = topics[i];
        keyword = topics[i].keyword;
        title = topics[i].title;
        context = topics[i].context;
        date = topics[i].date;
        author = topics[i].author;
      }
    }
    content = (
      <Detail
        onSetTopics={(newTopics) => {
          setTopics(newTopics);
        }}
        topics={topics}
        topic={topic}
        id={id}
        keyword={keyword}
        title={title}
        context={context}
        date={date}
        author={author}
      />
    );
  } else if (locationNow === "/update") {
    let topic = {};
    let keyword = null;
    let title = null;
    let context = null;
    let date = null;
    let author = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        topic = topics[i];
        keyword = topics[i].keyword;
        title = topics[i].title;
        context = topics[i].context;
        date = topics[i].date;
        author = topics[i].author;
      }
    }
    content = (
      <Update
        topic={topic}
        id={id}
        keyword={keyword}
        title={title}
        context={context}
        date={date}
        author={author}
        onUpdate={(title, context, keyword, author) => {
          const newTopics = [...topics];
          const updatedTopic = {
            id: id,
            title: title,
            context: context,
            keyword: keyword,

            author: author,
            date: timeNow,
          };
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
        }}
      />
    );
  }
  console.log("현재 위치는" + locationNow);

  return (
    <div className="canvas">
      <BrowserRouter>
        <Header
          onChange={(e) => {
            setLocationNow(e);
          }}
        />
        {content}
      </BrowserRouter>
    </div>
  );
}

export default App;
