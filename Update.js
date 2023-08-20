import { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function Update(props) {
  let navigate = useNavigate();
  const updateRedirect = () => {
    navigate("/board");
  };

  const [newTitle, setNewTitle] = useState(props.title);
  const [newKeyword, setNewKeyword] = useState(props.keyword);
  const [newContext, setNewContext] = useState(props.context);
  const [newAuthor, setNewAuthor] = useState(props.author);

  return (
    <div>
      <h1>Update Topic😊</h1>
      <div className="createContainer">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newKeyword = event.target.keyword.value;
            const newTitle = event.target.title.value;
            const newContext = event.target.context.value;
            const newAuthor = event.target.author.value;
            props.onUpdate(newTitle, newContext, newKeyword, newAuthor);
            updateRedirect();
          }}
        >
          <div className="createGrid">
            <input
              className="createDetail"
              name="keyword"
              type="text"
              placeholder="keyword"
              value={newKeyword}
              onChange={(event) => {
                event.preventDefault();
                setNewKeyword(event.target.value);
              }}
              spellCheck="false"
              required
            />
            <input
              className="createDetail"
              name="author"
              type="text"
              value={newAuthor}
              onChange={(event) => {
                event.preventDefault();
                setNewAuthor(event.target.value);
              }}
              placeholder="author"
              spellCheck="false"
              required
            />
            <input
              className="createDetail createTitle"
              name="title"
              type="text"
              value={newTitle}
              onChange={(event) => {
                event.preventDefault();
                setNewTitle(event.target.value);
              }}
              placeholder="title"
              spellCheck="false"
              required
            />
            <textarea
              spellCheck="false"
              name="context"
              type="text"
              value={newContext}
              onChange={(event) => {
                event.preventDefault();
                setNewContext(event.target.value);
              }}
              placeholder="내용을 작성하여 주십시오"
              required
            />
            <button
              className="createBtn"
              href="/board"
              type="submit"
              value="추가하기"
              style={{
                border: "2px solid tomato",
                borderRadius: 5,
                color: "tomato",
                fontWeight: "bold",
                backgroundColor: "white",
              }}
            >
              저장하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
