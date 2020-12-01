import React, { useState } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import { mic } from '../../assets/img';

const AudioRecord = ({setRecord}) => {

    const [stream, setStream] = useState({});
    const [media, setMedia] = useState({});
    const [onRec, setOnRec] = useState(true);
    const [source, setSource] = useState({});
    const [analyser , setAnalyser] = useState({});
    let recArr = [];
    
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
            setRecord(recArr[0], true);
        }
        stream.getAudioTracks().forEach(function(track) {
            track.stop();
        });
        media.stop();
        
        analyser.disconnect();
        source.disconnect(); 
    }
    
    return (
        <div>
            <S.buttonBox onClick={onRec? onRecAudio : offRecAudio}>
                <S.buttonIcon src={mic}></S.buttonIcon>
                녹음
            </S.buttonBox>
        </div>
    );
};

export default AudioRecord;