import { useEffect, useRef, useState } from "react";

import HeaderUser from "components/ui/organisms/HeaderUser";
import HeaderMenu from "components/ui/organisms/HeaderMenu";

export default function Header() {
  const [menuClick, setMenuClick] = useState(false);
  const clickRef = useRef();

  useEffect(() => {
    const handleOutsideClose = (e) => {
      // useRef current 에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (menuClick && !clickRef.current.contains(e.target))
        setMenuClick(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [menuClick]);

  return (
    <header>
      <h1 className="blind">도서 기록 홈페이지</h1>
      <HeaderUser setMenuClick={setMenuClick} />
      <HeaderMenu />
    </header>
  );
}
