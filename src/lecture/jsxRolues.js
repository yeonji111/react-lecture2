const JsxRolues = () => {
  /*  jsx문법 : js 확장문법 
        babel : jxs문법으로 작성된 애들을 js코드화 시켜줌
    */
  // 1. 하나의 부모태그로 감싸야함(컴포넌트 -> 하나의 덩어리)
  // 2. 스타일 구조가 걱정될땐 <></> 빈태그로 감싸기
  // 3. 종료 태그 반드시 작성
  // 4. class -> className 으로 사용
  // 5. style 속성은 객체형태{속성명: 속성값}로 작성
  // 6. 속성이 카멜표기법으로 작성되어야함
  // 7. js변수를 대입해서 사용가능
  // ** html 태그내에 js 관련문법 작성시에는 {}
  // 8. 조건문 -> 삼항연산자 (if문을 외부에서 사용하는건 가능)
  // 9. 반복문 -> map을 통해 반복문 활용
  const title = "제목이다";

  const sum = (arr) => {
    let total = 0;
    // for ...of문
    // map으로 변경
    arr.map((v) => {
      total += v;
    });

    return total;
  };
  const confirm = true;

  const friends = ["짱구", "철수", "맹구", "유리", "훈이"];
  const name = "훈이";
  return (
    <>
      <h2>친구목록</h2>
      <ul>
        {/* map((요소, 인덱스)=>{}) 
            map 돌리면서 태그생성후에는 꼭 각 요소들에 key속성 지정해줘야함
        */}
        {friends.map((v, i) => {
          return <li key={`fr-${i}`}>{v}</li>;
        })}

        <h2>훈이빼기</h2>

        {friends.map((v, i) => {
          return v != "훈이" ? <li key={i}>{v}</li> : null;
        })}

        <h2>훈이진짜뺌</h2>
        {friends.map((v, i) => {
          if (v != "훈이") {
            return <li key={i}>{v}</li>;
          }
        })}
      </ul>
    </>
  );
  /*return (
    <>
      <h2>{title}</h2>
      <h3>{sum([1, 2, 3])}</h3>

      <p>{confirm ? "진짜" : null}</p>

      {confirm ? (
        <>
          <p>
            진짜<span>인뎅</span>
          </p>
          <p>오류나면 안되니까 부모태그 추가해야해</p>
        </>
      ) : null}

      <input type="checkbox" />
      <ul className="list" style={{ color: "red", backgroundColor: "yellow" }}>
        <li>목록1</li>
        <li>목록2</li>
      </ul>
      <ul>
        <li>목록3</li>
        <li>목록4</li>
      </ul>

      <label>
        이름
        <input type="text" />
      </label>

      <label htmlFor="usertel">전화번호</label>
      <input type="text" id="usertel" />

      <label>
        <input type="checkbox" value="css" />
        css
      </label>
    </>
  );
  */
};
export default JsxRolues;
