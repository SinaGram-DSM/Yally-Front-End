import React,{ useState, useEffect } from 'react';
import * as C from '../../assets/style/PostDetail/Comment'
import * as S from "../../assets/style/Main/AddTimeLine";
import Comment from './Comment'
import AddComment from './AddComment';
import axios from 'axios';

const CommentView = ({src, baseUrl, id, deleteButtonStyle}) => {
    const [comment, setComment] = useState([]);
    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }

    useEffect(() => { 
        axios.get(baseUrl + "post/" + id + "/comment", config)
        .then((res) => {
            console.log(res);
            setComment(res.data.comments)
        })
         }, []);
    return (
                <C.commentContainer>
                    {comment.map((c) => (
                        <Comment
                        deleteButtonStyle = {deleteButtonStyle}
                        src = {src}
                        id = {c.id}
                        key={c.id}
                        content = {c.content}
                        sound = {c.sound}
                        date = {c.createdAt}
                        nickname = {c.user.nickname}
                        userImg = {c.user.img}
                        baseUrl = {baseUrl}
                        ></Comment>
                    ))}
                    <AddComment baseUrl={baseUrl} id={id}></AddComment>
                </C.commentContainer>
    );
};

export default CommentView;