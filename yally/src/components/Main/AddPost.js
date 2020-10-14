import React,{ useState, useRef } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend';
import { mic, sound, picture } from '../../assets/img';
import axios from 'axios';

const AddPost = ({src, baseUrl, userImg}) => {

    const [stream, setStream] = useState({});
    const [media, setMedia] = useState({});
    const [onRec, setOnRec] = useState(true);
    const [source, setSource] = useState({});
    const [analyser , setAnalyser] = useState({});
    const [audioUrl, setAudioUrl] = useState();
    const [previewUrl, setPreviewUrl] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [isOnAudio, setIsOnAudio] = useState(false);
    let recArr = [];
    let recAudioData,recAudioUrl;
    const postInput = useRef();

    const onRecAudio = () => {
        const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createScriptProcessor(0,1,1);
        setAnalyser(analyser);

        function makeSound(stream) {
            const source = audioCtx.createMediaStreamSource(stream);
            setSource(source)
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
        }

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            setStream(stream);
            setMedia(mediaRecorder);
            makeSound(stream);
            analyser.onaudioprocess = function(e) {
                if(e.playbackTime > 300)
                {
                    stream.getAudioTracks().forEach(function(track) {
                        track.stop();
                    });
                    mediaRecorder.stop();
                    analyser.disconnect();
                    audioCtx.createMediaStreamSource(stream).disconnect();
                    
                    mediaRecorder.ondataavailable = function(e) {
                        recArr.push(e.data);
                        recAudioData = new Blob(recArr, { 'type': 'audio/ogg codecs=opus' });
                        recAudioUrl = URL.createObjectURL(recAudioData);
                        
                        setOnRec(true);
                    }
                }
                else
                {
                    setOnRec(false)
                }
            }
            
        })
    }

    const offRecAudio = () => {
        media.ondataavailable = function(e) {
            recArr.push(e.data);
            setAudioUrl(recArr[0]);
        }
        
        stream.getAudioTracks().forEach(function(track) {
            track.stop();
        });
        media.stop();
        
        analyser.disconnect();
        source.disconnect(); 
        setIsOnAudio(true);
    }

    const onUploadRec = () => {
        let audioFile = document.getElementById('audioFile').files;
        setAudioUrl(audioFile[0]);
        setIsOnAudio(true);
    }

    const onAddPost = () => {

        const config = {
            headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8',
            'Content-type': 'application/x-www-form-urlencoded'
            }
        }

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
                }, 300);
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
                }, 300);
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
    let imgPreview = null;
    let recPreview = null;
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
                        <S.writerInput placeholder="마멜공주님의 이야기를 들려주세요!" type="text" name="content" ref={postInput}>
                        </S.writerInput>
                    </S.form>
                    </S.writerInfoBox>
                    <S.buttonsContainer container>
                        <S.buttonsContainer>
                            <S.form>
                                <S.buttonBox onClick={onRec? onRecAudio : offRecAudio}>
                                    <S.buttonIcon src={mic}></S.buttonIcon>
                                    녹음
                                </S.buttonBox>
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
                        <R.ListeningButton onClick={onAddPost}>업로드</R.ListeningButton>
                    </S.buttonsContainer>
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddPost;