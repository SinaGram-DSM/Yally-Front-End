import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as P from "../../assets/style/PasswordReset/PasswordResetPage";
import { yallyLogo, help } from "../../assets/img";
import Background from "../Global/Background";
import * as L from "../../assets/style/PasswordReset/login";
import * as R from "../../assets/style/PasswordReset/PasswordResetInputForm";
import { passwordReset } from "../../lib/api/user";

const PasswordResetInput = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [helpBox, setHelpBox] = useState(false);

  useEffect(() => {
    if (typeof location.state !== "undefined" && location.state !== null) {
      const { email } = location.state;
      setEmail(email);
    } else {
      setEmail("default");
    }
  }, []);

  const onChangeResetCode = (e) => {
    setResetCode(e.target.value);
  };

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const buttonActive = () => {
    let email = document.getElementById("email");
    let resetCode = document.getElementById("resetCode");
    let newPassword = document.getElementById("newPassword");
    let button = document.getElementById("button");

    if (email.value && resetCode.value && newPassword.value)
      button.style.background = "linear-gradient( to right, #4776E6, #8E54E9 )";
    else button.style.background = "#D1D1D1";
  };

  const onSubmitNewPassword = () => {
    const resetCode = document.getElementById("resetCode").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    passwordReset(email, resetCode, newPassword)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res.data);
  };

  let helpBoxStyle = helpBox ? "block" : "none";

  return (
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
                  <R.guidance>
                    아래 이메일 주소로 발송된 비밀번호 재설정 코드를 입력해
                    주세요.
                  </R.guidance>
                  <R.helpIcon
                    src={help}
                    onMouseOver={() => setHelpBox(true)}
                    onMouseOut={() => setHelpBox(false)}
                  ></R.helpIcon>
                </P.mainSection>
              </P.mainContainer>
              <R.helpBox style={{ display: helpBoxStyle }}>
                <R.helpText>
                  <R.QA>Q. </R.QA>이메일이 도착하지 않았어요.
                </R.helpText>
                <R.helpText>
                  <R.QA>A. </R.QA>회원가입 페이지로 돌아가 이메일을 올바르게
                  입력했는지 확인해 주세요. 올바르게 입력되었다면 스팸 메일함을
                  확인해 주세요.{" "}
                </R.helpText>
              </R.helpBox>
            </P.mainSection>
            <P.mainSection>
              <L.input
                placeholder="Email"
                type="email"
                id="email"
                defaultValue={email}
                onBlur={buttonActive}
              ></L.input>
            </P.mainSection>
            <P.mainSection>
              <L.input
                placeholder="Password Reset Code"
                type="text"
                id="resetCode"
                onBlur={buttonActive}
                onChange={onChangeResetCode}
              ></L.input>
            </P.mainSection>
            <P.mainSection>
              <L.input
                placeholder="New Password"
                type="password"
                id="newPassword"
                onBlur={buttonActive}
                onChange={onChangeNewPassword}
              ></L.input>
            </P.mainSection>
            <P.mainSection>
              <R.submitNewPassword
                id="button"
                onClick={onSubmitNewPassword}
                disabled={!email && resetCode && newPassword}
              >
                비밀번호 재설정
              </R.submitNewPassword>
            </P.mainSection>
            <P.backLogin>
              <P.link>이메일 입력 페이지로 돌아가기</P.link>
            </P.backLogin>
          </P.mainContainer>
        </P.mainSection>
      </P.mainContainer>
    </P.allContainer>
  );
};

export default PasswordResetInput;
