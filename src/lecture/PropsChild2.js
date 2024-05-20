import { useState } from "react";

const PropsChild = (props) => {
  //
  /* 선생님 버전 */
  console.log(props);
  const { num1, num2 } = props;
  const [number, setNumber] = useState(num1);
  const [number2, setNumber2] = useState(num2);

  /* 내가 한 버전
  console.log(props);
  const [num1, setNum1] = useState(Number(props.num1));
  const [num2, setNum2] = useState(props.num2);

  return (
    <div>
      <p> 숫자1: {num1}</p>
      <button onClick={() => setNum1(num1 + 1)}> 숫자 1+ </button>
      <button onClick={() => setNum1(num1 - 1)}> 숫자 1- </button>

      <p> 숫자2: {num2}</p>
      <button onClick={() => setNum2(num2 + 1)}> 숫자2 + </button>
      <button onClick={() => setNum2(num2 - 1)}> 숫자2 - </button>
    </div>
  );
 */

  return (
    <div>
      <p> 숫자1: {number}</p>
      <button onClick={() => setNumber(num1 + 1)}> 숫자 1+ </button>
      <button onClick={() => setNumber(num1 - 1)}> 숫자 1- </button>

      <p> 숫자2: {number2}</p>
      <button onClick={() => setNumber2(num2 + 1)}> 숫자 2+ </button>
      <button onClick={() => setNumber2(num2 - 1)}> 숫자 2- </button>
    </div>
  );
};
export default PropsChild;
