import React, { useEffect, useState } from 'react';
import * as M from '../../assets/style/UserPage/PageStyle';
import * as S from '../../assets/style/Main/AddTimeLine';
import axios from 'axios';
import ProfileFeed from './ProfileFeed';
import { Link } from 'react-router-dom';

const Profile = () => {
    // const email = this.props.match;
    let [name, setName] = useState('');
    // let [image, setImage] = useState('');
    let [data, setData] = useState({
        img: "",
        listening: 0,
        listener: 0
    });
    
    useEffect (() => {
        getProfile();
    },[]);

    
    const config = {
        headers : {
            'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }

    const getProfile = () => {
        axios.get("http://13.125.238.84:81/profile/admin123@gmail.com", config)
        .then((res) => {
            setData({
                ...data,
                img: res.data.image,
                listening: res.data.listening, 
                listener: res.data.listener
            });

            setName(res.data.nickname);
            console.log(res.data);
        })   
    }
    
    return(
        <div>
        <S.mainContainer profile>
            <S.mainSection profile>
            <S.writerInfoBox profile>
                <S.profileImg profile src={data.img}></S.profileImg>
            <M.ProfileData>
                <M.UserName>{name}</M.UserName>   
                <M.Email>(dehaan@hansome.kr)</M.Email>
            <M.Listen>
                <Link to={"/profile/"+ name + "/listening/"+ data.listening} style={{textDecoration: 'none'}}><M.Listening>리스닝 {data.listening}</M.Listening></Link>
                <Link to={"/profile/" + name + "/listener/" + data.listener} style={{textDecoration: 'none'}}><M.Listener>리스너 {data.listener}</M.Listener></Link>
                </M.Listen>
                </M.ProfileData>
            </S.writerInfoBox>
            </S.mainSection>
        </S.mainContainer>
        <ProfileFeed/>
    </div>
    );
}


export default Profile;