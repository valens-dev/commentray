import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import Toggle from '../Toggle';
import StreamerCard from './../StreamerCard';

import channelList from '../../data/users';
import filterIcon from '@assets/filter-streams-icon.svg';

import '../Toggle/styles.scss';
import './styles.scss';

const Channels = () => {
  const { streamId } = useParams();

  return (
    <div
      className={`ch-container ${streamId ? 'ch-stream-screen' : 'homepage'}`}
    >
      {!streamId ? (
        <div className="ch-head">
          <div className="ch-title">Channels</div>
          <div className="ch-buttons">
            <div className="ch-live-toggle">
              <Toggle />
            </div>
            <div className="ch-filter-button">
              <IconButton color="secondary" aria-label="filter results">
                <img src={filterIcon} alt="filter icon" />
              </IconButton>
            </div>
          </div>
        </div>
      ) : (
        <div className="ch-live-now">
          <span>Live Now</span>
        </div>
      )}
      <div className="ch-list">
        <div className="ch-list-inner-container">
          <div className="ch-streamers">
            {channelList.map((streamer, index) => (
              <StreamerCard key={index} streamer={streamer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;
