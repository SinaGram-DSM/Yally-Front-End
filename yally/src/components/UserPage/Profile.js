import React, { useEffect, useState } from 'react';
import * as M from '../../assets/style/UserPage/PageStyle';
import * as S from '../../assets/style/Main/AddTimeLine';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostItem from '../Main/PostItem';

const Profile = ({baseUrl}) => {
    // const email = this.props.match;
    const imgUrl = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/"
    let [name, setName] = useState('');
    // let [image, setImage] = useState('');
    let [data, setData] = useState({
        img: "",
        listening: 0,
        listener: 0
    });
    let [timeLine, setTimeLine] = useState([]);
    let [page, setPage] = useState(1);


    
    const config = {
        headers : {
            'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }
    
    const feedConfig = {
        headers : {
            'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }

    
    useEffect (() => {
        axios.get(baseUrl + "profile/admin123@gmail.com", config)
        .then((res) => {
            setData({
                ...data,
                img: res.data.image,
                listening: res.data.listening, 
                listener: res.data.listener
            });

            setName(res.data.nickname);
            console.log(res.data.image);
        })   
        
        axios.get(baseUrl + "mypage/timeline/admin123@gmail.com/" + page, feedConfig)
        .then((res) => {
            setTimeLine(res.data.posts)
            setPage(page++)
            console.log(res.data.posts);
        })
    },[]);

    
    
    return(
        <div>
        <S.mainContainer profile>
            <S.mainSection profile>
            <S.writerInfoBox profile>
                <S.profileImg profile src={imgUrl + data.img}></S.profileImg>
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
        {timeLine.map((feed) => (
            <PostItem
                key = {feed.id}
                id = {feed.id}
                userImg = {feed.user.img}
                nickname = {feed.user.nickname}
                email =  {feed.user.email}
                content = {feed.content}
                sound = {feed.sound}
                date = {feed.createdAt}
                isYally = {feed.isYally}
                isComment = {feed.commentCount}
                yallyNum = {feed.yallyCount}
                audioImg = {feed.img}

            />
        ))}
    </div>
    );
}


export default Profile;