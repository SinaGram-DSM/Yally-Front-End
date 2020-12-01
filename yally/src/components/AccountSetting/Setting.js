import React, { useCallback, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as P from "../../assets/style/UserPage/ProfileSetting";
import * as M from "../../assets/style/Main/AddTimeLine";
import { profileEdit } from "../../assets/img";
import { editProfile } from "../../api/Profile";

const Setting = () => {
  const history = new useHistory();
  const location = new useLocation();
  let [nickname, setNickName] = useState(location.state.name);
  let [file, setFile] = useState("");
  let [image, setImage] = useState("");

  const inputReset = (e) => {
    const button = document.getElementById("complete");
    e.target.value = "";
    button.style = "background: #D1D1D1";
  };

  const valueChange = useCallback((e) => {
    const button = document.getElementById("complete");
    setNickName(e.target.value);
    if (e.target.value === "") button.style = "background: #D1D1D1";
    else
      button.style =
        "background: linear-gradient(to right, #6E8EEA, #9B78EC); cursor: pointer";
  });
  
  const imgSetting = () => {
    const input = document.getElementById("nick");
    if (input.value === "") alert("닉네임을 설정해 주세요.");

    const form = new FormData();
    form.append("image", file);
    form.append("nickname", nickname);

    editProfile(form)
      .then((res) => {
        console.log(res);

        history.push({
          pathname: "/timeline",
        });
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

  const pageBack = () => {
    history.go(-1);
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
                  <P.profileImge src={process.env.REACT_APP_SRC_URL + location.state.img} />
                )}
              </P.imgBox>
            </P.imgChange>
          </P.profileSection>
          <P.nameBox>
            <P.nickname
              id="nick"
              onFocus={inputReset}
              onChange={valueChange}
              value={nickname}
            />
          </P.nameBox>
          <P.settingBtn id="complete" onClick={imgSetting}>
            완료
          </P.settingBtn>
          <P.backPage onClick={pageBack}>이전 페이지로 돌아가기</P.backPage>
        </P.settingSection>
      </P.settingContainer>
    </M.mainContainer>
  );
};

export default Setting;
