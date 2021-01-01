import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import * as L from "../../assets/style/Login/LoginPage";
import * as P from "../../assets/style/PasswordReset/PasswordResetPage";
import { yallyLogo } from "../../assets/img";
import Background from "../Global/Background";
import { passwordResetCode } from "../../lib/api/user";
import { ErrorToast } from "../../lib/Toast";

const PasswordReset = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const buttonActive = () => {
    let email = document.getElementById("email");
    let button = document.getElementById("button");

    if (email.value)
      button.style.background = "linear-gradient( to right, #4776E6, #8E54E9 )";
    else button.style.background = "#D1D1D1";
  };

  const onSubmitEmail = () => {
    const email = document.getElementById("email").value.trim();
    passwordResetCode(email)
      .then(() => {
        history.push({
          pathname: "/password-reset-input",
          state: {
            email: email,
          },
        });
      })
      .catch(() => {
        ErrorToast("일치하는 이메일이 없습니다.");
      });
  };

  return (
    <L.allDiv>
    <P.allContainer>
      <Background modal></Background>
      <P.mainContainer>
        <P.logo src={yallyLogo}></P.logo>
        <P.mainSection>
          <P.mainContainer>
            <P.mainSection>
              <P.mainContainer>
                <P.header>Password Reset</P.header>
                <P.mainSection>
                  <P.bar></P.bar>
                </P.mainSection>
                <P.mainSection>
                  <P.guidance>
                    가입 시 등록한 이메일을 입력해 주세요.
                  </P.guidance>
                </P.mainSection>
              </P.mainContainer>
            </P.mainSection>
            <P.mainSection>
              <P.input
                placeholder="Email"
                type="email"
                id="email"
                onBlur={buttonActive}
                onChange={onChangeEmail}
              ></P.input>
            </P.mainSection>
            <P.mainSection>
              <P.sendResetCode
                id="button"
                onClick={onSubmitEmail}
                disabled={!email}
              >
                비밀번호 재설정 코드 전송
              </P.sendResetCode>
            </P.mainSection>
            <P.backLogin>
            <Link to="/" style={{textDecoration : "none"}}><P.link>로그인 페이지로 돌아가기</P.link></Link>
            </P.backLogin>
          </P.mainContainer>
        </P.mainSection>
      </P.mainContainer>
    </P.allContainer>
    </L.allDiv>
  );
};

export default PasswordReset;
