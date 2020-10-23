import React, { useState } from 'react';
import * as P from '../../assets/style/UserPage/ProfileSetting'
import * as M from '../../assets/style/Main/AddTimeLine';
import {profileEdit, profile} from '../../assets/img';



const Setting = () => {
    let [name, setName] = useState("데인드한"); //name 서버에서 받아온 nick
    let [file, setFile] = useState('');

    const valueReset = (e) => {
        const button = document.getElementById('complete');
        e.target.value = ''; 
        button.style = "background: #D1D1D1";
    }
    const valueChange = (e) => {
        const button = document.getElementById('complete');
        setName(e.target.value);
        if(e.target.value == '') button.style = "background: #D1D1D1";
        else button.style = "background: linear-gradient(to right, #6E8EEA, #9B78EC)"
    }
    const btnCheck = () => {
        const input = document.getElementById('nick');
        if(input.value == '') alert('닉네임을 설정해 주세요.');
    }


    
    return(
        <P.settingContainer>
            <P.settingSection>
                <P.topSection>
                    <P.title>Account Setting</P.title>
                    <P.headerBorder></P.headerBorder>
                </P.topSection>
                <P.profileSection>
                        <P.imgInput id="input-img"></P.imgInput>
                        <P.imgChange>
                            <P.imgBox>
                                <P.profileChange src={profileEdit} />
                                <P.profileImge src={profile}/>
                            </P.imgBox>
                        </P.imgChange>
                </P.profileSection>
                <P.nameBox>
                    <P.nickname id="nick" value={name} onFocus={valueReset} onChange={valueChange}/>
                </P.nameBox>
                <P.settingBtn id="complete" onClick={btnCheck}>완료</P.settingBtn>
                <P.backPage>이전 페이지로 돌아가기</P.backPage>
            </P.settingSection>
        </P.settingContainer>
    );
}

export default Setting;