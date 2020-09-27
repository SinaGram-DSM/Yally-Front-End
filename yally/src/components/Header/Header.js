import React from 'react';
import * as H from '../../assets/style/Header/HeaderStyle';
import * as P from '../../assets/style/Main/AddTimeLine';
import {yallyLogo, search, moreButton } from '../../assets/img'

const profileClick = () => {
    let menu = document.getElementById('menu');
    if(menu.style.display=='none') menu.style.display='block';
    else menu.style.display='none';
}
const Header = () => {
    return(
        <div style={{backgroundColor: '#FDFDFD'}}>
        
        <H.HeaderContainer>
            <H.logoSection>
                <H.logoImg src={yallyLogo}></H.logoImg>
            </H.logoSection>
            <H.inputContainer>
                <H.inputBox></H.inputBox>
            </H.inputContainer>
            <H.searchIcon src={search}/>
            <H.imgContainer>
                    <P.profileImg header onClick={profileClick}/>
                    <H.moreBtn src={moreButton} onClick={profileClick}/>
            </H.imgContainer>
            <H.menuBox id="menu" style={{display: 'none'}}>
                <P.profileImg menu/>
                <H.textContainer>
                    <H.menuText name>데인 드한</H.menuText>
                    <H.menuText email>dehaan@hansome.kr</H.menuText>
                    <H.menuText setting>계정 설정</H.menuText>
                    <H.menuText logout>로그아웃</H.menuText>
                </H.textContainer>
            </H.menuBox>
        </H.HeaderContainer>      
        </div>
    )
}

export default Header;