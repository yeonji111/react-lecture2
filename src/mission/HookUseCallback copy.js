import { useCallback, useRef, useState } from "react";

import "../css/회원가입.css";
const HookUseCallback = () => {
  /* 입력 요소들 변수 */
  const [userId, setUserId] = useState(""); // 사용자 아이디
  const [userPw, setUserPw] = useState(""); // 사용자 비번
  const [userPwConfirm, setUserPwConfirm] = useState(""); // 사용자 비번확인
  const [userPhone, setUserPhone] = useState(""); // 사용자 전화번호
  const [userName, setUserName] = useState(""); // 사용자 이름
  const [userBirth, setUserBirth] = useState(""); // 사용자 생년월일

  /* 입력 요소 핸들러 */
  const userIdOnChangeHandler = useCallback((e) => {
    setUserId(e.target.value);
  }, []);

  const userPwOnChangeHandler = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);

  const userPwConfirmOnChangeHandler = useCallback((e) => {
    setUserPwConfirm(e.target.value);
  }, []);

  const userPhoneOnChangeHandler = useCallback((e) => {
    setUserPhone(e.target.value);
  }, []);

  const userNameOnChangeHandler = useCallback((e) => {
    setUserName(e.target.value);
  }, []);

  const userBirthOnChangeHandler = useCallback((e) => {
    setUserBirth(e.target.value);
  }, []);

  /* 비밀번호 확인 */
  const [isConfirm, setIsConfirm] = useState(false);
  const goConfirmPw = () => {
    //1. 비밀번호 값 없을때
    if (userPw == "") {
      alert("비밀번호 입력해주세요.");
    }
    //2. 비밀번호 확인 값 없을때
    if (userPwConfirm == "") {
      alert("비밀번호 확인을 입력하세요");
    }

    //3. 비밀번호 일치여부
    if (userPw == userPwConfirm) {
      alert("비밀번호가 일치합니다.");
      setIsConfirm(true);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      setIsConfirm(false);
    }
  };

  /* 회원가입 */
  const goSignUp = () => {
    const res = validationCheck();
    if (res) {
      //1. 비밀번호 확인 완료 여부
      if (userPw != userPwConfirm) {
        setIsConfirm(false);
        return;
      }
      if (!isConfirm) {
        alert("비밀번호 확인부터 하세요.");
        return;
      }
      //2. 생년월일 8자리인지 체크
      if (userBirth.length != 8) {
        alert("생년월일을 8자리로 입력하세요.");
        return;
      }
      //3. 정상일 경우 콘솔 출력
      const info = {
        id: userId,
        pw: userPw,
        phone: userPhone,
        name: userName,
        birth: userBirth,
      };
      console.log(info);
    }
  };

  /* 유효성 검사 */
  const userIdRef = useRef(null);
  const validationCheck = () => {
    if (userId != "") {
      userIdRef.current.style.display = "none";
    } else {
      userIdRef.current.style.display = "";
      return false;
    }
  };
  return (
    <>
      <div className="demo-page">
        <main className="demo-page-content">
          <section>
            <div className="href-target" id="input-types"></div>
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="21" y1="14" x2="3" y2="14" />
                <line x1="21" y1="18" x2="3" y2="18" />
              </svg>
              회원가입
            </h1>
            <p>회원가입을 위한 정보를 입력해주세요</p>

            <div className="nice-form-group">
              <label>아이디</label>
              <input
                type="text"
                placeholder="Your id"
                value={userId}
                onChange={userIdOnChangeHandler}
              />
            </div>

            <p ref={userIdRef} style={{ display: "none" }}>
              아이디를 입력하세요.
            </p>

            <div className="nice-form-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="Your Pw"
                value={userPw}
                onChange={userPwOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>비밀번호 확인</label>
              <input
                type="password"
                placeholder="Your Pw Confirm"
                onChange={userPwConfirmOnChangeHandler}
                value={userPwConfirm}
              />
              <br />
              <button
                style={{ backgroundColor: "#3b4ce2", color: "white" }}
                onClick={goConfirmPw}
              >
                비밀번호 확인
              </button>
            </div>

            <div className="nice-form-group">
              <label>전화번호</label>
              <input
                type="text"
                placeholder="Your phone"
                onChange={userPhoneOnChangeHandler}
                value={userPhone}
              />
            </div>

            <div className="nice-form-group">
              <label>이름</label>
              <input
                type="text"
                placeholder="Your name"
                value={userName}
                onChange={userNameOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>생년월일8자리</label>
              <input
                type="text"
                placeholder="Your birth : YYYYMMDD"
                onChange={userBirthOnChangeHandler}
                value={userBirth}
              />
            </div>

            <details>
              <summary onClick={goSignUp}>
                <div className="toggle-code">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-code"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  회원가입요청
                </div>
              </summary>
              <script src="https://gist.github.com/nielsVoogt/e25c9c8f2b8456bbd1239b775d21333f.js"></script>
            </details>
          </section>
        </main>
      </div>
    </>
  );
};

export default HookUseCallback;
