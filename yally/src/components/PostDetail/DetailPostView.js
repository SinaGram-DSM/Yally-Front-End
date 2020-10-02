import React, { useState, useEffect } from 'react';
import DetailPost from './DetailPost'
import CommentView from './CommentView'
import Background from '../Global/Background'
import * as C from '../../assets/style/PostDetail/Comment'
import * as P from '../../assets/style/Main/PostItmes'
import * as S from '../../assets/style/Main/AddTimeLine'
import axios from 'axios'

const DetailPostView = ({location, id, src, baseUrl, deleteButtonStyle}) => {
    
    const [posts, setPosts] = useState({});
    const [h, setH] = useState({})
    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }
    useEffect(() => {
        axios.get(baseUrl + "post/" + location.state.id , config)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
            setH(res.data.user);
        })
        }, []);

    return (
        <P.div>
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
                    nickname = {h.nickname}
                    userImg = {h.img}
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