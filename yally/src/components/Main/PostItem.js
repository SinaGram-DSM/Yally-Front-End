import React, { useState } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes"
import { playButton, repl, deleteIcon } from '../../assets/img'
import { Link } from "react-router-dom";
import axios from 'axios'
import yallyOn from '../../assets/img/yallyOn.png'
import yallyOff from '../../assets/img/yallyOff.png'

const PostItem = ({email, baseUrl, id, date, nickname, isYally, yallyNum, isComment, content, sound, isMine, userImg, audioImg}) => {
    const src = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/"
    const [onLike, setOnLike] = useState(yallyOff);
    const [onAudio, setOnAudio] = useState(true);
    const audio = new Audio(src + sound);
    let deleteButtonStyle = "";
    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }
    if(isMine === false)
    {
        deleteButtonStyle = "none"
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
        
    }

    const onAudioPlay = () => {
        audio.play();
        console.log('hi', sound);
        setOnAudio(false);
    }

    const offAudioPlay = () => {
        audio.pause();
        audio.currentTime = 0;
        setOnAudio(true);
        console.log('bye', sound);
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
                        <P.Icon delete src={deleteIcon} style={{display : deleteButtonStyle}} onClick={onRemovePost}></P.Icon>
                    </P.postInfoBox>
               </P.postInfoContainer>
               {/* <Link style={{textDecoration : "none"}} to={{
                pathname : `/post/${id}`,
                state : {
                    id, deleteButtonStyle
                }
                }}> */}
                <P.postSection>
                    <P.audioContainer>
                        <P.audioImg src={src + audioImg}></P.audioImg>
                        <P.postInfoContainer post>
                            <P.postArticle>
                                <P.postWritten>{content}</P.postWritten>
                                <P.playInfoBox>
                                    {/* <audio controls src={src + sound} id="audio"></audio> */}
                                    <P.audioTimeContainer id="timeline">
                                        <P.audioHandle id="handle"></P.audioHandle>
                                    </P.audioTimeContainer>
                                    <P.Icon src={playButton} onClick={onAudio? onAudioPlay : offAudioPlay}></P.Icon>
                                </P.playInfoBox>
                            </P.postArticle>
                        </P.postInfoContainer>
                    </P.audioContainer>
                </P.postSection>
                {/* </Link> */}
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
                    <P.editButton onClick={onEditPost}>수정</P.editButton>
                </P.reactionContainer>    
            </S.mainSection>
        </S.mainContainer>
    );
};

export default PostItem;