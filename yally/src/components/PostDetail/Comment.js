import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as C from '../../assets/style/PostDetail/Comment'

const Comment = ({src, sound, nickname, date, content, userImg}) => {
    console.log(content)
    return (
            <S.mainContainer detailPost>
            <S.mainSection small>
                <C.commentBox>
                <S.profileImg src={src + userImg}></S.profileImg>
                    <C.div>
                        <C.commentInfo>
                            <C.commentWriter>{nickname}</C.commentWriter>
                            <C.commentDate>{date}</C.commentDate>
                        </C.commentInfo>
                        <C.contents>{content}</C.contents>
                    </C.div>
                </C.commentBox>
            </S.mainSection>
            </S.mainContainer>
    );
};

export default Comment;