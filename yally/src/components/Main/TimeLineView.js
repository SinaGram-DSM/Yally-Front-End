import React, { useState, useEffect, useCallback, useRef } from "react";
import { refresh } from '../../constant';
import AddPost from "../Main/AddPost";
import RecommendView from "../Main/RecommendView";
import PostItem from "../Main/PostItem";
import Background from "../Global/Background";
import Header from "../Header/Header";
import axios from "axios";
import * as S from "../../assets/style/Main/AddTimeLine";

const TimeLineView = ({ src, baseUrl }) => {
  const [contents, setContents] = useState();
  const [file, setFile] = useState();
  const [img, setImg] = useState();
  const [postId, setPostId] = useState();
  const [notPosts, setNotPosts] = useState();
  const timelineBody = useRef(null);

  const setContent = (content, file, img, id) => {
    setContents(content);
    setFile(file);
    setImg(img);
    setPostId(id);
  };

  const [posts, setPosts] = useState([]);
  const [params, setParams] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const config = {
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem('accessToken'),
    },
  };

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight && isLoading === true) {
      setTimeout(function () {
        setPosts(posts.concat(posts));
        setParams((state) => state + 1);
        setIsLoading(false);
        console.log(params);
      }, 500);
    }
  }, [isLoading]);

  useEffect(() => {
    axios.get(baseUrl + "timeline/" + params, config).then((res) => {
        if(res.data.posts == '') {
            setNotPosts("더이상 글이 없어요. 더 작성해보세요!");
        }
        else {
            setPosts(res.data.posts);
            setIsLoading(true);
        }
    })
    .catch((err) => {
        if(err.status === 403) {
            refresh();
        }
    })
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [infiniteScroll]);

  return (
    <div
      style={{ position: "relative", backgroundColor: "#FDFDFD" }}
      ref={timelineBody}
    >
    <S.mainContainer>
        <Header></Header>
    </S.mainContainer>
      <AddPost
        src={src}
        baseUrl={baseUrl}
        editContent={contents}
        editFile={file}
        editImg={img}
        editPostId={postId}
      ></AddPost>
      <RecommendView src={src} baseUrl={baseUrl}></RecommendView>
      {posts.map((post) => (
        <PostItem
          email={post.user.email}
          baseUrl={baseUrl}
          key={post.id}
          id={post.id}
          content={post.content}
          sound={post.sound}
          date={post.createdAt}
          nickname={post.user.nickname}
          userImg={post.user.img}
          audioImg={post.img}
          isComment={post.comment}
          isYally={post.isYally}
          yallyNum={post.yally}
          isMine={post.isMine}
          setContent={setContent}
        ></PostItem>
      ))}
        <h2 style={{textAlign : "center", color : "#707070"}}>{isLoading? "Loading..." : ""}{notPosts}</h2>
      <Background></Background>
    </div>
  );
};

export default TimeLineView;
