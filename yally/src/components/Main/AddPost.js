import React,{ useState, useRef } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend';
import { sound, picture } from '../../assets/img';
import AudioRecord from './AudioRecord'
import axios from 'axios';

const AddPost = ({src, baseUrl, userImg, editContent, editFile, editImg, editPostId}) => {

    const [audioUrl, setAudioUrl] = useState();
    const [previewUrl, setPreviewUrl] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [isOnAudio, setIsOnAudio] = useState(false);
    const [onRecText, setOnRecText] = useState(null);
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [onText, setOnText] = useState();
    let a = false;
    let recArr = [];
    let imgPreview = null;
    let recPreview = null;
    const [h, setH] = useState(false);
    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8',
        'Content-type': 'application/x-www-form-urlencoded'
        }
    }

    const setRecord = (audio, onAudio) => {
        setAudioUrl(audio);
        setIsOnAudio(onAudio);
    }

    const setTimer = (isOnRec) => {
       setStart(isOnRec);
    }

    const onUploadRec = () => {
        let audioFile = document.getElementById('audioFile').files;
        setAudioUrl(audioFile[0]);
        setIsOnAudio(true);
    }

    const onEditPost = () => {
        
        let a = [];
        let b = [];
        const ii = document.getElementById("audioImg").files;
        a.push(editFile);
        b.push(editImg);
        // const i = new File([b], "img", {type : 'img/jpeg'});
        const sound = new File([a], "sound", { lastModified: new Date().getTime(), type: 'audio/mp3' });
        const img = new File([b], "img", { lastModified: new Date().getTime(), type: 'img/jpeg' });
        // console.log(sound);
        // let editSound = new File([audioUrl], "soundBlob",{ lastModified: new Date().getTime(), type: audioUrl.type });
        
        const editFormData = {
            sound : sound,
            content : editContent,
            img : img,
            hashtags : 'zz'
        };
        console.log(editFormData);
        let editForm = new FormData();
        editForm.append('content', editFormData.content);
        editForm.append('img', editFormData.img);
        editForm.append('sound', editFormData.sound);
        editForm.append('hashtag', editFormData.content);

        console.log(editForm);
        axios.post(baseUrl + "post/" + editPostId, editForm, config)
            .then((res) => {
                console.log(res);
                setTimeout(function() {
                    window.location.reload();
                }, 200);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onAddPost = () => {
        
        const content = document.getElementsByName('content')[0].value.trim();
        const img = document.getElementById("audioImg").files;
        let hashtagArr = [];
        let hashtag = '';
        hashtagArr = content.split('#');
        let form = new FormData();

        for(let i = 1; i < hashtagArr.length; i++)
        {
            hashtag = hashtagArr[i];
        }
            
        hashtag = hashtag.split(' ');
        hashtagArr = hashtag;

        if(audioUrl == null)
        {
            alert('음성을 녹음하거나 업로드해주세요!');
            console.log(audioUrl)
        }
        
        else if(typeof(audioUrl) == FileList)
        {
            const formdata = 
            {
                sound : audioUrl,
                content : content,
                file : img,
                hashtag : hashtagArr
            };
            console.log(audioUrl)

            form.append('content', formdata.content);
            form.append('img', formdata.file[0]);
            form.append('sound', formdata.sound);
            for(let i = 0; i < hashtag.length; i++)
            {
                form.append('hashtag', formdata.hashtag[i]);
            }
            
            axios.post(baseUrl + "post", form, config)
            .then((res) => {
                console.log(res)
                setTimeout(function() {
                    window.location.reload();
                }, 200);
            })
            .catch((err) => {
                console.log(err)
            })
        }

        else
        {
            let sound = new File([audioUrl], "soundBlob",{ lastModified: new Date().getTime(), type: audioUrl.type });
            
            const formdata = 
            {
                sound : sound,
                content : content,
                file : img,
                hashtag : hashtagArr
            };
            console.log(formdata);

            form.append('content', formdata.content);
            form.append('img', formdata.file[0]);
            form.append('sound', formdata.sound);
            for(let i = 0; i < hashtag.length; i++)
            {
                form.append('hashtag', formdata.hashtag[i]);
            }
            
            axios.post(baseUrl + "post", form, config)
            .then((res) => {
                console.log(res)
                setTimeout(function() {
                    window.location.reload();
                }, 200);
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const onUploadImg = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
            setImgFile(file);
        }
        reader.readAsDataURL(file);
    }

    if(imgFile !== ''){
      imgPreview = <S.previewIcon src={previewUrl}></S.previewIcon>
    }
    if(isOnAudio == true){
        recPreview = <S.previewIcon src={sound}></S.previewIcon>
    }
    
    return (
        <S.mainContainer>
            <S.mainSection>
                <S.writerInfoBox>
                    <S.profileImg src={src + userImg}></S.profileImg>
                    <S.form action="" method="post" enctype="multipart/form-data" input>
                        <S.writerInput placeholder="이야기를 들려주세요!" type="text" name="content">
                        </S.writerInput>
                    </S.form>
                    </S.writerInfoBox>
                    <S.buttonsContainer container>
                        <S.buttonsContainer>
                            <S.form>
                                <AudioRecord setRecord={setRecord} setTimer={setTimer}></AudioRecord>
                            </S.form>
                            <S.form enctype="multipart/form-data">
                                <S.buttonBox for="audioFile">
                                    <S.inputFile  type="file" id="audioFile" accept="audio/*" capture="microphone" onChange={onUploadRec}/>
                                    <S.buttonIcon src={sound}></S.buttonIcon>
                                    음성 파일
                                </S.buttonBox>
                            </S.form>
                            <S.form method="post" enctype="multipart/form-data">
                                <S.buttonBox for="audioImg">
                                    <S.inputFile type="file" id="audioImg" accept="image/*" onChange={onUploadImg}/>
                                    <S.buttonIcon src={picture}></S.buttonIcon>
                                    음성 커버
                                </S.buttonBox>
                            </S.form>
                            {recPreview}
                            {imgPreview}
                        </S.buttonsContainer>
                        <R.ListeningButton onClick={onEditPost}>수정</R.ListeningButton>
                        <R.ListeningButton onClick={onAddPost}>업로드</R.ListeningButton>
                    </S.buttonsContainer>
                    <S.buttonsContainer rec>
                        {onText}
                        {onRecText}
                    </S.buttonsContainer>
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddPost;