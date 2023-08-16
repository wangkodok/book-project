import Logo from "components/ui/atoms/Logo";
import HeaderUtil from "components/ui/molecules/HeaderUtil";
import styled from "styled-components";

export default function HeaderUser({ setMenuClick }) {
  return (
    <User>
      <div className="inner">
        <div className="content">
          <Logo setMenuClick={setMenuClick} />
          <HeaderUtil />
        </div>
      </div>
    </User>
  );
}

const User = styled.div`
  .inner {
    width: 1200px;
    margin: 0 auto;
    padding: 32px 0;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
