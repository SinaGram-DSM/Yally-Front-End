import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes"
import { playButton, yallyOff, repl } from '../../assets/img'

const PostItem = ({date, nickname, isYally, isComment, content, sound, isMine, userImg, audioImg}) => {
    const src = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/"
    
    return (
        <S.mainContainer>
            <S.mainSection>
                <P.postInfoContainer>
                    <S.profileImg src={src + userImg}></S.profileImg>
                    <P.postInfoBox>
                        <P.postNameInfo>{nickname}</P.postNameInfo>
                        <P.postDateInfo>{date}</P.postDateInfo>
                    </P.postInfoBox>
                    
               </P.postInfoContainer>
                <P.postSection>
                    <img src={src + audioImg}></img>
                    <P.postArticle>
                        <P.postWritten>{content}</P.postWritten>
                        <P.playInfoBox>
                            <P.Icon src={playButton}></P.Icon>
                        </P.playInfoBox>
                    </P.postArticle>
                </P.postSection>
                <P.reactionContainer>
                    <P.reactionBox>
                        <P.reactionIcon src={yallyOff}></P.reactionIcon>
                        <P.reactionCount>{isYally}</P.reactionCount>
                    </P.reactionBox>
                    <P.reactionBox>
                        <P.reactionIcon src={repl}></P.reactionIcon>
                        <P.reactionCount>{isComment}</P.reactionCount>
                    </P.reactionBox>
                </P.reactionContainer>    
            </S.mainSection>
        </S.mainContainer>
    );
};

export default PostItem;