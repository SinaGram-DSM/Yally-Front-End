import React, { useState } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes";
import { repl, deleteIcon } from '../../assets/img';
import { Link } from "react-router-dom";
import axios from 'axios';
import yallyOn from '../../assets/img/yallyOn.png';
import yallyOff from '../../assets/img/yallyOff.png';
import Modal from '../Global/Modal';
import AudioPlayer from './AudioPlayer';
import { refresh } from '../../constant';

const PostItem = ({email, baseUrl, id, date, nickname, isYally, yallyNum, isComment, content, sound, isMine, userImg, audioImg, setContent}) => {
    
    const src = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";
    let yallySrc = yallyOn;
    if(isYally === true)
    {
        yallySrc = yallyOn;
    }

    else
    {
        yallySrc = yallyOff;
    }

    const [onLike, setOnLike] = useState(yallySrc);

    let deleteButtonStyle = "";
    const config = {
        headers : { 'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')}
    }
    if(isMine === false)
    {
        deleteButtonStyle = "none";
    }

    const onYally = () => {
        if(isYally === false)
        {
            axios.get(baseUrl + "post/yally/" + id, config)
            setOnLike(yallyOn);
        }
        else
        {
            axios.delete(baseUrl + "post/yally/" +  id, config)
            setOnLike(yallyOff);
        }
    }
    
    const onRemovePost = async () => {
        await axios.delete(baseUrl + "post/" + id, config)
        setTimeout(function() {
            window.location.reload();
          }, 200);
    }

    const onEditPost = () => {
        setContent(content, sound, audioImg, id);
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    }

    let createdDate = date.split('-');
    let day = createdDate[2];
    day = day.split(' ')
    createdDate = createdDate[0] + "년 " + createdDate[1] + "월 " +  day[0] + "일";
    
    return (
        <S.mainContainer>
            <S.mainSection>
                <P.postInfoContainer>
                <Link style={{textDecoration : "none"}} to={{
                pathname : `/profile/${email}`,
                state : {
                    email
                }
                }}>
                    <S.profileImg src={src + userImg}></S.profileImg>
                </Link>
                    <P.postInfoBox>
                        <P.div>
                        <P.postNameInfo>{nickname}</P.postNameInfo>
                        <P.postDateInfo>{createdDate}</P.postDateInfo>
                        </P.div>
                        <P.Icon delete src={deleteIcon} style={{display : isMine? "" : "none"}} onClick={onRemovePost}></P.Icon>
                        {/* <Modal text="게시물을 삭제하시겠습니까?" src={deleteIcon} ></Modal> */}
                    </P.postInfoBox>
               </P.postInfoContainer>
                <P.postSection>
                    <P.audioContainer>
                        <P.audioImg src={src + audioImg}></P.audioImg>
                        <P.postInfoContainer post>
                            <P.postArticle>
                                <P.postWritten>{content}</P.postWritten>
                                <P.playInfoBox>
                                    <AudioPlayer audio={src + sound} type="audio/mpeg"></AudioPlayer>
                                </P.playInfoBox>
                            </P.postArticle>
                        </P.postInfoContainer>
                    </P.audioContainer>
                </P.postSection>
                <P.reactionContainer>
                    <P.postInfoContainer>
                    <P.reactionBox>
                        <P.reactionIcon src={onLike} onClick={onYally}></P.reactionIcon>
                        <P.reactionCount>{yallyNum}</P.reactionCount>
                    </P.reactionBox>
                    <P.reactionBox>
                        <Link style={{textDecoration : "none"}} to={{
                        pathname : `/post/${id}`,
                        state : {
                            id, deleteButtonStyle
                        }
                        }}>
                        <P.reactionIcon src={repl}></P.reactionIcon>
                        </Link>
                        <P.reactionCount>{isComment}</P.reactionCount>
                    </P.reactionBox>
                    </P.postInfoContainer>
                    <P.editButton style={{display : isMine? "" : "none"}} onClick={onEditPost}>수정</P.editButton>
                </P.reactionContainer>    
            </S.mainSection>
        </S.mainContainer>
    );
};

export default PostItem;