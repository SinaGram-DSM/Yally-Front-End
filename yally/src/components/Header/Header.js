import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import * as H from "../../assets/style/Header/HeaderStyle";
import * as P from "../../assets/style/Main/AddTimeLine";
import * as M from "../../assets/style/Main/AddTimeLine";
import * as T from "../../assets/style/UserPage/Listen";
import PostItem from "../Main/PostItem";
import { yallyLogo, search, moreButton } from "../../assets/img";
import Users from "../Search/Users";
import { useEffect } from "react";

const Header = (baseUrl) => {
  let [value, setValue] = useState("");
  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);
  let [searchUrl, setUrl] = useState("");
  let [page, setPage] = useState(1);
  let [isLoading, setIsLoading] = useState(false);

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8",
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
    setIsLoading(true);
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
    console.log(page);
  }, [infiniteScroll]);

  const searchBtn = () => {
    if (value.charAt(0) == "#") {
      setUrl("/search/posts");
      const values = value.substr(1);
      setValue(values);
      console.log(values);
      const tagSearch = () => {
        axios
          .get(
            "http://13.125.238.84:81/search/post?hashtag=" +
              values +
              "&page=" +
              page,
            config
          )
          .then((res) => {
            setPosts(res.data.posts);
            console.log(res.data);
          });
      };
      tagSearch();
    } else if (value.charAt(0) == "@") {
      setUrl("/search/users");
      const values = value.substr(1);
      setValue(values);
      const userSearch = () => {
        axios
          .get(
            "http://13.125.238.84:81/search/user?nickname=" +
              values +
              "&page=" +
              page,
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
        <Router>
          <Link to={searchUrl}>
            <H.searchIcon src={search} onClick={searchBtn} />
          </Link>
        </Router>
        <H.imgContainer>
          <P.profileImg header onClick={profileClick} />
          <H.moreBtn src={moreButton} onClick={profileClick} />
        </H.imgContainer>
        <H.menuBox id="menu" style={{ display: "none" }}>
          <P.profileImg menu />
          <H.textContainer>
            <H.menuText name>데인 드한</H.menuText>
            <H.menuText email>dehaan@hansome.kr</H.menuText>
            <Router>
              <Link to="profile/settings" style={{ textDecoration: "none" }}>
                <H.menuText setting>계정 설정</H.menuText>
              </Link>
            </Router>
            <Router>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <H.menuText logout>로그아웃</H.menuText>
              </Link>
            </Router>
          </H.textContainer>
        </H.menuBox>
      </H.HeaderContainer>        <M.mainContainer user>
         <T.mainSection>
           <T.listenSection>
      {users.map((user) => (
 
        <Users
          img={user.img}
          nickname={user.nickname}
          listening={user.listening}
          listener={user.listener}
          isListening={user.isListening}
        />
          
      ))}  </T.listenSection>
      </T.mainSection>
    </M.mainContainer>
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
