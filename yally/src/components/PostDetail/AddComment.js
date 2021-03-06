import React from "react";
import * as S from "../../assets/style/Main/AddTimeLine";
import * as C from "../../assets/style/PostDetail/Comment";
import * as R from "../../assets/style/Main/Recommend";
import { sound } from "../../assets/img";
import { addComment } from "../../lib/api/post";

const AddComment = ({ id }) => {
  const onAddComment = () => {
    const content = document.getElementsByName("content")[0].value;
    const file = document.getElementById("audioFile").files;
    let form = new FormData();

    const formdata = {
      content: content,
      sound: file[0],
    };
    form.append("content", formdata.content);
    form.append("file", formdata.sound);

    addComment(id, form).then(() => {
      setTimeout(function () {
        window.location.reload();
      }, 300);
    });
  };

  return (
    <S.mainContainer comment>
      <S.mainSection small>
        <C.commentBox>
          <S.writerInfoBox comment profile>
            <S.profileImg></S.profileImg>
            <S.buttonsContainer container button>
              <C.div input>
                <S.form enctype="multipart/form-data" input>
                  <S.writerInput
                    placeholder="답글을 입력하세요"
                    type="text"
                    comment
                    name="content"
                    input
                  ></S.writerInput>
                </S.form>
              </C.div>
              <S.buttonsContainer>
                <S.buttonBox for="audioFile">
                  <S.inputFile
                    type="file"
                    id="audioFile"
                    accept="audio/*"
                    capture="microphone"
                  />
                  <S.buttonIcon src={sound}></S.buttonIcon>
                  음성 파일
                </S.buttonBox>
                <R.ListeningButton comment onClick={onAddComment}>
                  입력
                </R.ListeningButton>
              </S.buttonsContainer>
            </S.buttonsContainer>
          </S.writerInfoBox>
        </C.commentBox>
      </S.mainSection>
    </S.mainContainer>
  );
};

export default AddComment;
