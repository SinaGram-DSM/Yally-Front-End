import React from 'react';
import * as S from '../../assets/style/SignUp/SignUpForm';
import { yallyLogo } from '../../assets/img';
import Background from '../Global/Background';

const signUpActive = () => {
    let email = document.getElementById('email');
    let nickname = document.getElementById('nickname');
    let age = document.getElementById('age');
    let password = document.getElementById('password');
    let button = document.getElementById('button');

    if (email.value && nickname.value && age.value && password.value)
        button.style.background='linear-gradient( to right, #4776E6, #8E54E9 )';
    else
        button.style.background='#D1D1D1';
} 

const SignUp = () => {
    return (
        <S.allContainer>
            <Background modal></Background>
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
                                <S.info>Yally와 함께 더 넓은 세상을 들으세요.</S.info>
                            </S.mainContainer>
                        </S.mainSection>
                        <S.mainSection>
                            <S.input placeholder="Email" type="email" id='email' onBlur={signUpActive}></S.input>
                        </S.mainSection>
                        <S.mainSection>
                            <S.nickname placeholder="Nickname" type="text" id='nickname' onBlur={signUpActive}></S.nickname>
                            <S.age placeholder="Age" type="text" id='age' onBlur={signUpActive}></S.age>
                        </S.mainSection>
                        <S.mainSection>
                            <S.input placeholder="Password" type="password" id='password' onBlur={signUpActive}></S.input>
                        </S.mainSection>
                        <S.mainSection>
                            <S.signUpButton id='button'>다음으로 </S.signUpButton>
                        </S.mainSection>
                        <S.back><S.link>로그인 페이지로 돌아가기</S.link></S.back>
                    </S.mainContainer>
                </S.mainSection>
            </S.mainContainer>
        </S.allContainer>
    );
};

export default SignUp;