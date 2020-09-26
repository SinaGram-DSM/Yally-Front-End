import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes"
import { playButton, yallyOff, repl } from '../../assets/img'

const PostItem = () => {
    return (
        <S.mainContainer>
            <S.mainSection>
                <P.postInfoContainer>
                    <S.profileImg>
                    </S.profileImg>
                    <P.postInfoBox>
                        <P.postNameInfo>대충어떤닉네임</P.postNameInfo>
                        <P.postDateInfo>2020년 1월 1일</P.postDateInfo>
                    </P.postInfoBox>
                    
               </P.postInfoContainer>
                <P.postSection>
                    <P.postArticle>
                        <P.postWritten>글 작성 어쩌구저쩌구~~ #첫게시물 #LIKE #얄리</P.postWritten>
                        <P.playInfoBox>
                            <P.Icon src={playButton}></P.Icon>
                        </P.playInfoBox>
                        
                    </P.postArticle>
                </P.postSection>
                <P.reactionContainer>
                    <P.reactionBox>
                        <P.reactionIcon src={yallyOff}></P.reactionIcon>
                        <P.reactionCount>19개</P.reactionCount>
                    </P.reactionBox>
                    <P.reactionBox>
                        <P.reactionIcon src={repl}></P.reactionIcon>
                        <P.reactionCount>21개</P.reactionCount>
                    </P.reactionBox>
                </P.reactionContainer>    
            </S.mainSection>
        </S.mainContainer>
    );
};

export default PostItem;