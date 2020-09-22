import React from 'react';
import * as C from '../../assets/style/PostDetail/Comment'
import * as S from "../../assets/style/Main/AddTimeLine";
import Comment from './Comment'

const CommentView = () => {
    return (
                <C.commentContainer>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                </C.commentContainer>
    );
};

export default CommentView;