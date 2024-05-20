import { useState } from "react";
import Login from "./Login";

const PropsSend = () => {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const [name, setName] = useState("");

  const close = (param) => {
    if (param.close) {
      setOpen(false);
    }
    if (param.name) {
      // 예외처리가 없으면 undefined로 setName때문에 덮어쓰기 되어버림
      setName(param.name);
    }
    console.log("이름확인용", name);
  };

  return (
    <>
      {open ? (
        <Login onClose={close} google="구글" />
      ) : (
        <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
          <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                  <div className="space-y-4">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                      loading="lazy"
                      className="w-10"
                      alt="tailus logo"
                    />
                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                      {name != ""
                        ? name + "님 환영합니다."
                        : `Sign in to unlock the \n best of Tailus.`}
                    </h2>
                  </div>
                  {name == "" ? (
                    <div className="mt-16 grid space-y-4">
                      <button
                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                        onClick={openPopup}
                      >
                        <div className="relative flex items-center space-x-4 justify-center">
                          <img
                            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                            className="absolute left-0 w-5"
                            alt="google logo"
                          />
                          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                            Continue with Google
                          </span>
                        </div>
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PropsSend;
