import { useState } from "react";
import "../css/mission.css";

const HookUseState = () => {
  const [title, setTitle] = useState(""); //제목
  const [contents, setContents] = useState(""); //내용
  const [todoList, setTodoList] = useState([]); //할일목록

  /* 입력요소 핸들러 */
  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentsOnChangeHandler = (e) => {
    setContents(e.target.value);
  };

  /* 할일 저장 */
  const goAddTodo = () => {
    if (title == "" || contents == "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    setTodoList([...todoList, { title: title, contents: contents }]);
    setTitle("");
    setContents("");
  };

  return (
    <>
      <div className="todo-body">
        <input
          type="text"
          className="todo-input"
          placeholder="제목입력"
          onChange={titleOnChangeHandler}
          value={title}
        />
        <input
          type="text"
          className="todo-input"
          placeholder="내용입력"
          onChange={contentsOnChangeHandler}
          value={contents}
        />
        <button className="btn--primary" onClick={goAddTodo}>
          ADD
        </button>
        <strong>Best First-Person Shooters</strong>
        <ol className="alternating-colors todo-ol">
          {todoList.map((v, i) => {
            return (
              <li key={i}>
                <strong>{v.title}</strong>
                <p>{v.contents}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
export default HookUseState;
