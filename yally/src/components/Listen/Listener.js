import React, { useEffect, useState } from "react";
import axios from "axios";
import * as T from "../../assets/style/UserPage/Listen";
import * as L from "../../assets/style/UserPage/PageStyle";
import * as M from "../../assets/style/Main/AddTimeLine";

const Listener = ({ baseUrl, match }) => {
  let [listeners, setListeners] = useState([]);
  let [name, setName] = useState("");
  let [img, setImg] = useState("");
  const email = match.match.params.email;
  const imgUrl = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";
  const listenerValue = match.match.params.value;
  const config = {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  };

  useEffect(() => {
    axios
      .get(baseUrl + "profile/" + email + "/listener", config)
      .then((res) => {
        setListeners(res.data.listeners);
        setImg(res.data.target.image);
        setName(res.data.target.nickname);
        console.log(res.data.listeners);
      });
    console.log(match);
  }, []);

  return (
    <M.mainContainer>
      <T.mainSection>
        <T.profileSection>
          <T.profileImg src={imgUrl + img} />
          <T.comment>
            {listenerValue}명이 {name} 님의 이야기를 듣고 있습니다.
          </T.comment>
        </T.profileSection>
        <T.listenSection>
          {listeners.map((listener) => (
            <T.containerBox>
              <T.itemBox>
                <T.boxImg src={imgUrl + listener.image} />
                <T.userBox>
                  <T.name>{listener.nickname}</T.name>
                  <L.Listen list>
                    <L.Listening listen>
                      리스닝 {listeners.listening}
                    </L.Listening>
                    <L.Listener listen>리스너 {listeners.listener}</L.Listener>
                  </L.Listen>
                </T.userBox>
              </T.itemBox>
              {listeners.isListening ? (
                <T.listenBtn>리스닝</T.listenBtn>
              ) : (
                <T.unlistenBtn>언리스닝</T.unlistenBtn>
              )}
            </T.containerBox>
          ))}
        </T.listenSection>
      </T.mainSection>
    </M.mainContainer>
  );
};

export default Listener;
