import React,{useState, useEffect} from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import { mic, sound, picture } from '../../assets/img'

const AddPost = () => {

    let [rec, setRec] = useState({});
    let [media, setMedia] = useState({});
    let [onRec, setOnRec] = useState(true);
    const onRecAudio = () => {
        
    //     let audioSuccess = function(stream) {
    //         let context = new AudioContext();
    //         let source = context.createMediaStreamSource(stream)
    //         let processor = context.createScriptProcessor(1024,1,1);
    //         source.connect(processor);
    //         processor.connect(context.destination);
        
    //         processor.onaudioprocess = function(e){
    //         audio = e.inputBuffer;
    //         };
    //    };

    navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorder.start()
            setRec(stream);
            setMedia(mediaRecorder)
        })
        setOnRec(false)
    }

    const offRecAudio = () => {
        rec.getAudioTracks().forEach(function(track) {
            track.stop();
        });
        media.stop()
    }


    // const content = document.getElementById('contentInput')[0].value.trim();
    // let sound = document.getElementById("audioFile").files;
    // const img = document.getElementById("audioImg").files;
    // const hashtags = ["h1", "h2"];

    // const formdata = 
    // {
    //     sound : sound,
    //     content : content,
    //     img : img,
    //     hashtags : hashtags
    // };

    // let form = new FormData()
    // form.append('content', formdata.content)
    // form.append('img', formdata.img)
    // form.append('sound', formdata.sound)
    // form.append('hashtags', formdata.hashtags)


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
                        <S.form method="post" enctype="multipart/form-data">
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