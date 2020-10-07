import React, { useEffect, useState } from 'react';
import * as M from '../../assets/style/UserPage/PageStyle';
import * as S from '../../assets/style/Main/AddTimeLine';
import axios from 'axios';
import MyFeed from './MyFeed';

const MyPage = () => {
    
    let [name, setName] = useState('');
    // let [image, setImage] = useState('');
    let [data, setData] = useState({
        listening: 0,
        listener: 0
    });
    
    useEffect = (() => {
        getProfile();
    });

    const config = {
        headers : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'
    }

    const getProfile = () => {
        axios.get("http://13.125.238.84:81/profile/", config)
        .than((res) => {
            setData({
                ...data,
                listening: res.data.listening, 
                listener: res.data.listener
            });
            setName(res.data.nickname);
        })
    }

    
    return(
        <div>
        <S.mainContainer profile>
            <S.mainSection profile>
            <S.writerInfoBox profile>
                <S.profileImg profile></S.profileImg>
            <M.ProfileData>
                <M.UserName>{name}</M.UserName>   
                <M.Email>(dehaan@hansome.kr)</M.Email>
            <M.Listen>
                <M.Listening>{data.listening}</M.Listening>
                <M.Listener>{data.listener}</M.Listener>
                </M.Listen>
                </M.ProfileData>
            </S.writerInfoBox>
            </S.mainSection>
        </S.mainContainer>
        <MyFeed></MyFeed>
    </div>
    );
}


export default MyPage;