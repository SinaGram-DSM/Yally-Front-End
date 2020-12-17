import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as H from "../../assets/style/Header/HeaderStyle";
import * as P from "../../assets/style/Main/AddTimeLine";
import * as T from "../../assets/style/UserPage/Listen";
import PostItem from "../Main/PostItem";
import { yallyLogo, search, moreButton } from "../../assets/img";
import Users from "../Search/Users";
import { useEffect } from "react";
import { getTimelineInfo } from "../../lib/api/timeline";

const Header = ({ baseUrl }) => {
  let [value, setValue] = useState("");
  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);
  let [page, setPage] = useState(1);
  let [isLoading, setIsLoading] = useState(false);
  let [name, setName] = useState("");
  let [img, setImg] = useState("");
  let [email, setEmail] = useState("");
  const history = useHistory();

  const menu = document.getElementById("menu");

  const valueChange = (e) => {
    setValue(e.target.value);
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
        setUsers(users.concat(users));
        setPage((state) => state + 1);
        setIsLoading(false);
        console.log(page);
      }, 500);
    }
  }, [isLoading, page, posts, users]);

  useEffect(() => {
    getTimelineInfo().then((res) => {
      setName(res.data.info.nickname);
      setImg(res.data.info.img);
      setEmail(res.data.info.email);
    });
    setIsLoading(true);
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [infiniteScroll]);

  const searchBtn = () => {
    if (value.charAt(0) === "#") {
      history.push({
        pathname: "/search/posts",
      });
      const values = value.substr(1);
      setValue(values);
      console.log(values);
      const tagSearch = () => {
        tagSearch(values, page).then((res) => {
          setPosts(res.data.posts);
        });
      };
      tagSearch();
    } else if (value.charAt(0) === "@") {
      history.push({
        pathname: "/search/users",
      });
      const values = value.substr(1);
      setValue(values);
      const userSearch = () => {
        userSearch(values, page).then((res) => {
          setUsers(res.data.users);
          console.log(res.data.users);
        });
      };
      userSearch();
    } else alert("잘못된 검색입니다.");
  };

  const profileClick = () => {
    if (menu.style.display === "none") menu.style.display = "block";
    else menu.style.display = "none";
  };

  const inputFocus = () => {
    let input = document.getElementById("inputBox");
    input.style.visibility = "visible";
  };
  const onLogout = () => {
    menu.style.display = "none";
    history.push({
      pathname: "/",
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const onTimeline = () => {
    history.push({
      pathname: "/timeline",
    });
  };
  const setting = () => {
    menu.style.display = "none";
    console.log(name, img);
    history.push({
      pathname: "/settings",
      state: {
        name: name,
        img: img,
      },
    });
  };

  return (
    <H.container>
    <H.OutHeader>
      <H.HeaderContainer>
        <H.logoSection>
          <H.logoImg src={yallyLogo} onClick={onTimeline}></H.logoImg>
        </H.logoSection>
        <H.inputContainer onClick={inputFocus}>
          <H.inputBoxContainer>
            <H.inputBox
              onChange={valueChange}
              id="inputBox"
              mouseOver
            ></H.inputBox>
          </H.inputBoxContainer>
        </H.inputContainer>
        <H.searchIcon src={search} onClick={searchBtn} />
        <H.imgContainer>
          <P.profileImg header onClick={profileClick} src={process.env.REACT_APP_SRC_URL + img} />
          <H.moreBtn src={moreButton} onClick={profileClick} />
        </H.imgContainer>
        <H.menuBox id="menu" style={{ display: "none" }}>
          <P.profileImg menu src={process.env.REACT_APP_SRC_URL + img} />
          <H.textContainer>
            <H.menuText name>{name}</H.menuText>
            <H.menuText email>{email}</H.menuText>
            <H.menuText setting onClick={setting}>
              계정 설정
            </H.menuText>
            <H.menuText logout onClick={onLogout}>
              로그아웃
            </H.menuText>
          </H.textContainer>
        </H.menuBox>
      </H.HeaderContainer>
      <T.listenSection>
        {users.map((user) => (
          <Users
            id={user.id}
            email={user.email}
            img={user.img}
            nickname={user.nickname}
            listening={user.listening}
            listener={user.listener}
            isListening={user.isListening}
            baseUrl={baseUrl}
          />
        ))}
      </T.listenSection>
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
        ></PostItem>
      ))}
    </H.OutHeader>
    </H.container>
  );
};

export default Header;
