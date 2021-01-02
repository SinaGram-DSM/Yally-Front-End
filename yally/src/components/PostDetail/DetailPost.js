import React from "react";
import * as S from "../../assets/style/Main/AddTimeLine";
import * as P from "../../assets/style/Main/PostItmes";
import { repl, deleteIcon } from "../../assets/img";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import yallyOn from "../../assets/img/yallyOn.png";
import yallyOff from "../../assets/img/yallyOff.png";
import AudioPlayer from "../Main/AudioPlayer";
import { deletePost, onPostYally, offPostYally } from "../../lib/api/post";

const DetailPost = ({
  id,
  date,
  nickname,
  isYally,
  yallyNum,
  isComment,
  content,
  sound,
  isMine,
  userImg,
  audioImg,
}) => {
  let deleteButtonStyle = "";
  let yallyButton = "";
  const history = useHistory();

  if(isMine === false) deleteButtonStyle = "none";

  if (isYally === true) {
    yallyButton = yallyOn;
  } else {
    yallyButton = yallyOff;
  }

  const onYally = () => {
    if (isYally === false) {
      onPostYally(id);
      setTimeout(function () {
        window.location.reload();
      }, 300);
    } else {
      offPostYally(IDBCursor)
      setTimeout(function () {
        window.location.reload();
      }, 300);
    }
  };

  const onRemovePost = async () => {
    if(!window.confirm(`게시물을 삭제하시겠습니까?`)) return
    await deletePost(id);
    history.push({
      pathname: "/timeLine",
    });
  };

  return (
    <P.div>
      <P.postInfoContainer>
        <S.profileImg src={process.env.REACT_APP_SRC_URL + userImg}></S.profileImg>
        <P.postInfoBox>
          <P.div>
            <P.postNameInfo>{nickname}</P.postNameInfo>
            <P.playInfoBox>
              <P.postDateInfo>{date}</P.postDateInfo>
              <P.Icon
                delete
                src={deleteIcon}
                style={{ display: deleteButtonStyle }}
                onClick={onRemovePost}
              ></P.Icon>
            </P.playInfoBox>
          </P.div>
          <Link to="/timeline" style={{ textDecoration: "none" }}>
            <P.reactionCount>메인으로</P.reactionCount>
          </Link>
        </P.postInfoBox>
      </P.postInfoContainer>

      <P.postSection>
        <P.audioContainer>
          <P.audioImg src={process.env.REACT_APP_SRC_URL + audioImg}></P.audioImg>
          <P.postInfoContainer post>
            <P.postArticle>
              <P.postWritten>{content}</P.postWritten>
              <P.playInfoBox>
                <AudioPlayer audio={process.env.REACT_APP_SRC_URL + sound}></AudioPlayer>
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
