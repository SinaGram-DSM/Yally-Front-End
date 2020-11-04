import React, { useEffect, useState, useCallback } from 'react';
import * as M from '../../assets/style/UserPage/PageStyle';
import * as S from '../../assets/style/Main/AddTimeLine';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostItem from '../Main/PostItem';

const Profile = (props) => {
    const email = props.match.params.email;
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
    let [isLoading, setIsLoading] = useState(false);


    
    const config = {
        headers : {
            'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }
    
    const feedConfig = {
        headers : {
            'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }

    
  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight && isLoading === true) {
      setTimeout(function () {
        setTimeLine(timeLine.concat(timeLine));
        setPage((state) => state + 1);
        setIsLoading(false);
        console.log(page);
      }, 500);
    }
  }, [isLoading]);
 
    useEffect (() => {
        console.log(props);
        axios.get("http://13.125.238.84:81/profile/" + email, config)
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
        
        axios.get("http://13.125.238.84:81/mypage/timeline/" + email +"/" + page, feedConfig)
        .then((res) => {
            setTimeLine(res.data.posts)
            console.log(res.data.posts);
        })
        window.addEventListener("scroll", infiniteScroll);
        return () => window.removeEventListener("scroll", infiniteScroll);
    },[infiniteScroll]);

    
    
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
                <Link to={"/profile/" + email + "/listening/"+ data.listening} style={{textDecoration: 'none'}}><M.Listening>리스닝 {data.listening}</M.Listening></Link>
                <Link to={"/profile/" + email + "/listener/" + data.listener} style={{textDecoration: 'none'}}><M.Listener>리스너 {data.listener}</M.Listener></Link>
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