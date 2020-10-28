import React,{ useRef, useEffect } from 'react';
import * as P from "../../assets/style/Main/PostItmes"

const AudioPlayer = ({src}) => {
    const timeline = useRef();
    const handle = useRef();
    const audio = new Audio(src);

    useEffect(() => { 
        audio.addEventListener("timeupdate", () => {
            let ratio = audio.currentTime / audio.duration;
            console.log(ratio)
            let position = timeline.current.offsetWidth * ratio;
            positionHandle(position);
            
          })
        }
    , []);

    const mouseMove = (e) => {
        
        positionHandle(e.pageX);
        console.log(e.pageX)
        console.log(audio.currentTime)
        //audio.currentTime = (e.pageX / timeline.current.offsetWidth) * audio.duration;
    }

    const positionHandle = (position) => {
        console.log(handle)
        let timelineWidth = timeline.current.offsetWidth - handle.current.offsetWidth;
        let handleLeft = position - timeline.current.offsetLeft;
        console.log(handleLeft)
        console.log(timeline.current)
        if (handleLeft >= 0 && handleLeft - 650 <= timelineWidth) {
          handle.current.style.marginLeft = handleLeft - 650 + "px";
        }
        if (handleLeft - 650 < 0) {
          handle.current.style.marginLeft = "0px";
        }
        if (handleLeft - 650 > timelineWidth) {
          handle.current.style.marginLeft = timelineWidth + "px";
          console.log('c~')
        }
      };
      

    const mouseDown = (e) => {
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', mouseUp);
      };
      
    const mouseUp = (e) => {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('mouseup', mouseUp);
      };

    return (
        <div>
            <P.audioTimeContainer id="timeline" onClick={mouseMove} ref={timeline}>
                <P.audioHandle id="handle" onMouseDown={mouseDown} ref={handle}></P.audioHandle>
            </P.audioTimeContainer>
        </div>
    );
};

export default AudioPlayer;