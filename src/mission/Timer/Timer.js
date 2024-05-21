import { useEffect, useState } from "react";
const Timer = (props) => {
  const { onClose } = props;
  const [seconds, setSeconds] = useState(10);
  const [randomNum, setRandomNum] = useState(0);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    // 최초 렌더링 시 이메일 인증번호 확인 단계
    // 로컬 스토리지에 있는 값과 비교
    localStorage.setItem(
      "randomNum",
      Math.floor(Math.random() * 89999) + 10000
    );

    let num = localStorage.getItem("randomNum");
    console.log("로컬스토리지에 들어간 5숫자", num);
    setRandomNum(num);

    // 120초짜리 타이머 작동
    const timer = setInterval(() => {
      setSeconds((prev) => {
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (seconds == 0) {
      alert("제한시간 종료");
      onClose({ close: true, confirm: confirm });
    }

    console.log(seconds);
  }, [seconds]);

  const [userNum, setUserNum] = useState("");

  // 인증번호 확인을 위한 핸들러
  const numOnChangeHandler = (e) => {
    setUserNum(e.target.value);
  };

  // 인증번호와 로컬 스토리지에 담겨있는 값이 같은지 확인하는 함수
  const goCheckNumber = () => {
    console.log(randomNum);
    // 인증번호가 틀린 경우
    if (randomNum != userNum) {
      alert("인증번호가 틀렸습니다.");
    } else if (randomNum == userNum) {
      alert("인증 완료입니다.");
      setUserNum(userNum);
      setConfirm(true);
      onClose({ close: true, emailConfirm: confirm });
    }
  };

  return (
    <>
      <div onClose={true}>
        <div className="md:col-span-3">
          <label htmlFor="address">인증번호</label>
          <input
            type="text"
            name="address"
            id="address"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={userNum}
            placeholder=""
            onChange={numOnChangeHandler}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="city">남은 시간</label>
          <input
            type="text"
            name="city"
            id="city"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            readOnly
            value={seconds}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goCheckNumber}
        >
          확인
        </button>
      </div>
    </>
  );
};
export default Timer;
