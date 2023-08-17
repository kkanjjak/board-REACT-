import "./App.css";

function Create(props) {
  return (
    <div>
      <h1>New Topic😊</h1>
      <div className="createContainer">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const keyword = event.target.keyword.value;
            const context = event.target.context.value;
            const author = event.target.author.value;
            props.onCreate(keyword, context, author);
          }}
        >
          <div className="createGrid">
            <input
              className="createDetail"
              name="keyword"
              type="text"
              placeholder="keyword"
              required
            />
            <input
              className="createDetail"
              name="author"
              type="text"
              placeholder="author"
              required
            />
            <textarea
              name="context"
              type="text"
              placeholder="내용을 작성하여 주십시오"
              required
            />
            <button
              className="createBtn"
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
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
