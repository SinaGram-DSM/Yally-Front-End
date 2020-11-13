import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../../assets/style/SignUp/SignUpForm';
import * as L from '../../assets/style/Login/LoginPage';
import { yallyLogo } from '../../assets/img';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    

const SignUp = ({baseUrl}) => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [nicknameError, setNicknameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect( () => {
        console.log({
            email,
            nickname,
            age,
            password
        });
    })

    const onChangeEmail = e =>{
        setEmail(e.target.value);
    };

    const onChangeNickname = e =>{
        setNickname(e.target.value);
    };

    const onChangeAge = e => {
        setAge(e.target.value);
    }

    const onChangePassword = e =>{
        setPassword(e.target.value);
    };
    
    const onSubmitEmail = async () => {

        const email = document.getElementById("email").value.trim();
        const nickname = document.getElementById("nickname").value.trim();
        const age = document.getElementById("age").value.trim();
        const password = document.getElementById("password").value.trim();
        let nicknameLength = 0;
        const checkNum = /[0-9]/;
        const checkEng = /[a-zA-Z]/;
        const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
        const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        let i = 0;

        for(i=0; i<=nickname.length; i++){
            if(checkNum.test(nickname[i]) || checkEng.test(nickname[i]))
                nicknameLength++;
            else if(checkKor.test(nickname[i]))
                nicknameLength = nicknameLength + 2;
            else if(checkSpc.test(nickname[i])){
                setNicknameError(true);
                return;
            }
            if(nicknameLength>20){
                setNicknameError(true);
                return;
            }
        }
        if(password.length < 8){
            setPasswordError(true)
            return;
        }

        const data = 
        {
            email : email,
            password : password,
            nickname : nickname,
            age: age
        }
        
        console.log(data.email)
        const res = await axios.post(baseUrl + "user/auth-code/email", {email: data.email})
        .then((res) => {
            console.log(res);
            history.push({
                pathname: "/sign-up-check",
                state: {
                    email: email,
                    nickname: nickname,
                    age: age,
                    password: password
                }
            });
        }).catch((error) => {
            console.log(error);
            setEmailError(true);
        })
    }

    let emailStyle = emailError ? "visible" : "hidden";
    let nicknameStyle = nicknameError ? "visible" : "hidden";
    let passwordStyle = passwordError ? "visible" : "hidden";
    return (
        <L.allDiv>
        <S.allContainer>
            <S.mainContainer>
                <S.logo src={yallyLogo}></S.logo>
                <S.mainSection>
                    <S.mainContainer>
                        <S.mainSection>
                            <S.mainContainer box>
                                <S.header>Sign Up</S.header>
                                <S.mainSection>
                                    <S.bar></S.bar>
                                </S.mainSection>                                
                                <S.info>Yally와 함께 더 넓은 세상을 들으세요.</S.info>
                            </S.mainContainer>
                        </S.mainSection>
                        <S.mainSection>
                            <S.input placeholder="Email" type="email" id='email' onBlur={signUpActive} onChange={onChangeEmail}></S.input>
                        </S.mainSection>
                        <S.rightAlignment>
                            <S.errorMessage style={{visibility: emailStyle}}>이미 존재하는 이메일입니다.</S.errorMessage>
                        </S.rightAlignment>
                        <S.mainSection>
                            <S.nickname placeholder="Nickname" type="text" id='nickname' onBlur={signUpActive} onChange={onChangeNickname} maxLength={20}></S.nickname>
                            <S.age placeholder="Age" type="text" id='age' onBlur={signUpActive} onChange={onChangeAge}></S.age>
                        </S.mainSection>
                        <S.rightAlignment>
                            <S.errorMessage style={{visibility: nicknameStyle}}>한글 10자, 영문 20자 이내로 설정할 수 있습니다.</S.errorMessage>
                        </S.rightAlignment>
                        <S.mainSection>
                            <S.input placeholder="Password" type="password" id='password' onBlur={signUpActive} onChange={onChangePassword}></S.input>
                        </S.mainSection>
                        <S.rightAlignment>
                            <S.errorMessage style={{visibility: passwordStyle}}>비밀번호는 8자 이상이어야 합니다.</S.errorMessage>
                        </S.rightAlignment>
                        <S.mainSection>
                            <S.signUpButton id='button' onClick={onSubmitEmail} disabled={!(email&&nickname&&age&&password)}>다음으로 </S.signUpButton>
                        </S.mainSection>
                        <Link to="/" style={{textDecoration : "none"}}><S.back><S.link>로그인 페이지로 돌아가기</S.link></S.back></Link>
                        {/* <Background></Background> */}
                    </S.mainContainer>
                </S.mainSection>
            </S.mainContainer>
        </S.allContainer>
        </L.allDiv>
    );
};

export default SignUp;