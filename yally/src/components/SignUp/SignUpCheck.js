import React, { useState, useEffect } from "react";
import * as S from "../../assets/style/SignUp/SignUpForm";
import * as L from "../../assets/style/Login/LoginPage";
import * as C from "../../assets/style/SignUp/SignUpCheckForm";
import { yallyLogo } from "../../assets/img";
import { useLocation, Link, useHistory } from "react-router-dom";
import { help } from "../../assets/img";
import { authCheck, register } from "../../lib/api/user";
import { ToastContainer } from "react-toastify";
import { ErrorToast } from "../../lib/Toast";

const buttonActive = () => {
  let code = document.getElementById("code");
  let button = document.getElementById("button");

  if (code.value)
    button.style.background = "linear-gradient( to right, #4776E6, #8E54E9 )";
  else button.style.background = "#D1D1D1";
};

const SignUpCheck = () => {
  let history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [code, setCode] = useState("");
  const [info, setInfo] = useState(true);
  const [helpBox, setHelpBox] = useState(false);

  useEffect(() => {
    if (typeof location.state !== "undefined" && location.state !== null) {
      const { email, nickname, age, password } = location.state;
      setEmail(email);
      setNickname(nickname);
      setAge(age);
      setPassword(password);
      console.log({
        email,
        nickname,
        age,
        password,
      });
    } else {
      setEmail("default");
      setNickname("default");
      setAge("default");
      setPassword("default");
    }
  }, [location.state]);

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const SendCode = () => {
    const code = document.getElementById("code").value.trim();

    authCheck(email, code)
      .then(() => {
        register(email, password, nickname, parseInt(age));
        history.push({
          pathname: "/",
        });
      })
      .catch(() => {
        ErrorToast("회원가입에 실패하였습니다. 다시 시도하세요.");
        setInfo(false);
      });
  };
  let infoStyle = info ? "block" : "none";
  let infoErrorStyle = info ? "none" : "block";
  let helpBoxStyle = helpBox ? "block" : "none";

  return (
    <L.allDiv>
      <ToastContainer />
      <S.allContainer>
        <S.mainContainer>
          <S.logo src={yallyLogo}></S.logo>
          <S.mainSection>
            <S.mainContainer>
              <S.mainSection>
                <S.mainContainer>
                  <S.header>Sign Up</S.header>
                  <S.mainSection>
                    <S.bar></S.bar>
                  </S.mainSection>
                  <S.mainSection>
                    <C.info style={{ display: infoStyle }}>
                      등록된 이메일 주소로 전송된 이메일 코드를 입력하세요.
                    </C.info>
                    <C.info style={{ display: infoErrorStyle }}>
                      재설정 코드가 올바르지 않습니다.{" "}
                    </C.info>
                    <C.help
                      src={help}
                      style={{ display: infoErrorStyle }}
                      onMouseOver={() => setHelpBox(true)}
                      onMouseOut={() => setHelpBox(false)}
                    ></C.help>
                  </S.mainSection>
                </S.mainContainer>
                <C.helpBox style={{ display: helpBoxStyle }}>
                  <C.helpText>
                    <C.QA>Q. </C.QA>이메일이 도착하지 않았어요.
                  </C.helpText>
                  <C.helpText>
                    <C.QA>A. </C.QA>회원가입 페이지로 돌아가 이메일을 올바르게
                    입력했는지 확인해 주세요. 올바르게 입력되었다면 스팸
                    메일함을 확인해 주세요.{" "}
                  </C.helpText>
                </C.helpBox>
              </S.mainSection>
              <S.mainSection>
                <C.input
                  placeholder="code"
                  type="text"
                  id="code"
                  onBlur={buttonActive}
                  onChange={onChangeCode}
                ></C.input>
              </S.mainSection>
              <S.mainSection>
                <C.button id="button" disabled={!code} onClick={SendCode}>
                  회원가입
                </C.button>
              </S.mainSection>
              <Link to="sign-up" style={{ textDecoration: "none" }}>
                <S.back>
                  <S.link>회원가입 페이지로 돌아가기</S.link>
                </S.back>
              </Link>
            </S.mainContainer>
          </S.mainSection>
        </S.mainContainer>
      </S.allContainer>
    </L.allDiv>
  );
};

export default SignUpCheck;
