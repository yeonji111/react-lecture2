import { useEffect, useState } from "react";
import "../css/mission.css";
import { type } from "@testing-library/user-event/dist/type";
const HookUseEffect = () => {
  // 처음에만 렌더링
  const list = [
    { type: "admin", menu: "관리자메뉴1" },
    { type: "user", menu: "사용자메뉴1" },
    { type: "admin", menu: "관리자메뉴2" },
    { type: "user", menu: "사용자메뉴2" },
    { type: "admin", menu: "관리자메뉴3" },
  ];

  const [usermode, setUserMode] = useState(null); // 모드 (true: 사용자, false: 관리자)
  const [menuList, setMenuList] = useState([]);
  const [adminMenuList, setAdminmenuList] = useState([]);
  const [userMenuList, setUserMenuList] = useState([]);

  /* 메뉴 타입별 분리 */
  useEffect(() => {
    // 첫 로딩 시 메뉴 필터링
    getMenu();
    // 첫 로딩 시 모드 true로 변환
    // 첫 로딩에는 null -> true로 변하면서
    // usermode의 상태값 변환을 감지하여 메뉴 리스트를 변환해주는 useEffect 실행
    setUserMode(true);
  }, []);

  const getMenu = () => {
    // 관리자는 관리자끼리
    const list1 = list.filter((item) => {
      return item.type == "admin";
    });
    setAdminmenuList(list1);

    // 사용자는 사용자끼리
    const list2 = list.filter((item) => {
      return item.type == "user";
    });
    setUserMenuList(list2);
  };

  /* 모드 변환 */
  const goChangemode = () => {
    setUserMode(!usermode);
  };

  /* 모드 변환에 따른 메뉴 변환 */
  useEffect(() => {
    setMenuList(usermode ? userMenuList : adminMenuList);
  }, [usermode]);

  // /* 모드 변환에 따른 메뉴 기본 세팅 */
  // useEffect(() => {
  //   setMenuList(usermode ? userMenuList : adminMenuList);
  // }, [userMenuList]);

  return (
    <>
      <div className="center">
        <button className="fancy" onClick={goChangemode}>
          <span className="top-key"></span>
          <a>{usermode ? "user" : "admin"} mode</a>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </div>

      <ul className="shadow-button-set">
        {menuList.map((v, i) => {
          return (
            <li key={i}>
              <button>{v.menu}</button>
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
