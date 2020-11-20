import React,{ useState, useEffect } from 'react';
import * as C from '../../assets/style/PostDetail/Comment'
import Comment from './Comment'
import AddComment from './AddComment';
import axios from 'axios';

const CommentView = ({src, baseUrl, id, deleteButtonStyle}) => {
    const [comment, setComment] = useState([]);
    const config = {
        headers : { 'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')}
    }

    useEffect(() => { 
        axios.get(baseUrl + "post/" + id + "/comment", config)
        .then((res) => {
            setComment(res.data.comments)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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