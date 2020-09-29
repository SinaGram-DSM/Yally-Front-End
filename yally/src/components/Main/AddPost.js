import React,{ useState } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import { mic, sound, picture } from '../../assets/img'

const AddPost = () => {

    let [stream, setStream] = useState({});
    let [media, setMedia] = useState({});
    let [onRec, setOnRec] = useState(true);
    let [source, setSource] = useState({});
    let [analyser , setAnalyser] = useState({});
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
                    console.log(recAudioUrl);
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
            console.log(recAudioUrl);
        }

        stream.getAudioTracks().forEach(function(track) {
            track.stop();
        });
        media.stop()
        
        analyser.disconnect();
        source.disconnect(); 
        
        let audioFile = document.getElementById('audioFile').files
        console.log(audioFile)
        uploadArr = audioFile;
        let uploadRec = new Blob(uploadArr, { 'type': 'audio/ogg codecs=opus' })
        let uploadUrl = window.URL.createObjectURL(uploadRec)
        console.log(uploadUrl)
    }

    return (
        <S.mainContainer>
            <S.mainSection>
                <S.writerInfoBox>
                    <S.profileImg>

                    </S.profileImg>
                    <S.form action="" method="post" enctype="multipart/form-data" input>
                        <S.writerInput placeholder="마멜공주님의 이야기를 들려주세요!" type="text" id="contentInput">
                        </S.writerInput>
                    </S.form>
                    </S.writerInfoBox>
                    <S.buttonsContainer>
                        <S.form >
                            <S.buttonBox onClick={onRec? onRecAudio : offRecAudio}>
                                <S.buttonIcon src={mic}></S.buttonIcon>
                                녹음
                            </S.buttonBox>
                        </S.form>
                        
                        <S.form enctype="multipart/form-data">
                            <S.buttonBox for="audioFile">
                                <S.inputFile type="file" id="audioFile" accept="audio/*" capture="microphone"/>
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
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddPost;