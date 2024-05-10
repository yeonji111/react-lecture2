import { useState } from "react";

const HookUseState = () => {
  /*  useState
        - 상태(state)가 변경되는걸 감지
        (상태값 변경할 수 있게 도와주는 훅) 
        
        const [state, setState] = useState(초기값)
        state : 현재 상태값
        setState : 상태를 업데이트 함수
        - setState는 비동기처리
        - setState(updater(함수), [callback])
        */

  console.log("===========>rendering <==========");
  /* let */
  let letNum = 0;

  /* useState 변수 */
  const [count, setCount] = useState(2);

  const addLetNum = () => {
    letNum++;
    console.log(letNum);
  };
  const addCount = () => {
    setCount(count + 1);
    // 비동기처리때문에 count는 이전값을 출력
    console.log("count: ", count);
  };

  /* 점수관리 */
  const [score, setScore] = useState(0);

  const addScore = () => {
    setScore(score + 1);
    console.log(score);
  };

  const decScore = () => {
    // if (score > 0) {
    //   setScore(score - 1);
    // }
    // 삼항연산자를 사용한 방법
    setScore(score - 1 > 0 ? score - 1 : 0);

    console.log(score);
  };

  return (
    <>
      {/* let과 useState차이 */}
      <p>letNum값: {letNum}</p>
      <p>count값: {count}</p>
      <button onClick={addLetNum}>letNum+</button>
      <button onClick={addCount}>countNum+</button>

      {/* 점수관리 
        1) 점수상태변수
        2) 점수+- : 1+- 함수 set함수
      */}
      <p>현재점수: {score}</p>
      <button onClick={addScore}>점수+</button>
      <button onClick={decScore}>점수-</button>
    </>
  );
};

export default HookUseState;
