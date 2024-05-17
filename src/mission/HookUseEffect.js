import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const list = [
    { type: "admin", menu: "관리자메뉴1" },
    { type: "user", menu: "사용자메뉴1" },
    { type: "admin", menu: "관리자메뉴2" },
    { type: "user", menu: "사용자메뉴2" },
    { type: "admin", menu: "관리자메뉴3" },
  ];

  const [usermode, setUsermode] = useState(null); //모드(true: 사용자, false: 관리자)
  const [menuList, setMenuList] = useState([]); //메뉴리스트
  const [adminMenuList, setAdminMenuList] = useState([]);
  const [userMenuList, setUserMenuList] = useState([]);

  /* 메뉴 타입별 분리 */
  useEffect(() => {
    getMenu();
    setUsermode(true);
  }, []);

  /* 메뉴 타입별 분리 */
  const getMenu = () => {
    const list1 = list.filter((item) => {
      return item.type == "admin";
    });
    setAdminMenuList(list1);

    const list2 = list.filter((item) => {
      return item.type == "user";
    });
    setUserMenuList(list2);
  };

  /* 모드 변환 */
  const goChangemode = () => {
    setUsermode(!usermode);
  };

  /* 모드 변환에 따른 메뉴 변환 */
  useEffect(() => {
    setMenuList(usermode ? userMenuList : adminMenuList);
  }, [usermode]);

  return (
    <div>
      <button onClick={goChangemode}>{usermode ? "user" : "admin"} mode</button>

      {menuList.map((v, i) => {
        return <p key={i}>{v.menu}</p>;
      })}
    </div>
  );
};
export default HookUseEffect;
