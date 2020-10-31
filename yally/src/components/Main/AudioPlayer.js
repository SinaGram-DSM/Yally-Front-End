import React from "react";
import * as P from "../../assets/style/Main/PostItmes";
import { playButton, stopButton } from "../../assets/img";

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      duration: [],
      onText: "00:00",
      start: null,
    };
  }

  componentWillReceiveProps() {
    this.setState({ play: true });
  }

  componentDidMount() {
    this.audio.addEventListener("timeupdate", () => {
      this.setState({ duration: String(this.audio.currentTime).split(".")[0] });
      this.setState({ onText: this.formatTime(this.state.duration) });
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = this.timeline.offsetWidth * ratio;
      this.positionHandle(position);
    });
  }

  positionHandle = (position) => {
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
      clearInterval(this.state.start);
      this.icon.src = playButton;
    }
  };

  mouseMove = (e) => {
    this.positionHandle(e.pageX);
    this.audio.currentTime =
      (e.pageX / this.timeline.offsetWidth) * this.audio.duration;
  };

  mouseUp = (e) => {
    window.removeEventListener("mousemove", this.mouseMove);
    window.removeEventListener("mouseup", this.mouseUp);
  };

  mouseDown = (e) => {
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("mouseup", this.mouseUp);
  };

  formatTime = (time) => {
    let min = "0" + Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
  };

  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
      this.icon.src = playButton;
    } else {
      this.setState({ play: true });
      this.audio.play();
      this.icon.src = stopButton;
    }
  };

  render() {
    const duration = this.state.onText;
    return (
      <div>
        <audio
          src={this.props.audio}
          ref={(audio) => {
            this.audio = audio;
          }}
        />
        <P.audioTimeline
          id="timeline"
          onClick={this.mouseMove}
          ref={(timeline) => {
            this.timeline = timeline;
          }}
        >
          <P.audioHandle
            id="handle"
            onMouseDown={this.mouseDown}
            ref={(handle) => {
              this.handle = handle;
            }}
          />
          <P.audioDuration id="hi">{duration}</P.audioDuration>
        </P.audioTimeline>

        <P.Icon
          ref={(icon) => {
            this.icon = icon;
          }}
          src={playButton}
          onClick={this.play}
        />
      </div>
    );
  }
}
