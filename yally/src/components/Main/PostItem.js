import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes";
import { repl, deleteIcon } from '../../assets/img';
import { Link } from "react-router-dom";
import { onPostYally, offPostYally, deletePost } from "../../lib/api/post";
import yallyOn from '../../assets/img/yallyOn.png';
import yallyOff from '../../assets/img/yallyOff.png';
import AudioPlayer from './AudioPlayer';
const PostItem = ({email, id, date, nickname, isYally, yallyNum, isComment, content, sound, isMine, userImg, audioImg, setContent}) => {
    const [yallys, setYallys] = useState(yallyNum);
    const history = useHistory();
    let yallySrc;
    isYally ? yallySrc = yallyOn : yallySrc = yallyOff;
    const [onLike, setOnLike] = useState(yallySrc);
    
    let deleteButtonStyle = "";

    if(isMine === false)
    {
        deleteButtonStyle = "none";
    }

    const onYally = () => {
        if(isYally === false)
        {
            onPostYally(id)
            .then(() => {
                setYallys(state => state + 1);
                setOnLike(yallyOn);
            })
        }
        if(onLike === yallyOn)
        {
            offPostYally(id)
            .then(() => {
                setYallys(state => state - 1);
                setOnLike(yallyOff);
            })
        }
    }
    
    const onRemovePost = async () => {
        if(!window.confirm(`게시물을 삭제하시겠습니까?`)) return
        await deletePost(id)
        setTimeout(function() {
            window.location.reload();
          }, 200);
    }

    const onEditPost = () => {
        history.push({
            pathname : `/modify/${id}`
        })
        // window.scrollTo({top:0, left:0, behavior:'smooth'});
    }

    // let createdDate = date.split('-');
    // let day = createdDate[2];
    // day = day.split(' ')
    // createdDate = createdDate[0] + "년 " + createdDate[1] + "월 " +  day[0] + "일";
    
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
                    <S.profileImg src={process.env.REACT_APP_SRC_URL + userImg}></S.profileImg>
                </Link>
                    <P.postInfoBox>
                        <P.div>
                        <P.postNameInfo>{nickname}</P.postNameInfo>
                        <P.postDateInfo>{date}</P.postDateInfo>
                        </P.div>
                        <P.Icon delete src={deleteIcon} style={{display : isMine? "" : "none"}} onClick={onRemovePost}></P.Icon>
                        {/* <Modal text="게시물을 삭제하시겠습니까?" src={deleteIcon} ></Modal> */}
                    </P.postInfoBox>
               </P.postInfoContainer>
                <P.postSection>
                    <P.audioContainer>
                        <P.audioImg src={process.env.REACT_APP_SRC_URL + audioImg}></P.audioImg>
                        <P.postInfoContainer post>
                            <P.postArticle>
                                <P.postWritten>{content}</P.postWritten>
                                <P.playInfoBox>
                                    <AudioPlayer audio={process.env.REACT_APP_SRC_URL + sound} type="audio/mpeg"></AudioPlayer>
                                </P.playInfoBox>
                            </P.postArticle>
                        </P.postInfoContainer>
                    </P.audioContainer>
                </P.postSection>
                <P.reactionContainer>
                    <P.postInfoContainer>
                    <P.reactionBox>
                        <P.reactionIcon src={onLike} onClick={onYally}></P.reactionIcon>
                        <P.reactionCount>{yallys} 개</P.reactionCount>
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
                        <P.reactionCount>{isComment} 개</P.reactionCount>
                    </P.reactionBox>
                    </P.postInfoContainer>
                    <P.editButton style={{display : isMine? "" : "none"}} onClick={onEditPost}>수정</P.editButton>
                </P.reactionContainer>    
            </S.mainSection>
        </S.mainContainer>
    );
};

export default PostItem;