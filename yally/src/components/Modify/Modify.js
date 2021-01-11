import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from "../../assets/style/Main/Recommend";
import { sound, picture } from "../../assets/img";
import AudioRecord from "../Main/AudioRecord";
import "../../assets/style/Global/global.css";
import { Link } from "react-router-dom";
import { getTimelineInfo } from "../../lib/api/timeline";
import { editPost, getDetailPost } from "../../lib/api/post";
import { refreshToken } from "../../lib/api/user";

const Modify = () => {
  const [audioUrl, setAudioUrl] = useState();
  const [previewUrl, setPreviewUrl] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [isOnAudio, setIsOnAudio] = useState(false);
  const [isOnImg, setIsOnImg] = useState(false);
  const [onRecText, setOnRecText] = useState(null);
  const [start, setStart] = useState();
  const [onText, setOnText] = useState();
  const [audioStart, setAudioStart] = useState(true);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});

  let imgPreview = null;
  let recPreview = null;

  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split("/");

  const setRecord = (audio, onAudio) => {
    setAudioUrl(audio);
    setIsOnAudio(onAudio);
  };

  const [inputs, setInputs] = useState({
    contents: "",
    audioSrc: "",
    imgSrc: "",
  });

  const { contents, audioSrc, imgSrc } = inputs;

  const onChangePost = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const get = useCallback(() => {
    getTimelineInfo().then((res) => {
      setUser(res.data.info);
      setEmail(res.data.info.email);
    }, []);

    getDetailPost(id[2]).then((res) => {
      setInputs({
        contents: res.data.content,
        audioSrc: res.data.sound,
        imgSrc: res.data.img,
      });
    });
  }, [id]);

  useEffect(() => {
    get();
  }, [get]);

  const startTimer = () => {
    let rsec = 1;
    let lsec = 0;
    let rmin = 0;
    let timer = setInterval(() => {
      setOnText(
        <S.buttonsContainer>
          <S.recordingIcon></S.recordingIcon>
          <S.recordText>{"0" + rmin + " : " + lsec + rsec}</S.recordText>
        </S.buttonsContainer>
      );
      setOnRecText(<S.recordText>음성 녹음 버튼을 한 번 더 누르면 녹음이 종료됩니다.</S.recordText>);
      rsec++;
      if (rsec > 9) {
        lsec++;
        rsec = 0;
      }
      if (lsec > 5) {
        lsec = 0;
        rmin++;
      }
    }, 1000);
    setStart(timer);
    setAudioStart(false);
  };

  const endTimer = () => {
    setOnText(null);
    setOnRecText(null);
    clearInterval(start);
  };

  const onUploadRec = () => {
    let audioFile = document.getElementById("audioFile").files;
    setAudioUrl(audioFile[0]);
    setIsOnAudio(true);
  };

  const onEditPost = () => {
    const blob = new Blob([process.env.REACT_APP_SRC_URL + audioSrc], {
      type: audioSrc.type,
    });
    const blob2 = new Blob([process.env.REACT_APP_SRC_URL + imgSrc], {
      type: audioSrc.type,
    });
    console.log(blob);
    let editSound = new File([blob], "soundBlob", {
      lastModified: new Date().getTime(),
      type: audioSrc.type,
    });
    let editImg = new File([blob2], "soundBlob", {
      lastModified: new Date().getTime(),
      type: imgSrc.type,
    });
    let form = new FormData();
    let hashtagArr = [];
    let hashtag = "";
    hashtagArr = contents.split("#");
    for (let i = 1; i < hashtagArr.length; i++) {
      hashtag = hashtagArr[i];
    }

    isOnAudio ? form.append("sound", audioUrl) : form.append("sound", editSound);
    form.append("content", contents);
    isOnImg ? form.append("img", imgFile) : form.append("img", editImg);
    for (let i = 0; i < hashtag.length; i++) {
      form.append("hashtag", hashtagArr[i]);
    }

    editPost(id[2], form)
      .then(() => {
        console.log("good");
        history.push("/timeline");
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 403) refreshToken();
      });
  };

  const onUploadImg = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
      setImgFile(file);
      setIsOnImg(true);
    };
    reader.readAsDataURL(file);
  };

  imgFile
    ? (imgPreview = <S.previewIcon src={previewUrl}></S.previewIcon>)
    : (imgPreview = <S.previewIcon src={process.env.REACT_APP_SRC_URL + imgSrc}></S.previewIcon>);
  recPreview = <S.previewIcon src={sound}></S.previewIcon>;

  return (
    <S.mainContainer>
      <S.mainSection>
        <S.writerInfoBox>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/profile/${user.email}`,
              state: {
                email,
              },
            }}
          >
            <S.profileImg src={process.env.REACT_APP_SRC_URL + user.img}></S.profileImg>
          </Link>
          <S.form action="" method="post" enctype="multipart/form-data" input>
            <S.writerInput
              placeholder={`${user.nickname} 님의 이야기를 들려주세요!`}
              type="text"
              onChange={onChangePost}
              name="contents"
              value={contents}
            ></S.writerInput>
          </S.form>
        </S.writerInfoBox>
        <S.buttonsContainer container>
          <S.buttonsContainer>
            <S.form onClick={audioStart ? startTimer : endTimer}>
              <AudioRecord setRecord={setRecord}></AudioRecord>
            </S.form>
            <S.form enctype="multipart/form-data">
              <S.buttonBox for="audioFile">
                <S.inputFile type="file" id="audioFile" accept="audio/*" capture="microphone" onChange={onUploadRec} />
                <S.buttonIcon src={sound}></S.buttonIcon>
                음성 파일
              </S.buttonBox>
            </S.form>
            <S.form method="post" enctype="multipart/form-data">
              <S.buttonBox for="audioImg">
                <S.inputFile type="file" id="audioImg" accept="image/*" onChange={onUploadImg} />
                <S.buttonIcon src={picture}></S.buttonIcon>
                음성 커버
              </S.buttonBox>
            </S.form>
            {recPreview}
            {imgPreview}
          </S.buttonsContainer>
          <R.ListeningButton onClick={onEditPost}>수정</R.ListeningButton>
        </S.buttonsContainer>
        <S.buttonsContainer rec>
          {onText}
          {onRecText}
        </S.buttonsContainer>
      </S.mainSection>
    </S.mainContainer>
  );
};

export default Modify;
