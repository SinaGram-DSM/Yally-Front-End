import React from 'react';
import * as F from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItems";
import { playButton, yallyOff, repl } from '../../assets/img'
const MyFeed = () => {
    return(
        <F.mainContainer>
        <F.mainSection feed>
            <P.postInfoContainer>
                <F.profileImg>
                </F.profileImg>
                <P.postInfoBox>
                    <P.postNameInfo>데인 드한</P.postNameInfo>
                    <P.postDateInfo>2020년 1월 1일</P.postDateInfo>
                </P.postInfoBox>
                
           </P.postInfoContainer>
            <P.postSection>
                <P.postArticle>
                    <P.postWritten>글 작성 어쩌구저쩌구~~ #첫게시물 #LIKE #얄리</P.postWritten>
                    <P.playInfoBox>
                        <P.playIcon src={playButton}></P.playIcon>
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
        </F.mainSection>
    </F.mainContainer>
    )
}

export default MyFeed;