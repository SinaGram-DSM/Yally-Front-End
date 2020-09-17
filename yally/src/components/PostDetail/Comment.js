import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as C from '../../assets/style/PostDetail/Comment'

const Comment = () => {
    return (
        <S.mainContainer small>
            <S.mainSection small>
                <C.commentBox>
                <S.profileImg></S.profileImg>
                    <C.div>
                        <C.commentInfo>
                            <C.commentWriter>뫙뫙</C.commentWriter>
                            <C.commentDate>2019년 1월 1일 00:04</C.commentDate>
                        </C.commentInfo>
                        <C.contents>이렇게 쓰면 댓글이 된다네요</C.contents>
                    </C.div>
                </C.commentBox>
            </S.mainSection>          
        </S.mainContainer>
    );
};

export default Comment;