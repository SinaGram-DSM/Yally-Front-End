import React, { useEffect, useState } from "react";
import axios from "axios";
import * as T from "../../assets/style/UserPage/Listen";
import * as L from "../../assets/style/UserPage/PageStyle";
import * as M from "../../assets/style/Main/AddTimeLine";
import { getListeningList } from "../../lib/api/listen";

const Listening = ({ match}) => {
  const isListen = false; //리슨 버튼 언리스닝 리스닝 여부 확인 값
  let [listenings, setListenings] = useState([]);
  let [name, setName] = useState("");
  let [img, setImg] = useState("");
  const email = match.match.params.email;
  const imgUrl = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";
  const listeningValue = match.match.params.value;

  useEffect(() => {
    getListeningList(email).then((res) => {
      setListenings(res.data.listenings);
      setName(res.data.target.nickname);
      setImg(res.data.target.image);
    });
  }, []);

  return (
    <M.mainContainer>
      <T.mainSection>
        <T.profileSection>
          <T.profileImg src={imgUrl + img} />
          <T.comment>
            {name} 님이 {listeningValue}명의 이야기를 듣고 있습니다.
          </T.comment>
        </T.profileSection>
        <T.listenSection>
          {listenings.map((listening) => (
            <T.containerBox>
              <T.itemBox>
                <T.boxImg src={imgUrl + listening.image} />
                <T.userBox>
                  <T.name>{listening.nickname}</T.name>
                  <L.Listen list>
                    <L.Listening listen>
                      리스닝{listening.listeningValue}
                    </L.Listening>
                    <L.Listener listen>리스너 {listening.listener}</L.Listener>
                  </L.Listen>
                </T.userBox>
              </T.itemBox>
              {isListen ? (
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

export default Listening;
