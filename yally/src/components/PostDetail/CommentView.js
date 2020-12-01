import React, { useState, useEffect } from "react";
import * as C from "../../assets/style/PostDetail/Comment";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { getPostComment } from "../../api/post";

const CommentView = ({ id, deleteButtonStyle }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getPostComment(id).then((res) => {
      setComment(res.data.comments);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <C.commentContainer>
      {comment.map((c) => (
        <Comment
          deleteButtonStyle={deleteButtonStyle}
          id={c.id}
          key={c.id}
          content={c.content}
          sound={c.sound}
          date={c.createdAt}
          nickname={c.user.nickname}
          userImg={c.user.img}
        ></Comment>
      ))}
      <AddComment id={id}></AddComment>
    </C.commentContainer>
  );
};

export default CommentView;
