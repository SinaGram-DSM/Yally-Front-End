import React, { useEffect, useState, useCallback } from "react";
import * as M from "../../assets/style/UserPage/PageStyle";
import * as S from "../../assets/style/Main/AddTimeLine";
import { useHistory, useLocation } from "react-router-dom";
import PostItem from "../Main/PostItem";
import { getProfile, getMypage } from "../../lib/api/Profile";
import Header from "../Header/Header";
import { ErrorToast } from "../../lib/Toast";

const Profile = () => {
  const location = useLocation();
  const emailSplit = location.pathname.split("/");
  const email = emailSplit[2];
  const history = useHistory();
  let [name, setName] = useState("");
  let [isPost, setIsPost] = useState(true);
  let [data, setData] = useState({
    img: "",
    listening: 0,
    listener: 0,
  });
  let [timeLine, setTimeLine] = useState([]);
  let [page, setPage] = useState(1);
  let [isLoading, setIsLoading] = useState(false);

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
        setTimeLine(timeLine.concat(timeLine));
        setPage((state) => state + 1);
        setIsLoading(false);
      }, 500);
    }
  }, [isLoading]);

  useEffect(() => {
    getProfile(email)
      .then((res) => {
        setData({
          ...data,
          img: res.data.image,
          listening: res.data.listening,
          listener: res.data.listener,
        });

        setName(res.data.nickname);
      })
      .catch(() => {
        ErrorToast("프로필을 불러오는데 실패하였습니다.");
      });

    getMypage(email, page)
      .then((res) => {
        if (res.data.posts.length === 0) {
          setIsPost(false);
        }
        setTimeLine(res.data.posts);
      })
      .catch(() => {
        ErrorToast("프로필을 불러오는데 실패하였습니다.");
      });
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [infiniteScroll]);

  const userListening = () => {
    history.push(`/profile/${email}/listening/${data.listening}`);
  };

  const userListener = () => {
    history.push(`/profile/${email}/listener/${data.listener}`);
  };
  return (
    <div>
      <Header></Header>
      <S.mainContainer profile>
        <S.mainSection profile>
          <S.writerInfoBox profile>
            <S.profileImg
              profile
              src={process.env.REACT_APP_BASE_URL + data.img}
            ></S.profileImg>
            <M.ProfileData>
              <M.UserName>{name}</M.UserName>
              <M.Email>({email})</M.Email>
              <M.Listen>
                <M.Listening onClick={userListening}>
                  리스닝 {data.listening}
                </M.Listening>
                <M.Listener onClick={userListener}>
                  리스너 {data.listener}
                </M.Listener>
              </M.Listen>
            </M.ProfileData>
          </S.writerInfoBox>
        </S.mainSection>
      </S.mainContainer>
      {isPost ? (
        <></>
      ) : (
        <div>
          <p>아직 작성한 글이 없습니다.</p>
        </div>
      )}
      {timeLine.map((feed) => (
        <PostItem
          key={feed.id}
          id={feed.id}
          userImg={feed.user.img}
          nickname={feed.user.nickname}
          email={feed.user.email}
          content={feed.content}
          sound={feed.sound}
          date={feed.createdAt}
          isYally={feed.isYally}
          isComment={feed.comment}
          yallyNum={feed.yally}
          audioImg={feed.img}
          isMine={true}
        />
      ))}
    </div>
  );
};

export default Profile;
