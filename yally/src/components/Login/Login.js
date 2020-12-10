import React from "react";
import * as L from "../../assets/style/Login/LoginPage";
import { yallyLogo } from "../../assets/img";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../lib/api/user";
import { ToastContainer, toast } from "react-toastify";
import { ErrorToast } from "../../lib/Toast";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let history = useHistory();
  const buttonActive = () => {
    let id = document.getElementById("id");
    let password = document.getElementById("password");
    let button = document.getElementById("button");

    if (id.value && password.value)
      button.style.background = "linear-gradient( to right, #4776E6, #8E54E9 )";
    else button.style.background = "#D1D1D1";
  };

  const onSubmitLogin = () => {
    const email = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    login(email, password)
      .then((res) => {
        toast("k");
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        history.push({
          pathname: "/timeline",
        });
      })
      .catch(() => {
        ErrorToast("로그인에 실패하였습니다. 다시 시도하세요.");
      });
  };

  return (
    <L.allDiv>
      <ToastContainer />
      <L.allContainer>
        <L.mainContainer>
          <L.logo src={yallyLogo}></L.logo>
          <L.mainSection>
            <L.mainContainer>
              <L.mainSection>
                <L.mainContainer box>
                  <L.header>Login</L.header>
                  <L.mainSection>
                    <L.bar></L.bar>
                  </L.mainSection>
                  <L.greet>
                    환영합니다! 로그인을 통해 더 넓은 세상을 들으세요.
                  </L.greet>
                </L.mainContainer>
              </L.mainSection>
              <L.mainSection>
                <L.input
                  placeholder="Email"
                  type="email"
                  id="id"
                  onBlur={buttonActive}
                ></L.input>
              </L.mainSection>
              <L.mainSection>
                <L.input
                  placeholder="Password"
                  type="password"
                  id="password"
                  onBlur={buttonActive}
                ></L.input>
              </L.mainSection>
              <L.mainSection>
                <L.loginButton id="button" onClick={onSubmitLogin}>
                  로그인
                </L.loginButton>
              </L.mainSection>
              <Link to="/password-reset" style={{ textDecoration: "none" }}>
                <L.solveProblem>
                  혹시 <L.link>비밀번호를 잊으셨나요?</L.link>
                </L.solveProblem>
              </Link>
              <Link to="/sign-up" style={{ textDecoration: "none" }}>
                <L.solveProblem>
                  아직 <L.link>계정이 없으신가요?</L.link>
                </L.solveProblem>
              </Link>
            </L.mainContainer>
          </L.mainSection>
        </L.mainContainer>
      </L.allContainer>
    </L.allDiv>
  );
};

export default Login;
