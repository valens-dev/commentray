import "./styles.scss"
import "../Toggle/styles.scss"
import Toggle from '../Toggle';
import IconButton from '@mui/material/IconButton';
import FilterIcon from "./../../assets/filter-streams-icon.svg";

const Channels = () => {

  return (
    <div className="ch-container">
      <div className="ch-head">
        <div className="ch-title">
          Channels
        </div>
        <div className="ch-live-toggle">
          <Toggle />
        </div>
        <div className="ch-filter-button">
          <IconButton color="secondary" aria-label="filter results">
            <img src={FilterIcon} />
          </IconButton>
        </div>
      </div>
      <div className="ch-list">
        <div className="ch-list-inner-container">
          <div className="ch-streamer-card">
            <div className="ch-streamer-icon">
              <img />
            </div>
            <div className="ch-streamer-info">
              <div className="ch-streamer-title">
                <div className="ch-streamer-name">Doigby</div>
                <div className="ch-streamer-popular-tag">Most popular</div>
              </div>
              <div className="ch-streamer-stream-tag">#WorldCup24</div>
            </div>
          </div>
          List
        </div>
      </div>
    </div>
  );

};

export default Channels;
