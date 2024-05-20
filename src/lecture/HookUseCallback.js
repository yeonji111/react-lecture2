import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const HookUseCallback = () => {
  /* useCallback 
     인자로 전달한 콜백함수를 메모리제이션
     함수가 필요시마다 다시 만드는 것이 아니라,
     메모리에서 가져와서 사용하는 것
  
     useCallback(콜백함수, [dependency array])

    변수에 함수객체 할당
    const test = () => {}

    렌더링 발생 -> 컴포넌트 함수 호출 -> 모든 내부 변수 초기화
    렌더링시마다 새로 만들어진 함수객체를 할당받음

    useCallback 통해 이미 할당받은 함수 객체를 계속 재사용할 수 있음
  */
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  //기본함수 - 렌더링 될때마다 생성
  const basicFunction = () => {
    console.log("basicFunction");
  };

  //useCallback함수 - 처음 한번만 객체 생성
  const useCallbackFunction = useCallback(() => {
    console.log("useCallbackFunction");
  }, []);

  //dependency array 해당값이 변경될때마다 객체 생성
  const useCallbackFunction2 = useCallback(() => {
    console.log("useCallbackFunction2");
  }, [number2]);

  //함수객체변경 -> 주소값 변경 => useEffect 값이 변경되었을때 실행
  useEffect(() => {
    console.log("basicFunction 주소 변경됨");
  }, [basicFunction]);

  useEffect(() => {
    console.log("useCallbackFunction 주소 변경됨");
  }, [useCallbackFunction]);

  useEffect(() => {
    console.log("useCallbackFunction2 주소 변경됨");
  }, [useCallbackFunction2]);

  /* onChangeHandler */
  const [text, setText] = useState("");
  const textOnChangeHandler = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    console.log("textOnChangeHandler");
  }, [textOnChangeHandler]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const nameOnChangeHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const phoneOnChangeHandler = useCallback((e) => {
    setPhone(e.target.value);
  }, []);

  // 일반함수, useCallback함수
  const showAlert = useCallback(() => {
    if (phone.length < 11) {
      alert("11자리 채워주세요");
      return;
    }
    alert(`이름: ${name}, 전화번호 : ${phone}`);
    // dependy array 에 name과 phone을 넣어 값이 변할때마다 반영하도록
  }, [name, phone]);

  return (
    <>
      <p>num: {number1}</p>
      <button onClick={() => setNumber1(number1 + 1)}>숫자상승</button>
      <br />
      <p>num: {number2}</p>
      <button onClick={() => setNumber2(number2 + 1)}>숫자상승</button>
      <br />
      <p>{text}</p>
      <input type="text" onChange={textOnChangeHandler} />

      {/* 사용자에게 이름, 전화번호 입력받아 
          알림버튼 클릭시 이름, 전화번호 같이 알림창 띄우기
          
          단, 전화번호 길이는 11자리가 안되면 다시 입력하라고 알림창 띄워주기
      */}
      <label>
        이름 <input type="text" onChange={nameOnChangeHandler} />
      </label>
      <label>
        전화번호
        <input type="text" onChange={phoneOnChangeHandler} />
      </label>
      <button onClick={showAlert}>알림</button>
    </>
  );
};
export default HookUseCallback;
