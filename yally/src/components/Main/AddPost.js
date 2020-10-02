import React,{ useState } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend';
import { mic, sound, picture } from '../../assets/img';
import axios from 'axios';

const AddPost = ({src, baseUrl, userImg}) => {

    let [stream, setStream] = useState({});
    let [media, setMedia] = useState({});
    let [onRec, setOnRec] = useState(true);
    let [source, setSource] = useState({});
    let [analyser , setAnalyser] = useState({});
    let [audioUrl, setAudioUrl] = useState();
    let recArr = [];
    let uploadArr = [];
    let recAudioData,recAudioUrl;

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
            recAudioData = new Blob(recArr, { 'type': 'audio/ogg codecs=opus' });
            recAudioUrl = URL.createObjectURL(recAudioData);
            setAudioUrl(recAudioUrl)
            //console.log(recAudioUrl)
        }

        stream.getAudioTracks().forEach(function(track) {
            track.stop();
        });
        media.stop()
        
        analyser.disconnect();
        source.disconnect(); 
    }

    const onUploadRec = () => {
        let audioFile = document.getElementById('audioFile').files
        uploadArr = audioFile;
        //let uploadRec = new Blob(uploadArr, { 'type': 'audio/ogg codecs=opus' })
        let uploadUrl = window.URL.createObjectURL(audioFile)
        setAudioUrl(uploadUrl)
        //console.log(uploadUrl)
    }

    const onAddPost = () => {
        const content = document.getElementsByName('content')[0].value.trim();
        const img = document.getElementById("audioImg").files;
        let hashtagArr = [];
        let hashtag = '';
        hashtagArr = content.split('#');
        
        for(let i = 1; i < hashtagArr.length; i++)
        {
            hashtag += '#' + hashtagArr[i];
        }
        
        hashtag = hashtag.split(' ');
        hashtagArr = hashtag;

        const config = {
            headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8',
            'Content-type': 'application/x-www-form-urlencoded'
            }
        }

        const formdata = 
        {
            sound : audioUrl,
            content : content,
            file : img,
            hashtag : hashtagArr
        };
        
        let form = new FormData();
        form.append('content', formdata.content);
        form.append('file', formdata.file[0]);
        form.append('sound', formdata.sound);
        for(let i = 0; i < hashtag.length; i++)
        {
            form.append('hashtag', formdata.hashtag[i]);
        }
        
        axios.post(baseUrl + "post", form, config)
        .then((res) => {
            setTimeout(function() {
                window.location.reload();
            }, 300);
        })
    }

    return (
        <S.mainContainer>
            <S.mainSection>
                <S.writerInfoBox>
                    <S.profileImg src={src + userImg}></S.profileImg>
                    <S.form action="" method="post" enctype="multipart/form-data" input>
                        <S.writerInput placeholder="마멜공주님의 이야기를 들려주세요!" type="text" name="content">
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
                                    <S.inputFile onClick={onUploadRec} type="file" id="audioFile" accept="audio/*" capture="microphone"/>
                                    <S.buttonIcon src={sound}></S.buttonIcon>
                                    음성 파일
                                </S.buttonBox>
                            </S.form>
                            <S.form method="post" enctype="multipart/form-data">
                                <S.buttonBox for="audioImg">
                                    <S.inputFile type="file" id="audioImg"/>
                                    <S.buttonIcon src={picture}></S.buttonIcon>
                                    음성 커버
                                </S.buttonBox>
                            </S.form>
                        </S.buttonsContainer>
                        <R.ListeningButton onClick={onAddPost}>업로드</R.ListeningButton>
                    </S.buttonsContainer>
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddPost;