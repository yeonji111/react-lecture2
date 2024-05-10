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

  return (
    <>
      <h2 style={{ backgroundColor: "pink" }}> 모든 QnA목록</h2>
      <ul type="none">
        {qnaList.map((v, i) => {
          return (
            <li key={`QnA-${i}`}>
              {v.question}
              <br />
              {v.answer}
            </li>
          );
        })}
      </ul>

      <h2 style={{ backgroundColor: "pink" }}> Q4를 제외한 QnA 목록 출력</h2>
      <ul type="none">
        {/* 질문이 강아지인 경우 제외 */}
        {/* {qnaList.map((v, i) => {
          return v.question != "Q4. 강아지는?" ? (
            <li key={`qna-${i}`}>
              {v.question}
              <br />
              {v.answer}
            </li>
          ) : null;
        }
        )} */}

        {/* 인덱스가 3인 경우를 제외 */}
        {qnaList.map((v, i) => {
          return i != 3 ? (
            <li key={`qna-${i}`}>
              {v.question}
              <br />
              {v.answer}
            </li>
          ) : null;
        })}

        {/* 질문에 Q4가 포함되어있을 경우 제외 */}
      </ul>

      <h2 style={{ backgroundColor: "pink" }}> 과일 목록 </h2>
      <ul type="none">
        {fruits.map((v, i) => {
          return (
            <li key={`fr${i}`}>
              <img
                src={`/images/fr${i + 1}.jpg`}
                style={{ width: "300px", height: "300px" }}
              />
              <br />
              {v.fruit}의 가격 : {v.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default JsxRolues;
