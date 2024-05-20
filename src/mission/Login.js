import { useCallback, useState } from "react";

const Login = (props) => {
  const { onClose, google } = props;
  const [userid, setUserId] = useState("");
  const [userpw, setUserPw] = useState("");

  const idOnChangeHandler = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const pwOnChangeHandler = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);

  const goSave = () => {
    //json.stringfy <-> json.parse
    const obj = JSON.parse(localStorage.getItem("login"));
    const { id, pw, name } = obj;
    if (!userid) {
      alert("아이디를 입력하세요");
    }
    if (!userpw) {
      alert("비밀번호를 입력하세요");
    }

    if (id == userid && pw == userpw) {
      alert("로그인 성공입니다.");
      onClose({ close: true, id: id, pw: pw, name: name });
    } else {
      alert("로그인 실패입니다.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">{google} 로그인</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="id"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={idOnChangeHandler}
                      value={userid}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      사용자 아이디
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={pwOnChangeHandler}
                      value={userpw}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      사용자 비밀번호
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                      onClick={goSave}
                    >
                      로그인 하기
                    </button>
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1 mx-5"
                      onClick={() => onClose({ close: true })}
                    >
                      로그인 취소
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
