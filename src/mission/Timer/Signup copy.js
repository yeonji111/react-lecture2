/* https://tailwindcomponents.com/component/responsive-form-1 */

import { useCallback, useEffect, useState } from "react";
import Timer from "./Timer";

const SignUp = () => {
  const arrayFrom = () => {
    //1. 문자열, 유사배열 -> 배열 형태로 반환
    const set = new Set([1, 2, 3]);
    console.log(set);
    console.log(Array.from(set));
    //2. 매핑함수 사용
    const arr = [1, 2, 3];
    const double = Array.from(arr, (el) => el * 2);
    console.log(double);
  };

  /* 인증코드 생성 */
  const getAuthCode = () => {
    //version1. 기본for문 사용
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    // return arr.join("");

    //version2. Array.from: 다양한 종류의 객체를 배열로 반환할 때 사용
    const code = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 10)
    );

    console.log(code.join(""));
    return code.join("");
  };

  useEffect(() => {
    // arrayFrom();
    localStorage.setItem("authcode", getAuthCode());
  }, []);

  /* 입력요소 핸들러 */
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [authCode, setAuthCode] = useState("");

  const userIdOnChangeHandler = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const userPwOnChangeHandler = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);
  const userEmailOnChangeHandler = useCallback((e) => {
    setUserEmail(e.target.value);
  }, []);
  const authCodeOnChangeHandler = useCallback((e) => {
    setAuthCode(e.target.value);
  }, []);

  /* 이메일인증 */
  const [showTimer, setShowTimer] = useState(false);
  const [isConfirmAuth, setIsConfirmAuth] = useState(false);
  const goConfirmEmail = () => {
    if (userEmail == "") {
      alert("이메일을 먼저 입력하세요");
      return;
    }
    setIsConfirmAuth(false);
    setShowTimer(true);
  };

  /* 타이머 컴포넌트 닫기 관련 */
  const close = ({ closeTimer }) => {
    if (closeTimer) {
      alert("인증시간 만료입니다.");
      setShowTimer(false);
    }
  };

  /* 인증번호 확인 관련 */
  const goCheckAuthCode = () => {
    const code = localStorage.getItem("authcode");

    if (code == authCode) {
      alert("인증완료입니다.");
      setShowTimer(false);
      setIsConfirmAuth(true);
    } else {
      alert("인증번호가 틀렸습니다.");
      setIsConfirmAuth(false);
    }
  };

  /* 회원가입 완료 */
  const goSignUp = () => {
    if (!userId) {
      alert("아이디를 입력하세요");
      return;
    }
    if (!userPw) {
      alert("비번을 입력하세요");
      return;
    }
    if (!isConfirmAuth) {
      alert("이메일 인증먼저해주세요.");
      return;
    }

    const infoObj = { id: userId, pw: userPw, email: userEmail };
    localStorage.setItem("info", JSON.stringify(infoObj));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">회원가입</h2>
          <p className="text-gray-500 mb-6">회원가입 정보를 입력하세요</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">아이디</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={userIdOnChangeHandler}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">비밀번호</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={userPwOnChangeHandler}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">이메일</label>

                    <div className="md:col-span-5">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-8/12 bg-gray-50"
                        placeholder="email@domain.com"
                        onChange={userEmailOnChangeHandler}
                      />
                      <button
                        onClick={goConfirmEmail}
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4"
                      >
                        이메일인증
                      </button>
                    </div>
                  </div>

                  {showTimer ? (
                    <div className="md:col-span-5">
                      <div className="flex justify-between">
                        <input
                          type="text"
                          className="h-10 border mt-1 rounded px-4 bg-gray-50 w-4/12"
                          onChange={authCodeOnChangeHandler}
                        />
                        <Timer limit={10} onClose={close} />
                        <div className="inline-flex items-end">
                          <button
                            onClick={goCheckAuthCode}
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4"
                          >
                            확인
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="md:col-span-5 text-right mt-10">
                    <div className="inline-flex items-end">
                      <button
                        onClick={goSignUp}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        가입하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
