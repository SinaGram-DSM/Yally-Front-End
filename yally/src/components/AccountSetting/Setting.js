
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import * as P from "../../assets/style/UserPage/ProfileSetting";
import * as M from "../../assets/style/Main/AddTimeLine";
import axios from "axios";
import { profileEdit } from "../../assets/img";

const Setting = ({ baseUrl, props, name, img }) => {
  let [nickname, setNickName] = useState("");
  let [file, setFile] = useState("");
  let [image, setImage] = useState("");

  const history = new useHistory();
  const valueReset = (e) => {
    const button = document.getElementById("complete");
    e.target.value = "";
    button.style = "background: #D1D1D1";
  };
  const valueChange = (e) => {
    const button = document.getElementById("complete");
    setNickName(e.target.value);
    console.log(e.target.value)
    if (e.target.value === "") button.style = "background: #D1D1D1";
    else
      button.style =
        "background: linear-gradient(to right, #6E8EEA, #9B78EC); cursor: pointer";
  };

  const config = {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
      "Content-Type": "multipart/form-data",
    },
  };

  const imgSetting = () => {
    const input = document.getElementById("nick");
    if (input.value === "") alert("닉네임을 설정해 주세요.");

    const form = new FormData();
    form.append("image", file);
    form.append("nickname", nickname);

    axios
      .put(baseUrl + "profile/", form, config)
      .then((res) => {
        console.log(res);
        
        history.push({
          pathname : '/timeline'
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imgChange = (e) => {
    e.preventDefault();
    const read = new FileReader();
    let file = e.target.files[0];
    read.onloadend = () => {
      setFile(file);
      setImage(read.result);
    };
    read.readAsDataURL(file);
  };

  return (
    <M.mainContainer>
      <P.settingContainer>
        <P.settingSection>
          <P.topSection>
            <P.title>Account Setting</P.title>
            <P.headerBorder></P.headerBorder>
          </P.topSection>
          <P.profileSection>
            <P.imgForm>
              <P.imgInput id="input-img" onChange={imgChange}></P.imgInput>
            </P.imgForm>
            <P.imgChange>
              <P.imgBox>
                <P.profileChange src={profileEdit} />
                {file !== "" ? (
                  <P.profileImge src={image} />
                ) : (
                  <P.profileImge />
                )}
              </P.imgBox>
            </P.imgChange>
          </P.profileSection>
          <P.nameBox>
            <P.nickname
              id="nick"
              value={nickname}
              onFocus={valueReset}
              onChange={valueChange}
            />
          </P.nameBox>
          <P.settingBtn id="complete" onClick={imgSetting}>
            완료
          </P.settingBtn>
          <P.backPage>이전 페이지로 돌아가기</P.backPage>
        </P.settingSection>
      </P.settingContainer>
    </M.mainContainer>
  );
};

export default Setting;
