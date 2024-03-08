import "./styles.scss";
import { StreamerCardProps } from "../../data/interfaces";

const StreamerCard = ({ streamer }: StreamerCardProps) => (
  <div className="ch-streamer-card">
    <div className="ch-card-left">
      <div className="ch-streamer-icon">
        <img src={streamer.image} alt="streamer icon" />
      </div>
      <div className="ch-streamer-info">
        <div className="ch-streamer-title">
          <div className="ch-streamer-name">{streamer.name}</div>
          {streamer.isPopular ? (
            <div className="ch-streamer-popular-tag">
              <span>Most popular</span>
            </div>
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
);

export default StreamerCard;
