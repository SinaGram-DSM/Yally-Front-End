import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as C from '../../assets/style/PostDetail/Comment'
import * as R from '../../assets/style/Main/Recommend'
import axios from 'axios'
import { sound} from '../../assets/img';

const AddComment = ({baseUrl, id}) => {

    const onAddComment = () => {
        const content = document.getElementsByName('content')[0].value;
        const file = document.getElementById("audioFile").files;
        let form = new FormData();

        console.log(content)
        const config = {
            headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8',
            'Content-type': 'application/x-www-form-urlencoded'
            }
        }
        const formdata = 
        {
            content : content,
            sound : file[0]
        };

        form.append('content', formdata.content);
        form.append('sound', formdata.sound);

        axios.post(baseUrl + "post/comment/" + id, form, config)
        .then((res) => {
            console.log(res)
        })
    }

    return (
        <S.mainContainer detailPost>
            <S.mainSection small>
            <C.commentBox>
                <S.writerInfoBox comment profile>
                    <S.profileImg></S.profileImg>
                        <S.buttonsContainer container button>
                            <C.div>
                                <S.form enctype="multipart/form-data">
                                    <S.writerInput placeholder="답글을 입력하세요" type="text" comment name="content">
                                    </S.writerInput>
                                </S.form>
                            </C.div>
                            <S.buttonsContainer>
                                <S.buttonBox for="audioFile">
                                    <S.inputFile type="file" id="audioFile" accept="audio/*" capture="microphone"/>
                                    <S.buttonIcon src={sound}></S.buttonIcon>
                                        음성 파일
                                </S.buttonBox>
                                <R.ListeningButton comment onClick={onAddComment}>입력</R.ListeningButton>
                            </S.buttonsContainer>
                        </S.buttonsContainer>
                </S.writerInfoBox>
            </C.commentBox>
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddComment;