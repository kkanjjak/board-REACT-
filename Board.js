import { Link } from "react-router-dom";

function Board(props) {
  let boardContent = props.topics.map((p) => {
    return (
      <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.keyword}</td>
        <td>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              // display: "block",
            }}
            id={p.id}
            href={"/read/" + p.id}
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode(Number(event.target.id));
            }}
          >
            {p.context}
          </a>
        </td>
        <td>{p.date}</td>
        <td>{p.author}</td>
        <td>
          <Link
            to={"/update/" + p.id}
            style={{
              color: "black",
              textAlign: "center",
              textDecoration: "none",
              fontSize: 15,
              // border: "2px solid #fad985",
              // borderRadius: 5,
            }}
          >
            수정하기
          </Link>
        </td>
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
              <col width="10%" />
              <col width="15%" />
              <col width="35%" />
              <col width="15%" />
              <col width="13%" />
              <col width="17%" />
            </colgroup>
            <thead>
              <tr style={{ height: 30 }}>
                <td>index</td>
                <td>keyword</td>
                <td>context</td>
                <td>date</td>
                <td>author</td>
                <td>update</td>
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
