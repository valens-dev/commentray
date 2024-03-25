import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StreamVideo,
  StreamCall,
  StreamVideoClient,
  Call,
  StreamTheme,
} from '@stream-io/video-react-sdk';

import { StreamViewer } from '../StreamViewer';
import { StreamBroadcaster } from '../StreamBroadcaster';

import Channels from '../Channels';
import StreamChat from '../StreamChat';
import LiveBadge from '../LiveBadge';
import { useStreamContext } from '../../contexts/StreamContext';

import { apiKey, users } from '../../constants/env';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import './styles.scss';
import Header from '../Header';

const StreamScreen = () => {
  const { streamId: callId = '' } = useParams();
  const { isStreamer, setUser } = useStreamContext();

  const [client, setClient] = useState<StreamVideoClient>();
  const [call, setCall] = useState<Call>();

  useEffect(() => {
    const user = users[isStreamer ? 'streamer' : 'viewer'];
    const client = new StreamVideoClient({ apiKey, user, token: user.token });
    setUser(user);
    setClient(client);
    setCall(client.call('livestream', callId));

    return () => {
      call?.endCall();
      setCall(undefined);
    };
  }, []);

  if (!client) return <h1>Call client loading...</h1>;

  console.log('STREAM SCREEEN', call?.state.callingState);

  return (
    <>
      <Header />
      <div className="stream-screen">
        <div className="stream-screen-left">
          <Channels />
          <StreamVideo {...{ client }}>
            <StreamCall {...{ call }}>
              <StreamTheme as="main">
                <div className="stream-screen-content">
                  <LiveBadge />
                  {isStreamer ? <StreamBroadcaster /> : <StreamViewer />}
                </div>
              </StreamTheme>
            </StreamCall>
          </StreamVideo>
        </div>
        <StreamChat />
      </div>
    </>
  );
};

export default StreamScreen;
