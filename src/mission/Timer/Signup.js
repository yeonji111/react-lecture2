import { useEffect, useState } from "react";
import Timer from "./Timer";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const idOnChangeHandler = (e) => {
    setUserId(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setUserPw(e.target.value);
  };

  const emailOnChangeHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const close = (param) => {
    if (param.close) {
      setShow(false);
    }
  };

  // 이메일 인증번호 확인 통과 시 회원 등록 가능
  const emailConfirm = (param) => {
    if (param.emailConfirm) {
      setShow(true);
    }
  };

  const saveMember = (param) => {
    // 아이디, 비밀번호, 이메일 로컬스토리지에 저장
    if (userId && userPw && userEmail) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ id: userId, pw: userPw, email: userEmail })
      );

      console.log("유저 등록 확인용", localStorage.getItem("userInfo"));
    }
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Responsive htmlForm
            </h2>
            <p className="text-gray-500 mb-6">
              htmlForm is mobile responsive. Give it a try.
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="id">아이디</label>
                      <input
                        type="text"
                        name="id"
                        id="id"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={userId}
                        onChange={idOnChangeHandler}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="pw">비밀번호</label>
                      <input
                        type="password"
                        name="pw"
                        id="pw"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={userPw}
                        onChange={pwOnChangeHandler}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">이메일</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={userEmail}
                        placeholder="email@domain.com"
                        onChange={emailOnChangeHandler}
                      />
                    </div>
                    <button
                      onClick={() =>
                        show != true ? setShow(true) : setShow(false)
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                      이메일 인증
                    </button>

                    {show ? <Timer onClose={close} /> : null}

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={saveMember}
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

          <a
            href="https://www.buymeacoffee.com/dgauderman"
            target="_blank"
            className="md:absolute bottom-0 right-0 p-4 float-right"
          >
            <img
              src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
              alt="Buy Me A Coffee"
              className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Signup;
