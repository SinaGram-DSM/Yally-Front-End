import React, { useState } from 'react';
import * as P from '../../assets/style/UserPage/ProfileSetting'
import * as M from '../../assets/style/Main/AddTimeLine';
import axios from 'axios';
import { profileEdit } from '../../assets/img';
import { Link } from "react-router-dom";

const Setting = ({baseUrl}) => {

    let [nickname, setNickName] = useState("데인드한"); //name 서버에서 받아온 nick
    let [file, setFile] = useState('');
    let [img, setImg] = useState('');

    const valueReset = (e) => {
        const button = document.getElementById('complete');
        e.target.value = ''; 
        button.style = "background: #D1D1D1";
    }
    const valueChange = (e) => {
        const button = document.getElementById('complete');
        setNickName(e.target.value);
        if(e.target.value == '') button.style = "background: #D1D1D1";
        else button.style =  "background: linear-gradient(to right, #6E8EEA, #9B78EC); cursor: pointer"
    }

    const config = {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDMxMDk5NDgsIm5iZiI6MTYwMzEwOTk0OCwianRpIjoiYmQwMzJmMTgtMTA5OC00ZWVhLTgxNDUtNWJjZGU0YzMxMjUwIiwiZXhwIjoxNjExNzQ5OTQ4LCJpZGVudGl0eSI6ImFkbWluMTIzQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.-4G3ptKZhdlby3iHSlMQF68Og2v28f8xQR4OPuk7P4k',
            'Content-Type': 'multipart/form-data'
        }
    }


    const imgSetting = () => {
        const input = document.getElementById('nick');
        if(input.value == '') alert('닉네임을 설정해 주세요.');

        const file = document.getElementById('input-img');
        const form = new FormData();
        form.append("image", file.files[0])
        form.append("nickname", nickname)
    
        console.log(config);
        axios.put(baseUrl + "profile/", form, config)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    const imgChange = (e) => {
        e.preventDefault();
        const read =  new FileReader();
        let file = e.target.files[0];
        read.onloadend = () => {
            setFile(file)
            setImg(read.result)
        }
        read.readAsDataURL(file);
    }

    return(
        <P.settingContainer>
            <P.settingSection>
                <P.topSection>
                    <P.title>Account Setting</P.title>
                    <P.headerBorder></P.headerBorder>
                </P.topSection>
                <P.profileSection>
                    <P.imgForm>
                        <P.imgInput id="input-img" onChange={imgChange}></P.imgInput>
                    </P.imgForm>
                        <P.imgChange>
                            <P.imgBox>
                                <P.profileChange src={profileEdit} />
                                {file !== '' ?
                                <P.profileImge src={img}/> :
                                <P.profileImge />
                                }
                            </P.imgBox>
                        </P.imgChange>
                </P.profileSection>
                <P.nameBox>
                    <P.nickname id="nick" value={nickname} onFocus={valueReset} onChange={valueChange}/>
                </P.nameBox>
                <P.settingBtn id="complete" onClick={imgSetting}>완료</P.settingBtn>
                <Link to="/timeline" style={{textDecoration : "none"}}><P.backPage>메인 페이지로 돌아가기</P.backPage></Link>
            </P.settingSection>
        </P.settingContainer>
    );
}

export default Setting;