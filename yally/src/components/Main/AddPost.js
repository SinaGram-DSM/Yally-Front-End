import React,{ useState, useEffect } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend';
import { sound, picture } from '../../assets/img';
import AudioRecord from './AudioRecord'
import axios from 'axios';
import '../../assets/style/Global/global.css';
import { Link } from 'react-router-dom';
import { refresh } from '../../constant';

const AddPost = ({src, baseUrl, editContent, editFile, editImg, editPostId}) => {

    const [audioUrl, setAudioUrl] = useState();
    const [previewUrl, setPreviewUrl] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [isOnAudio, setIsOnAudio] = useState(false);
    const [onRecText, setOnRecText] = useState(null);
    const [start, setStart] = useState();
    const [onText, setOnText] = useState();
    const [audioStart, setAudioStart] = useState(true);
    const [isOnImg, setIsOnImg] = useState(false);
    const [content, setContent] = useState();
    const [isContent, setIsContent] = useState(false);
    const [user, setUser] = useState({});
    const [email, setEmail] = useState({});
    let imgPreview = null;
    let recPreview = null;
    const config = {
        headers : { 'Authorization' : 'Bearer ' + localStorage.getItem('accessToken'),
        'Content-type': 'application/x-www-form-urlencoded'
        }
    }
    const setRecord = (audio, onAudio) => {
        setAudioUrl(audio);
        setIsOnAudio(onAudio);
    }

    useEffect(() => {
        axios.get(baseUrl + "/timeline", config)
        .then((res) => {
            setUser(res.data.info);
            setEmail(res.data.info.email);
        })
    }, [])

    const startTimer = () => {
        let rsec = 1;
        let lsec = 0;
        let rmin = 0;
        let timer = setInterval(() => {
            setOnText(<S.buttonsContainer><S.recordingIcon></S.recordingIcon><S.recordText>{'0' + rmin + ' : ' + lsec + rsec}</S.recordText></S.buttonsContainer>);
            setOnRecText(<S.recordText>음성 녹음 버튼을 한 번 더 누르면 녹음이 종료됩니다.</S.recordText>);
            rsec++;
            if(rsec > 9) 
            {
                lsec++;
                rsec = 0;
            }
            if(lsec > 5) 
            {
                lsec = 0;
                rmin++;
            }
        }, 1000)
        setStart(timer);
        setAudioStart(false);
    }

    const endTimer = () => {
        setOnText(null);
        setOnRecText(null);
        clearInterval(start);
    }
    
    const onUploadRec = () => {
        let audioFile = document.getElementById('audioFile').files;
        setAudioUrl(audioFile[0]);
        setIsOnAudio(true);
    }

    const onEditPost = () => {
        let editFileArr = [];
        let editImgArr = [];
        editFileArr.push(editFile);
        editImgArr.push(editImg);
        const editSound = new File([editFileArr], "sound", { lastModified: new Date().getTime(), type: 'audio/mp3' });
        const editImgFile = new File([editImgArr], "img", { lastModified: new Date().getTime(), type: "image/jpeg" });

        let editHashtagArr = [];
        let editHashtag = '';
        editHashtagArr = editContent.split('#');
        for(let i = 1; i < editHashtagArr.length; i++)
        {
            editHashtag = editHashtagArr[i];
        }
            
        editHashtag = editHashtag.split(' ');
        editHashtagArr = editHashtag;

       console.log(editSound, editImgFile)
        const editFormData = {
            sound : editSound,
            content : editContent,
            hashtags : editHashtagArr
        };

        let editForm = new FormData();

        if(isContent == true) {
            editForm.append('content', content);
        }
        else {
            editForm.append('content', editContent);
        }

        if(isOnImg == true) {
            editForm.append('img', imgFile);
        } 
        else {
            editForm.append('img', editImgFile);
        }

        if(isOnAudio === true) {
            editForm.append('sound', audioUrl);
        }
        else {
            editForm.append('sound', editSound);
        }
        
        editForm.append('hashtag', editFormData.hashtags);

        axios.post(baseUrl + "post/" + editPostId, editForm, config)
            .then((res) => {
                console.log(res);
                setTimeout(function() {
                    window.location.reload();
                }, 200);
            })
            .catch((err) => {
                alert('글 수정에 실패하였습니다. 오디오를 입력해주세요.');
                if(err.status === 403) {
                    refresh();
                }
            })
    }

    const onAddPost = () => {
        
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
                file : imgFile,
                hashtag : hashtagArr
            };
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
                if(err.status === 403) {
                    refresh();
                }
            })
        }

        else
        {
            let sound = new File([audioUrl], "soundBlob",{ lastModified: new Date().getTime(), type: audioUrl.type });
            
            const formdata = 
            {
                sound : sound,
                content : content,
                file : imgFile,
                hashtag : hashtagArr
            };
            form.append('content', formdata.content);
            form.append('img', formdata.file);
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
                if(err.status === 403) {
                    refresh();
                }
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
            setIsOnImg(true);
        }
        reader.readAsDataURL(file);
    }

    const onUploadContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
        setIsContent(true);
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
                <Link style={{textDecoration : "none"}} to={{
                pathname : `/profile/${user.email}`,
                state : {
                    email
                }
                }}><S.profileImg src={src + user.img}></S.profileImg></Link>
                    <S.form action="" method="post" enctype="multipart/form-data" input>
                        <S.writerInput placeholder={`${user.nickname} 님의 이야기를 들려주세요!`} type="text" name="content" onChange={onUploadContent}></S.writerInput>
                    </S.form>
                    </S.writerInfoBox>
                    <S.buttonsContainer container>
                        <S.buttonsContainer>
                            <S.form onClick={audioStart? startTimer : endTimer}>
                                <AudioRecord setRecord={setRecord}></AudioRecord>
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
                        <R.ListeningButton style={{display : editPostId? "" : "none"}} onClick={onEditPost}>수정</R.ListeningButton>
                        <R.ListeningButton style={{display : editPostId? "none" : ""}} onClick={onAddPost}>업로드</R.ListeningButton>
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