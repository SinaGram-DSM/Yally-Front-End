import React, { useEffect, useState } from "react";
import * as T from "../../assets/style/UserPage/Listen";
import * as L from "../../assets/style/UserPage/PageStyle";
import * as M from "../../assets/style/Main/AddTimeLine";
import { getListenerList } from "../../lib/api/listen";
import Header from "../Header/Header";
import Background from "../Global/Background";

const Listener = ({ match }) => {
  let [listeners, setListeners] = useState([]);
  let [name, setName] = useState("");
  let [img, setImg] = useState("");
  const email = match.match.params.email;
  const listenerValue = match.match.params.value;

  useEffect(() => {
    getListenerList(email).then((res) => {
      setListeners(res.data.listeners);
      setImg(res.data.target.image);
      setName(res.data.target.nickname);
      console.log(res.data.listeners);
    });
    console.log(match);
  }, [email, match]);

  return (
    <>
      <Header />
      <M.mainContainer>
        <T.mainSection>
          <T.profileSection>
            <T.profileImg src={process.env.REACT_APP_BASE_URL + img} />
            <T.comment>
              {listenerValue}명이 {name} 님의 이야기를 듣고 있습니다.
            </T.comment>
          </T.profileSection>
          <T.listenSection>
            {listeners.map((listener) => (
              <T.containerBox>
                <T.itemBox>
                  <T.boxImg
                    src={process.env.REACT_APP_BASE_URL + listener.image}
                  />
                  <T.userBox>
                    <T.name>{listener.nickname}</T.name>
                    <L.Listen list>
                      <L.Listening listen>
                        리스닝 {listener.listening}
                      </L.Listening>
                      <L.Listener listen>리스너 {listener.listener}</L.Listener>
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
      <Background></Background>
    </>
  );
};

export default Listener;
