import { useState } from "react";

const HookUseState = () => {
  /* useState 
     - 상태(state)가 변경되는걸 감지
     (상태값 변경할 수 있게 도와주는 훅)
    
     const [state, setState] = useState(초깃값)
     state: 현재상태값
     setState: 상태를 업데이트 함수
     - setState는 비동기 처리
     - setState(updater(함수), [callback])
  */
  console.log("=======> rendering <=========");

  /* let 변수 */
  //처음 초깃값이 고정 되어있어야함
  let letNum = 0;

  /* useState 변수 */
  const [count, setCount] = useState(2);

  const addLetNum = () => {
    letNum++;
    console.log(letNum);
  };
  const addCount = () => {
    setCount(count + 1);
    //비동기처리 때문에 count는 이전값을 출력
    console.log("count: ", count);
  };

  /* 점수관리 */
  const [score, setScore] = useState(0);
  const addScore = () => {
    setScore(score + 1);
  };
  const decScore = () => {
    setScore(score - 1 > 0 ? score - 1 : 0);
  };

  const [num, setNum] = useState(0);
  const goAdd = () => {
    // setNum(num + 1 > 10 ? 10 : num + 1);
    setNum((pre) => pre + 1);
  };

  /* 사용자 입력 관련 핸들러 */
  const [username, setUsername] = useState("");
  const usernameOnChangeHandler = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };

  /* 사용자 이름 추가 */
  const [list, setList] = useState([]);
  const goAddUsername = () => {
    // console.log("최종: ", username);
    setList([...list, username]);
    setUsername("");
  };

  /* 입력창 만들기: 이름
     이름 추가 버튼 만들기
     friends 담아서 화면에 출력될 수 있게 하기
  */

  const [friendName, setFriendName] = useState(""); //사용자에게 입력 받은값
  const friendNameOnChangeHandler = (e) => {
    setFriendName(e.target.value);
  };

  const arr = ["유리", "철수"]; //사용자목록
  const [friends, setFriends] = useState(arr);
  const goAddFriend = () => {
    setFriends([...friends, friendName]);
    setFriendName("");
  };

  return (
    <>
      {/* let과 useState차이 */}
      <p>letNum값: {letNum}</p>
      <p>count값: {count}</p>
      <button onClick={addLetNum}>letNum +</button>
      <button onClick={addCount}>count +</button>

      {/* 점수관리 
          1) 점수상태변수
          2) 점수+- : 1+- 함수 set함수
      */}
      <p>현재점수: {score}</p>
      <button onClick={addScore}>점수+</button>
      <button onClick={decScore}>점수-</button>

      <p>숫자:{num}</p>
      <button onClick={goAdd}>숫자업</button>

      {/* 이름관리목록 */}
      <p>
        <label htmlFor="username">이름입력</label>
        <input
          type="text"
          id="username"
          onChange={usernameOnChangeHandler}
          value={username}
        />
      </p>
      <button onClick={goAddUsername}>이름추가</button>

      <p>사용자이름목록</p>
      <ul>
        {list.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>

      <p>미션</p>
      <input
        type="text"
        value={friendName}
        onChange={friendNameOnChangeHandler}
      />
      <button onClick={goAddFriend}>친구추가</button>

      {friends.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </>
  );
};
export default HookUseState;
