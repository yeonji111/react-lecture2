import { useEffect, useState } from "react";
import "../css/mission.css";
import { type } from "@testing-library/user-event/dist/type";
const HookUseEffect = () => {
  const [mode, setMode] = useState(["USER MODE", "ADMIN MODE"]);

  /* 내 풀이 : 배열에 있는 값과 직접 비교 */
  const [menu, setMenu] = useState([]);
  const userArr = ["개인정보관리화면", "알림설정화면"];
  const adminArr = ["회원전체관리화면", "배너관리화면", "회사정보관리화면"];

  useEffect(() => {
    setMode(mode[0]);
    // 사용자 관련 메뉴
    setMenu(userArr);
  }, []);

  const ChangeMode = () => {
    if (mode == "USER MODE") {
      setMode("ADMIN MODE");
      // 관리자 관련 메뉴
      setMenu(adminArr);
    } else if (mode == "ADMIN MODE") {
      setMode("USER MODE");
      // 사용자 관련 메뉴
      setMenu(userArr);
    }
  };

  return (
    <>
      <div className="center">
        <button className="fancy" onClick={ChangeMode}>
          <span className="top-key"></span>
          <a>{mode}</a>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </div>

      <ul className="shadow-button-set">
        {/* title에 따라 메뉴를 다르게 출력하기
         title에 따라 map 돌리기 */}
        {menu.map((v, i) => {
          return (
            <li key={i}>
              <button>{v}</button>
            </li>
          );
        })}
      </ul>
      <footer className="copy">
        <p>
          <a
            href="https://waterproof-web-wizard.com/"
            title="Online Marketing Agentur"
          >
            Waterproof Web Wizzard
          </a>
        </p>
      </footer>
    </>
  );
};
export default HookUseEffect;
