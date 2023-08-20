import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function Detail(props) {
  let navigate = useNavigate();
  const deleteRedirect = () => {
    navigate("/board");
  };

  let topic = props.topic;
  let topics = props.topics;
  let id = props.id;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>여기에 광고를 넣고 싶습니다</h1>
      <div>
        <table className="detailTable">
          <col width="18%" />
          <col width="15%" />
          <col width="17%" />
          <col width="18%" />
          <col width="15%" />
          <col width="17%" />
          <tr>
            <th>번 호</th>
            <td colSpan="2">{props.id}</td>
            <th>구 분</th>
            <td colSpan="2">{props.keyword}</td>
          </tr>
          <tr>
            <th>작성자</th> <td colSpan="2">{props.author}</td>
            <th>작성일</th> <td colSpan="2">{props.date}</td>
          </tr>
          <tr>
            <th>제 목</th> <td colSpan="5">{props.title}</td>
          </tr>
          <tr className="contextBox">
            <td
              style={{ padding: 20, textAlign: "left", verticalAlign: "top" }}
              colSpan="6"
              rowSpan="7"
            >
              {props.context}
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </table>
        <div className="detailConsoleContainer">
          <Link to={"/update"} className="detailButton">
            수정하기
          </Link>
          <a
            style={{ cursor: "pointer" }}
            className="detailButton"
            onClick={() => {
              if (window.confirm("정말 삭제하겠습니까?")) {
                if (window.confirm("진짜 삭제하시려고요?")) {
                  const newTopics = [];
                  for (let i = 0; i < topics.length; i++) {
                    if (id !== topics[i].id) {
                      newTopics.push(topics[i]);
                    }
                  }
                  props.onSetTopics(newTopics);
                  deleteRedirect();
                } else {
                  return;
                }
              } else {
                return;
              }
            }}
          >
            삭제하기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detail;
