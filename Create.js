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
          <div>
            <input name="keyword" type="text" placeholder="keyword" />
          </div>
          <div>
            <textarea name="context" type="text" placeholder="context" />
          </div>
          <div>
            <input name="author" type="text" placeholder="author" />
          </div>
          <div>
            <input type="submit" value="수정하기" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
