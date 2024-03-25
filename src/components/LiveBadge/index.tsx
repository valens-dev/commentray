import { useCallStateHooks } from '@stream-io/video-react-sdk';
import './styles.scss';

const LiveBadge = () => {
  const { useIsCallLive } = useCallStateHooks();
  const isCallLive = useIsCallLive();

  return isCallLive ? <div className="live-badge">LIVE</div> : <></>;
};

export default LiveBadge;
