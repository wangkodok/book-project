import styled from "styled-components";

export default function Login() {
  return (
    <LoginContent>
      <div className="login-text-area">
        <h1 className="title">로그인</h1>
        <p className="title-desc">로그인 후 이용하세요.</p>
      </div>
      <div className="login-input-area">
        <form>
          <fieldset>
            <input type="hidden" value="로그인" />
            <label htmlFor="user-id" id="id">
              <input
                type="text"
                id="user-id"
                size="10"
                placeholder="아이디를 입력하세요."
              />
            </label>
            <label htmlFor="user-pw" id="pw">
              <input
                type="password"
                id="user-pw"
                size="10"
                placeholder="비밀번호를 입력해주세요."
              />
            </label>
            <button className="login-button">로그인</button>
          </fieldset>
        </form>
        <div className="util-login">
          <ul className="list">
            <li className="item">
              <button className="find">아이디 찾기</button>
            </li>
            <li className="item">
              <button className="find">비밀번호 찾기</button>
            </li>
            <li className="item">
              <button className="find">회원가입</button>
            </li>
          </ul>
        </div>
      </div>
    </LoginContent>
  );
}

const LoginContent = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  .login-text-area {
    margin: 0 0 20px 0;
    text-align: center;

    .title {
      margin: 0 0 8px 0;
      font-size: 24px;
      font-weight: 700;
    }
    .title-desc {
      font-size: 16px;
    }
  }

  .login-input-area {
    label {
      display: block;
      margin: 0 0 8px 0;
      font-size: 20px;
    }

    input {
      width: 100%;
      padding: 8px 10px;
      box-sizing: border-box;
    }

    .login-button {
      width: 100%;
      padding: 10px 0;
      font-weight: 700;
      color: #ffffff;
      background-color: #b8883b;
    }
  }

  .util-login {
    margin: 20px 0 0 0;

    .list {
      display: flex;
      justify-content: center;

      .item {
        position: relative;
      }

      .item button {
        font-size: 14px;
      }

      .item + .item {
        margin: 0 0 0 12px;
      }

      .item + .item::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -6px;
        width: 1px;
        height: 12px;
        transform: translate(0, -50%);
        background-color: #000;
      }
    }
  }
`;
