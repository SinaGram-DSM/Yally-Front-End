import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import axios from "axios";
import * as H from "../../assets/style/Header/HeaderStyle";
import * as P from "../../assets/style/Main/AddTimeLine";
import * as M from "../../assets/style/Main/AddTimeLine";
import * as T from "../../assets/style/UserPage/Listen";
import PostItem from "../Main/PostItem";
import { yallyLogo, search, moreButton } from "../../assets/img";
import Users from "../Search/Users";
import { useEffect } from "react";

const Header = ({ baseUrl }) => {
  let [value, setValue] = useState("");
  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);
  let [searchUrl, setUrl] = useState("");
  let [page, setPage] = useState(1);
  let [isLoading, setIsLoading] = useState(false);
  let [name, setName] = useState("");
  let [img, setImg] = useState("");
  let [email, setEmail] = useState("");

  const imgSrc = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";
  const history = useHistory();


    const valueChange = (e) => {
        setValue(e.target.value)
    }
    
    const config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    }


  const config = {
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
        setPosts(posts.concat(posts));
        setUsers(users.concat(users));
        setPage((state) => state + 1);
        setIsLoading(false);
        console.log(page);
      }, 500);
    }
  }, [isLoading]);

  useEffect(() => {
    axios.get(baseUrl + "/timeline", config).then((res) => {
      setName(res.data.info.nickname);
      setImg(res.data.info.img);
      setEmail(res.data.info.email);
    });
    setIsLoading(true);
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [infiniteScroll]);

  const searchBtn = () => {
    if (value.charAt(0) == "#") {
      history.push({
        pathname: "/search/posts",
      });
      const values = value.substr(1);
      setValue(values);
      console.log(values);
      const tagSearch = () => {
        axios
          .get(
            baseUrl + "/search/post?hashtag=" + values + "&page=" + page,
            config
          )
          .then((res) => {
            setPosts(res.data.posts);
            console.log(res.data);
          });
      };
      tagSearch();
    } else if (value.charAt(0) == "@") {
      history.push({
        pathname: "/search/users",
      });
      const values = value.substr(1);
      setValue(values);
      const userSearch = () => {
        axios
          .get(
            baseUrl + "/search/user?nickname=" + values + "&page=" + page,
            config
          )
          .then((res) => {
            setUsers(res.data.users);
          });
      };
      userSearch();
    } else alert("잘못된 검색입니다.");
  };

  const profileClick = () => {
    let menu = document.getElementById("menu");
    if (menu.style.display == "none") menu.style.display = "block";
    else menu.style.display = "none";
  };

  const inputFocus = () => {
    let input = document.getElementById("inputBox");
    input.style.visibility = "visible";
  };
    const onLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

  return (
    <div style={{ backgroundColor: "#FDFDFD", width: "59.88rem" }}>
      <H.HeaderContainer>
        <H.logoSection>
          <H.logoImg src={yallyLogo}></H.logoImg>
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
          <P.profileImg header onClick={profileClick} src={imgSrc + img} />
          <H.moreBtn src={moreButton} onClick={profileClick} />
        </H.imgContainer>
        <H.menuBox id="menu" style={{ display: "none" }}>
          <P.profileImg menu src={imgSrc + img} />
          <H.textContainer>
            <H.menuText name>{name}</H.menuText>
            <H.menuText email>{email}</H.menuText>
            <Router>
              <Link
                to={{ pathname: `settings`, state: { name, img } }}
                style={{ textDecoration: "none" }}
              >
                <H.menuText setting>계정 설정</H.menuText>
              </Link>
            </Router>
            <Router>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <H.menuText logout  onClick={onLogout}>로그아웃</H.menuText>
              </Link>
            </Router>
          </H.textContainer>
        </H.menuBox>
      </H.HeaderContainer>
      {users.map((user) => (
        <Users
          img={user.img}
          nickname={user.nickname}
          listening={user.listening}
          listener={user.listener}
          isListening={user.isListening}
        />
      ))}{" "}
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
    </div>
  );
};

export default Header;
