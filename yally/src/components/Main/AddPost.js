import React,{useState, useEffect} from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import { mic, sound, picture } from '../../assets/img'

const AddPost = () => {

    let [rec, setRec] = useState({});
    let [onRec, setOnRec] = useState(true);
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
            const mediaRecorder = new MediaRecorder(stream)
            setRec(mediaRecorder)
        })
    }, [onRec]);

    const onRecAudio = () => {
        rec.start()
        console.log(rec);
        console.log("start")
        setOnRec(false)
    }
    
    const offRecAudio = () => {
        rec.stop()
        console.log("stop")
        setOnRec(true)
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
                            <S.buttonBox onClick={onRec ? onRecAudio : offRecAudio }>
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