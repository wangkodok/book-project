import HeaderUser from "components/ui/organisms/HeaderUser";
import HeaderMenu from "components/ui/organisms/HeaderMenu";

export default function Header() {
  return (
    <header>
      <h1 className="blind">도서 기록 홈페이지</h1>
      <HeaderUser />
      <HeaderMenu />
    </header>
  );
}
