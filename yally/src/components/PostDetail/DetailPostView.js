import React, { useState, useEffect } from "react";
import DetailPost from "./DetailPost";
import CommentView from "./CommentView";
import Background from "../Global/Background";
import * as P from "../../assets/style/Main/PostItmes";
import * as S from "../../assets/style/Main/AddTimeLine";
import { useLocation } from "react-router-dom";
import { getDetailPost } from "../../lib/api/post";

const DetailPostView = ({ deleteButtonStyle }) => {
  const location = useLocation();
  const [posts, setPosts] = useState({});
  const [users, setUsers] = useState({});
  
  useEffect(() => {
    console.log();
    window.scrollTo({ top: 0, left: 0 });
    getDetailPost(location.state.id).then((res) => {
      setPosts(res.data);
      setUsers(res.data.user);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <P.div>
      <S.mainContainer>
        <S.mainSection>
          <DetailPost
            id={location.state.id}
            deleteButtonStyle={deleteButtonStyle}
            key={posts.id}
            content={posts.content}
            sound={posts.sound}
            date={posts.createdAt}
            nickname={users.nickname}
            userImg={users.img}
            audioImg={posts.img}
            isComment={posts.comment}
            isYally={posts.isYally}
            yallyNum={posts.yally}
            isMine={posts.isMine}
          ></DetailPost>
          <CommentView
            deleteButtonStyle={deleteButtonStyle}
            id={location.state.id}
          ></CommentView>
        </S.mainSection>
      </S.mainContainer>
      <Background></Background>
    </P.div>
  );
};

export default DetailPostView;
