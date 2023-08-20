import { Link } from "react-router-dom";

function Board(props) {
  let boardContent = props.topics.map((p) => {
    props.onClick(p.id);
    return (
      <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.keyword}</td>
        <td>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              // display: "block",
            }}
            id={p.id}
            to={"/read"}
          >
            {p.title}
          </Link>
        </td>
        <td>{p.date}</td>
        <td>{p.author}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>React, Insane!</h1>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Link
          to={"/create"}
          style={{
            display: "block",
            width: 50,
            position: "relative",
            top: 0,
            right: 5,
            marginBottom: 5,
            border: "none",
            borderRadius: 5,
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            fontSize: 14,
            backgroundColor: "tomato",
          }}
        >
          Add
        </Link>
        <div className="tableContainer">
          <table
            style={{
              border: "none",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <colgroup>
              <col width="8%" />
              <col width="15%" />
              <col width="50%" />
              <col width="15%" />
              <col width="17%" />
            </colgroup>
            <thead>
              <tr style={{ height: 30 }}>
                <td>연 번</td>
                <td>구 분</td>
                <td>제 목</td>
                <td>작성일</td>
                <td>작성자</td>
              </tr>
            </thead>
            <tbody>{boardContent}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Board;
