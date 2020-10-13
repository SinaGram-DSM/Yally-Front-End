import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes"
import { playButton, repl, deleteIcon } from '../../assets/img'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import yallyOn from '../../assets/img/yallyOn.png'
import yallyOff from '../../assets/img/yallyOff.png'

const DetailPost = ({baseUrl, id, src, date, nickname, isYally, yallyNum, isComment, content, sound, isMine, userImg, audioImg}) => {
     let deleteButtonStyle = "";
    let yallyButton = "";
    const history = useHistory();
    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }

    if(isYally === true)
    {
        yallyButton = yallyOn;
    }
    else
    {
        yallyButton = yallyOff;
    }

    const onYally = () => {
        if(isYally === false)
        {
            axios.get(baseUrl + "post/yally/" + id, config)
            setTimeout(function() {
                window.location.reload();
              }, 300);
        }
        else
        {
            axios.delete(baseUrl + "post/yally/" +  id, config)
            setTimeout(function() {
                window.location.reload();
              }, 300);
        }
    }

    const onRemovePost = async () => {
        await axios.delete(baseUrl + "post/" + id, config)
        history.push({
            pathname: "/timeLine"
        })
    }

    return (
            <P.div>
                <P.postInfoContainer>
                    <S.profileImg src={src + userImg}></S.profileImg>
                    <P.postInfoBox>
                        <P.div>
                        <P.postNameInfo>{nickname}</P.postNameInfo>
                        <P.playInfoBox>
                            <P.postDateInfo>{date}</P.postDateInfo>
                            <P.Icon delete src={deleteIcon} style={{display : deleteButtonStyle}} onClick={onRemovePost}></P.Icon>
                        </P.playInfoBox>
                        </P.div> 
                        <Link to="/timeline" style={{textDecoration : "none"}}><P.reactionCount>메인으로</P.reactionCount></Link>
                    </P.postInfoBox>
               </P.postInfoContainer>

               <P.postSection>
                    <P.audioContainer>
                        <P.audioImg src={src + audioImg}></P.audioImg>
                        <P.postInfoContainer post>
                            <P.postArticle>
                                <P.postWritten>{content}</P.postWritten>
                                <P.playInfoBox>
                                    <P.Icon src={playButton}></P.Icon>
                                </P.playInfoBox>
                            </P.postArticle>
                        </P.postInfoContainer>
                    </P.audioContainer>
                </P.postSection>
                
                <P.reactionContainer detailPost>
                    <P.reactionBox>
                        <P.reactionIcon src={yallyButton} onClick={onYally}></P.reactionIcon>
                        <P.reactionCount>{yallyNum}</P.reactionCount>
                    </P.reactionBox>
                    <P.reactionBox>
                        <P.reactionIcon src={repl}></P.reactionIcon>
                        <P.reactionCount>{isComment}</P.reactionCount>
                    </P.reactionBox>
                </P.reactionContainer>   
            </P.div>
    );
};

export default DetailPost;