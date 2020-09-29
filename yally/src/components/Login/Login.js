import React from 'react';
import * as L from '../../assets/style/Login/LoginPage';
import { yallyLogo } from '../../assets/img';
import Background from '../Global/Background';

const loginActive = () => {
    let id = document.getElementById('id');
    let password = document.getElementById('password');
    let button = document.getElementById('button');

    if (id.value && password.value)
        button.style.background='linear-gradient( to right, #4776E6, #8E54E9 )';
    else
        button.style.background='#D1D1D1';
}

const Login = () => {
    return (
        <L.allContainer>
            <Background modal></Background>
            <L.mainContainer>
                <L.logo src={yallyLogo}></L.logo>
                <L.mainSection>
                    <L.mainContainer>
                        <L.mainSection>
                            <L.mainContainer>
                                <L.header>Login</L.header>
                                <L.mainSection>
                                    <L.bar></L.bar>
                                </L.mainSection>                                
                                <L.greet>환영합니다! 로그인을 통해 더 넓은 세상을 들으세요.</L.greet>
                            </L.mainContainer>
                        </L.mainSection>
                        <L.mainSection>
                            <L.input placeholder="Email" type="email" id='id' onBlur={loginActive}></L.input>
                        </L.mainSection>
                        <L.mainSection>
                            <L.input placeholder="Password" type="password" id='password' onBlur={loginActive}></L.input>
                        </L.mainSection>
                        <L.mainSection>
                            <L.loginButton id='button'>로그인</L.loginButton>
                        </L.mainSection>
                        <L.solveProblem>혹시 <L.link>비밀번호를 잊으셨나요?</L.link></L.solveProblem>
                        <L.solveProblem>아직 <L.link>계정이 없으신가요?</L.link></L.solveProblem>
                    </L.mainContainer>
                </L.mainSection>
            </L.mainContainer>
        </L.allContainer>
    );
};

export default Login;