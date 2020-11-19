import React, { useEffect, useState, useCallback } from "react";
import * as M from "../../assets/style/UserPage/PageStyle";
import * as S from "../../assets/style/Main/AddTimeLine";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import PostItem from "../Main/PostItem";

const Profile = ({ props, baseUrl }) => {
  const email = props.match.params.email;
  const history = useHistory();
  const imgUrl = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";
  let [name, setName] = useState("");
  // let [image, setImage] = useState('');
  let [data, setData] = useState({
    img: "",
    listening: 0,
    listener: 0,
  });
  let [timeLine, setTimeLine] = useState([]);
  let [page, setPage] = useState(1);
  let [isLoading, setIsLoading] = useState(false);

  const config = {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  };

  const feedConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
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
        setTimeLine(timeLine.concat(timeLine));
        setPage((state) => state + 1);
        setIsLoading(false);
        console.log(page);
      }, 500);
    }
  }, [isLoading]);

  useEffect(() => {
    axios
      .get(baseUrl + "profile/" + email, config)

      .then((res) => {
        setData({
          ...data,
          img: res.data.image,
          listening: res.data.listening,
          listener: res.data.listener,
        });

        setName(res.data.nickname);
        console.log(res.data.image);
      });

    axios
      .get(baseUrl + "mypage/timeline/" + email + "/" + page, feedConfig)
      .then((res) => {
        setTimeLine(res.data.posts);
        console.log(res.data.posts);
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
      <S.mainContainer profile>
        <S.mainSection profile>
          <S.writerInfoBox profile>
            <S.profileImg profile src={imgUrl + data.img}></S.profileImg>
            <M.ProfileData>
              <M.UserName>{name}</M.UserName>
              <M.Email>(dehaan@hansome.kr)</M.Email>
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
          isComment={feed.commentCount}
          yallyNum={feed.yallyCount}
          audioImg={feed.img}
        />
      ))}
    </div>
  );
};

export default Profile;
