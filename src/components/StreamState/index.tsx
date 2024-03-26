import { CallingState } from '@stream-io/video-react-sdk';
import { StreamStateProps } from './interfaces';
import './styles.scss';

const StreamState = ({ callingState, children }: StreamStateProps) => {
  const callStates = {
    [CallingState.OFFLINE]: 'Stream is offline...',
    [CallingState.IDLE]: 'Stream is idle...',
    [CallingState.JOINING]: 'Joining stream...',
    [CallingState.LEFT]: 'Stream has ended...',
    [CallingState.MIGRATING]: 'Stream is migrating...',
    [CallingState.RECONNECTING]: 'Reconnecting stream...',
    [CallingState.RECONNECTING_FAILED]: 'Failed to reconnect stream...',
    [CallingState.RINGING]: 'Call is ringing...',
    [CallingState.UNKNOWN]: 'Unknown stream state...',
  };

  const callState = callingState || CallingState.UNKNOWN;

  console.log('[StreamState] current state: ', callingState);

  if (callState !== CallingState.JOINED)
    return <div className="stream-state-message">{callStates[callState]}</div>;

  return <>{children}</>;
};

export default StreamState;
