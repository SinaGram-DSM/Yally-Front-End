import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import * as T from "../../assets/style/UserPage/Listen";
import * as L from "../../assets/style/UserPage/PageStyle";

const Users = ({
  id,
  email,
  img,
  nickname,
  listening,
  listener,
  isListening,
  baseUrl,
}) => {
  const url = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";
  const history = new useHistory();
  const location = useLocation;
  let [isListen, setIsListen] = useState(isListening);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    if (img != undefined) setLoading(true);
    setIsListen(isListening);
  }, []);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  };

  const userListening = () => {
    axios
      .post(baseUrl + "user/listening/" + email, null, config)
      .then((res) => {
        console.log(res.data);
        if (res.data.message == "Success") setIsListen(true);
      });
  };

  const userUnListening = () => {
    axios.delete(baseUrl + "user/listening/" + email, config).then((res) => {
      if (res.data.message == "Success") setIsListen(false);
    });
  };

  const profile = () => {
    history.push(`/profile/${email}`);
  };
  return (
    <T.containerBox load={loading}>
      <T.itemBox>
        <T.boxImg src={url + img} onClick={profile} />
        <T.userBox>
          <T.name>{nickname}</T.name>
          <L.Listen list>
            <L.Listening listen>리스닝 {listening}</L.Listening>
            <L.Listener listen>리스너 {listener}</L.Listener>
          </L.Listen>
        </T.userBox>
      </T.itemBox>
      {isListen ? (
        <T.unlistenBtn onClick={userUnListening}>언리스닝</T.unlistenBtn>
      ) : (
        <T.listenBtn onClick={userListening}>리스닝</T.listenBtn>
      )}
    </T.containerBox>
  );
};

export default Users;
