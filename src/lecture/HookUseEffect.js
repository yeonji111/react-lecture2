import { useEffect, useState } from "react";

const HookUseEffect = () => {
  /* useEffect: 렌더링 될때마다 특정작업 수행하도록 하는 훅 
     단, 의존성배열에 영향을 받음

     useEffect(()=>{ 특정작업 }, [defedency array])

     mount(첫렌더링), unmount(사라짐) , update(재렌더링)
  */

  console.log("=====> rendering <======");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  //렌더링순서보기
  useEffect(() => {
    // console.log(" => 매번 렌더링 <= ");
  });
  //defendency arra = [] : 처음 로딩시에 렌더링
  useEffect(() => {
    // console.log(" => 처음에만 렌더링 <= ");
  }, []);
  useEffect(() => {
    // console.log("=> useEffect는 순서대로실행 <= ");
  }, []);

  useEffect(() => {
    console.log(" => count 상태 변화됨 <= ");
  }, [count]);
  useEffect(() => {
    console.log(" => name 상태 변화 <= ");
  }, [name]);
  useEffect(() => {
    console.log(" => list 상태 변화 <= ");
  }, [list]);

  const goAddCount = () => {
    setCount(count + 1);
  };
  const goAddName = () => {
    setList([...list, name]);
    setName("");
  };
  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const [num, setNum] = useState(0);
  const [double, setDouble] = useState(num);

  const goAddNum = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    setDouble(num * 2);
  }, [num]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={goAddCount}>카운트 +</button>
      <br />

      <label>
        추가할 이름 입력
        <input type="text" onChange={nameOnChangeHandler} value={name} />
      </label>
      <button onClick={goAddName}>이름추가</button>
      <br />

      <p>이름목록</p>
      {list.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}

      <div>
        {/* 숫자업 -> num  + 1 -> num의 값이 바뀌었을 때 바뀐값의 2배한 숫자를 두배: 기록 */}
        <p>숫자: {num}</p>
        <p>두배: {double}</p>
        <button onClick={goAddNum}>숫자 업</button>
      </div>
    </div>
  );
};
export default HookUseEffect;
