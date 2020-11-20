import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as C from '../../assets/style/PostDetail/Comment'
import * as P from "../../assets/style/Main/PostItmes"
import { deleteIcon } from '../../assets/img'
import axios from 'axios'

const Comment = ({id, baseUrl, src, sound, nickname, date, content, userImg, deleteButtonStyle}) => {
    let soundStyle;
    const config = {
        headers : { 'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')}
    }

    if(sound == null)
    {
        soundStyle = 'none';
    }

    const onRemoveComment = async () => {
        await axios.delete(baseUrl + "post/comment/" + id, config)
        setTimeout(function() {
            window.location.reload();
          }, 300);
    }

    return (
            <S.mainContainer comment>
            <S.mainSection small>
                <C.commentBox>
                <S.profileImg src={src + userImg}></S.profileImg>
                    <C.div>
                        <C.commentInfo>
                            <C.commentWriter>{nickname}</C.commentWriter>
                            <C.commentDate>{date}</C.commentDate>
                            <P.Icon comment src={deleteIcon} style={{display : deleteButtonStyle}} onClick={onRemoveComment}></P.Icon>
                        </C.commentInfo>
                        <audio src={src + sound} style={{display : soundStyle}} controls></audio>
                        <C.contents>{content}</C.contents>
                    </C.div>
                </C.commentBox>
            </S.mainSection>
            </S.mainContainer>
    );
};

export default Comment;