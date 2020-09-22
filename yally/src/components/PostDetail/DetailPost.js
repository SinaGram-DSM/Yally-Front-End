import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes"
import { playButton, yallyOff, repl, deleteIcon } from '../../assets/img'

const PostItem = () => {
    return (
            <P.div>
                <P.postInfoContainer>
                    <S.profileImg>
                    </S.profileImg>
                    <P.postInfoBox>
                        <P.postNameInfo>대충어떤닉네임</P.postNameInfo>
                        <P.playInfoBox>
                            <P.postDateInfo>2020년 1월 1일 00:00</P.postDateInfo>
                            <P.Icon src={deleteIcon} delete></P.Icon>
                        </P.playInfoBox>
                        
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
                
                <P.reactionContainer detailPost>
                    <P.reactionBox>
                        <P.reactionIcon src={yallyOff}></P.reactionIcon>
                        <P.reactionCount>19개</P.reactionCount>
                    </P.reactionBox>
                    <P.reactionBox>
                        <P.reactionIcon src={repl}></P.reactionIcon>
                        <P.reactionCount>21개</P.reactionCount>
                    </P.reactionBox>
                </P.reactionContainer>   
                
            </P.div>
    );
};

export default PostItem;