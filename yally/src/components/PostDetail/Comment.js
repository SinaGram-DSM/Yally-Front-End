import React from "react";
import * as S from "../../assets/style/Main/AddTimeLine";
import * as C from "../../assets/style/PostDetail/Comment";
import * as P from "../../assets/style/Main/PostItmes";
import { deleteIcon } from "../../assets/img";
import { deleteComment } from "../../lib/api/post";

const Comment = ({
  id,
  sound,
  nickname,
  date,
  content,
  userImg,
  deleteButtonStyle,
}) => {
  let soundStyle;

  if (sound == null) {
    soundStyle = "none";
  }

  const onRemoveComment = async () => {
    await deleteComment(id);
    setTimeout(function () {
      window.location.reload();
    }, 300);
  };

  return (
    <S.mainContainer comment>
      <S.mainSection small>
        <C.commentBox>
          <S.profileImg src={process.env.REACT_APP_SRC_URL + userImg}></S.profileImg>
          <C.div>
            <C.commentInfo>
              <C.commentWriter>{nickname}</C.commentWriter>
              <C.commentDate>{date}</C.commentDate>
              <P.Icon
                comment
                src={deleteIcon}
                style={{ display: deleteButtonStyle }}
                onClick={onRemoveComment}
              ></P.Icon>
            </C.commentInfo>
            <audio
              src={process.env.REACT_APP_SRC_URL + sound}
              style={{ display: soundStyle }}
              controls
            ></audio>
            <C.contents>{content}</C.contents>
          </C.div>
        </C.commentBox>
      </S.mainSection>
    </S.mainContainer>
  );
};

export default Comment;
