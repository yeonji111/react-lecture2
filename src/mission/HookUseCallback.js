import { useCallback, useState } from "react";
import "../css/회원가입.css";
const HookUseCallback = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const passwordOnChangeHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const confirmPwOnChangeHandler = useCallback((e) => {
    setConfirmPw(e.target.value);
  }, []);

  const phoneOnChangeHandler = useCallback((e) => {
    setPhone(e.target.value);
  }, []);

  const nameOnChangeHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const birthOnChangeHandler = useCallback((e) => {
    setBirth(e.target.value);
  }, []);

  // let check = true; // check = true : 유효성 통과 , false : 유효성 불통
  const checkPasswordFunction = () => {
    if (confirmPw != password) {
      alert("비밀번호 재확인이 틀렸습니다.");
      return false;
    } else {
      return true;
    }
  };

  const member = { id, password, confirmPw, phone, name, birth };

  const submitJoin = () => {
    if (id.length < 3) {
      alert("아이디를 3글자 이상 입력해주세요");
      return;
    }

    if (password.length < 3) {
      alert("비밀번호를 3글자 이상 입력해주세요");
      return;
    }

    if (phone == "") {
      alert("핸드폰번호를 입력해주세요");
      return;
    }

    if (name.length < 2) {
      alert("이름을 2글자 이상 입력해주세요");
      return;
    }

    if (birth.length != 8) {
      alert("생년월일은 YYYYMMDD 형식으로 8자리를 입력해주세요");
      return;
    }

    const check = checkPasswordFunction();

    if (check) {
      // 유효성 통과시에만 콘솔에 출력
      console.log(member);
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
                value={id}
                onChange={idOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="Your Pw"
                value={password}
                onChange={passwordOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>비밀번호 확인</label>
              <input
                type="password"
                placeholder="Your Pw Confirm"
                onChange={confirmPwOnChangeHandler}
                value={confirmPw}
              />
              <br />
              <button
                style={{ backgroundColor: "#3b4ce2", color: "white" }}
                onClick={checkPasswordFunction}
              >
                비밀번호 확인
              </button>
            </div>

            <div className="nice-form-group">
              <label>전화번호</label>
              <input
                type="text"
                placeholder="Your phone"
                onChange={phoneOnChangeHandler}
                value={phone}
              />
            </div>

            <div className="nice-form-group">
              <label>이름</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={nameOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>생년월일8자리</label>
              <input
                type="text"
                placeholder="Your birth : YYYYMMDD"
                onChange={birthOnChangeHandler}
                value={birth}
              />
            </div>

            <details>
              <summary onClick={submitJoin}>
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
