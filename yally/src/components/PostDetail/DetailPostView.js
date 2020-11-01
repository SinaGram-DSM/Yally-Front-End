import React, { useState, useEffect } from 'react';
import DetailPost from './DetailPost'
import CommentView from './CommentView'
import Background from '../Global/Background'
import * as C from '../../assets/style/PostDetail/Comment'
import * as P from '../../assets/style/Main/PostItmes'
import * as S from '../../assets/style/Main/AddTimeLine'
import axios from 'axios'
import Header from '../Header/Header';

const DetailPostView = ({location, id, src, baseUrl, deleteButtonStyle}) => {
    
    const [posts, setPosts] = useState({});
    const [users, setUsers] = useState({})
    const config = {
        headers : { 'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')}
    }
    useEffect(() => {
        window.scrollTo({top:0, left:0})
        axios.get(baseUrl + "post/" + location.state.id , config)
        .then((res) => {
            setPosts(res.data);
            setUsers(res.data.user);
        })
        }, []);

    return (
        <P.div>
            <Header></Header>
            <S.mainContainer>
                <S.mainSection>
                    <DetailPost 
                    id = {location.state.id}
                    baseUrl= {baseUrl}
                    deleteButtonStyle = {deleteButtonStyle}
                    src={src}
                    key={posts.id}
                    content = {posts.content}
                    sound = {posts.sound}
                    date = {posts.createdAt}
                    nickname = {users.nickname}
                    userImg = {users.img}
                    audioImg = {posts.img}
                    isComment = {posts.comment}
                    isYally = {posts.isYally}
                    yallyNum = {posts.yally}
                    isMine = {posts.isMine}
                    ></DetailPost>
                <CommentView deleteButtonStyle={deleteButtonStyle} src={src} baseUrl={baseUrl} id={location.state.id}></CommentView>
                </S.mainSection>
            </S.mainContainer>
            <Background></Background> 
        </P.div>
    );
};

export default DetailPostView;