import "./styles.scss"
import "../Toggle/styles.scss"
import Toggle from '../Toggle';
import IconButton from '@mui/material/IconButton';
import FilterIcon from "./../../assets/filter-streams-icon.svg";
import ChannelList from "../../data/users";
import StreamerCard from "./../StreamerCard";

const Channels = () => (
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
        <div className="ch-streamers">
          {ChannelList.map((streamer, index) => (
            <StreamerCard key={index} streamer={streamer} />
          ))}
        </div>
      </div>
    </div>
  </div>
)


export default Channels;
