import { useState } from "react";
import "../css/mission.css";

const HookUseState = () => {
  /* 할일 제목, 내용 입력받기
     입력받은 제목, 내용을 목록형태로 출력
  */

  /* 변수들 */
  const [title, setTitle] = useState(""); // 제목
  const [contents, setContents] = useState(""); // 내용
  const [todoList, setTodoList] = useState([]); // 할일목록

  /* 입력 요소 핸들러 */
  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentOnChangeHandler = (e) => {
    setContents(e.target.value);
  };

  /* 할일저장 */
  const goAddTodo = () => {
    if (title == "" || contents == "") {
      alert("제목과 내용 모두 입력해주세요");
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
          className="todo-input0"
          placeholder="할일제목"
          onChange={titleOnChangeHandler}
          value={title}
        ></input>
        <input
          type="text"
          className="todo-input"
          placeholder="할일내용"
          onChange={contentOnChangeHandler}
          value={contents}
        ></input>
        <button onClick={goAddTodo}>할일추가</button>
        <strong>Best First-Person Shooters</strong>

        <ol className="alternating-colors todo-ol">
          {todoList.map((v, i) => {
            return (
              <li key={i}>
                <strong>{v.title}</strong>
                <p>{v.content}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
export default HookUseState;
