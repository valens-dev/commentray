import "./styles.scss"
import "../Toggle/styles.scss"
import Toggle from '../Toggle';
import IconButton from '@mui/material/IconButton';
import FilterIcon from "./../../assets/filter-streams-icon.svg";
import streamerList from "../../data/users";

const Channels = () => {
  return (
    <div className="ch-container">
      <div className="ch-head">
        <div className="ch-title">Channels</div>
        <div className="ch-buttons">
          <div className="ch-live-toggle">
            <Toggle />
          </div>
          <div className="ch-filter-button">
            <IconButton color="secondary" aria-label="filter results">
              <img src={FilterIcon} alt="filter icon" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="ch-list">
        <div className="ch-list-inner-container">
          {streamerList.map((streamer, index) => (
            <div className="ch-streamer-card" key={index}>
              <div className="ch-card-left">
                <div className="ch-streamer-icon">
                  <img src={streamer.image} alt="streamer icon" />
                </div>
                <div className="ch-streamer-info">
                  <div className="ch-streamer-title">
                    <div className="ch-streamer-name">{streamer.name}</div>
                    {streamer.isPopular ? (
                      <div className="ch-streamer-popular-tag"><span>Most popular</span></div>
                    ) : null}
                  </div>
                  <div className="ch-streamer-stream-tag">#{streamer.streamTag}</div>
                </div>
              </div>
              <div className="ch-card-right">
                <div className="ch-rec-icon" />
                <div className="ch-stream-viewers">{streamer.viewerNumber}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Channels;
