const JsxRolues = () => {
  const qnaList = [
    { question: "Q1. 이름은?", answer: "A1. 신짱구" },
    { question: "Q2. 몇살임?", answer: "A1. 5살" },
    { question: "Q3. 어디유치원?", answer: "A1. 떡잎유치원" },
    { question: "Q4. 강아지는?", answer: "A1. 흰둥이" },
  ];

  const fruits = [
    { fruit: "사과", price: 1000 },
    { fruit: "바나나", price: 2000 },
    { fruit: "딸기", price: 3000 },
    { fruit: "복숭아", price: 4000 },
    { fruit: "오렌지", price: 5000 },
  ];

  //1. 모든 QnA 목록 출력
  //2. Q4 제외한 QnA 목록
  //3. 과일의 이름: 가격 + 이미지 모두 출력
  return (
    <>
      <h2 style={{ backgroundColor: "pink" }}>모든 qna 목록</h2>
      <ul type="none" style={{ paddingLeft: "10px" }}>
        {/* <태그>{객체 자체를 집어넣으면 오류남}</태그> */}
        {qnaList.map((v, i) => {
          return (
            <li key={i}>
              {v.question}
              <br />
              {v.answer}
            </li>
          );
        })}
      </ul>

      <h2>Q4 질문 제외 목록</h2>
      <ul type="none">
        {qnaList.map((v, i) => {
          return i != 3 ? (
            <li>
              {v.question}
              <br />
              {v.answer}
            </li>
          ) : null;
        })}
      </ul>

      <h2>이미지 같이 출력</h2>
      <ul type="none">
        {fruits.map((v, i) => {
          return (
            <li key={i}>
              <img src={`/images/fr${i + 1}.jpg`} style={{ width: "100px" }} />
              <p>
                {v.fruit}의 가격: {v.price}원
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default JsxRolues;
