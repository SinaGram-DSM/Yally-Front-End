import React from 'react';
import * as S from '../../assets/style/SignUp/SignUpForm';
import * as C from '../../assets/style/SignUp/SignUpCheckForm';
import { yallyLogo } from '../../assets/img';
import Background from '../Global/Background';

const buttonActive = () => {
    let code = document.getElementById('code');
    let button = document.getElementById('button');

    if (code.value)
        button.style.background='linear-gradient( to right, #4776E6, #8E54E9 )';
    else
        button.style.background='#D1D1D1';
}

const SignUpCheck = () => {
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
                                <C.info>등록된 이메일 주소로 전송된 이메일 코드를 입력하세요.</C.info>
                            </S.mainContainer>
                        </S.mainSection>
                        <S.mainSection>
                            <C.input placeholder="code" type="text" id='code' onBlur={buttonActive}></C.input>
                        </S.mainSection>
                        <S.mainSection>
                            <C.button id='button'>회원가입</C.button>
                        </S.mainSection>
                        <S.back><S.link>회원가입 페이지로 돌아가기</S.link></S.back>
                    </S.mainContainer>
                </S.mainSection>
            </S.mainContainer>
        </S.allContainer>
    );
};

export default SignUpCheck;