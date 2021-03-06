import React, { useState, useEffect, useCallback, useRef } from "react";
import AddPost from "../Main/AddPost";
import RecommendView from "../Main/RecommendView";
import PostItem from "../Main/PostItem";
import Background from "../Global/Background";
import NotFound from "./NotFound";
import Loader from "./Loader";
import { getTimeline } from "../../lib/api/timeline";
import { refreshToken } from "../../lib/api/user";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";

const TimeLineView = () => {
  const [contents, setContents] = useState();
  const [file, setFile] = useState();
  const [img, setImg] = useState();
  const [postId, setPostId] = useState();
  const [notPosts, setNotPosts] = useState();
  const [notFound, setNotFound] = useState(true);
  const [statusCode, setStatusCode] = useState();
  const [isScroll, setIsScroll] = useState(false);
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
      setIsScroll(true);
      setTimeout(function () {
        setPosts((state) => state.concat(state));
        setParams((state) => state + 1);
        setIsLoading(false);
        console.log(params);
      }, 500);
    }
  }, [isLoading, params]);

  useEffect(() => {
    getTimeline(params)
      .then((res) => {
        if (res.data.posts === "") {
          setNotPosts("더 이상 글이 없어요. 더 작성해보세요!");
          setIsScroll(false);
        } else if (posts === "" && res.data.posts === "") {
          setNotFound(false);
        } else {
          setNotFound(false);
          setPosts(res.data.posts);
          setIsLoading(true);
          setIsScroll(false);
        }
      })
      .catch((err) => {
        if (err.status === 403) {
          refreshToken();
        } else {
          if (err.status) {
            setStatusCode(err.status);
          } else setStatusCode("ERROR");
        }
      });
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [infiniteScroll]);

  return (
    <div
      style={{ position: "relative", backgroundColor: "#FDFDFD" }}
      ref={timelineBody}
    >
      <Header />
      <ToastContainer />
      {notFound ? (
        <NotFound status={statusCode} />
      ) : (
        <div>
          <AddPost
            editContent={contents}
            editFile={file}
            editImg={img}
            editPostId={postId}
          ></AddPost>
          <RecommendView />
          {posts.map((post) => (
            <PostItem
              email={post.user.email}
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
          <h2 style={{ textAlign: "center", color: "#707070" }}>
            {isScroll ? <Loader></Loader> : ""}
            {notPosts}
          </h2>
        </div>
      )}
      <Background></Background>
    </div>
  );
};

export default TimeLineView;
