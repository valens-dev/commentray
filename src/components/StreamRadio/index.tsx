import "./styles.scss"
import { ButtonGroup, IconButton } from "@mui/material";
import ContinuousSlider from "../ContinuousSlider";

import streamPlaceholder from "./../../assets/stream-preview-placeholder.png"
import back15SecondsIcon from "./../../assets/back-15-sec-icon.svg";
import previousIcon from "./../../assets/prev-icon.svg";
import pauseIcon from "./../../assets/pause-icon.svg";
import nextIcon from "./../../assets/next-icon.svg";
import front15SecondsIcon from "./../../assets/front-15-sec-icon.svg";
import exitFullscreenIcon from "./../../assets/exit-fullscreen-icon.svg";
import subtitlesIcon from "./../../assets/subtitles-icon.svg";
import moreIcon from "./../../assets/more-options-icon.svg";

const StreamRadio = () => (
  <div className="lt-container">
    <div className="lt-head">
      <div className="lt-title">Listening To</div>
    </div>
    <div className="lt-stream">
      <div className="lt-inner-container">
        <div className="lt-preview-screen">
          <img className="lt-preview-image" id="stream-placeholder" alt="stream-placeholder" src={streamPlaceholder} />
          <div className="lt-screen-buttons">
            <IconButton className="lt-exit-fullscreen"><img src={exitFullscreenIcon} alt="exit fullscreen" /></IconButton>
            <IconButton className="lt-subtitles"><img src={subtitlesIcon} alt="show subtitles" /></IconButton>
            <IconButton className="lt-more"><img src={moreIcon} alt="more options" /></IconButton>
          </div>
        </div>
        <div className="lt-stream-tag">#WorldCup26</div>
        <div className="lt-audio-control">
          <ButtonGroup variant="outlined" aria-label="Audio control">
            <IconButton className="small"><img src={back15SecondsIcon} alt="back 15 seconds button" /></IconButton>
            <IconButton className="small"><img src={previousIcon} alt="previous stream button" /></IconButton>
            <IconButton className="large"><img src={pauseIcon} alt="pause button" /></IconButton>
            <IconButton className="small"><img src={nextIcon} alt="next stream button" /></IconButton>
            <IconButton className="small"><img src={front15SecondsIcon} alt="front 15 seconds button" /></IconButton>
          </ButtonGroup>
        </div>
        <ContinuousSlider />
      </div>
    </div>
  </div>
)

export default StreamRadio;

