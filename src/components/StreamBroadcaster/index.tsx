import { useEffect } from 'react';
import {
  useCall,
  useCallStateHooks,
  LivestreamLayout,
  CallControls,
} from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import './styles.scss';

import StreamState from '../StreamState';
import { useStreamContext } from '../../contexts/StreamContext';

export const StreamBroadcaster = () => {
  const call = useCall();

  const { enableVideo } = useStreamContext();
  const { useLocalParticipant, useCallSettings } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const settings = useCallSettings();

  const startCall = async () => {
    call?.join({ create: true });

    call?.microphone.enable();

    enableVideo ? call?.camera.enable() : call?.camera.disable();

    call?.camera.toggle();
    console.log(
      '[StreamBroadcaster] create call - microphone',
      call?.microphone.state
    );
    console.log('[StreamBroadcaster] create call - camera', call?.camera.state);
    call?.goLive();

    call?.state.callingState$.subscribe((state) => {
      console.log('[StreamBroadcaster] callingState', state);
    });
  };
  console.log('Settings', settings);

  useEffect(() => {
    console.log('[StreamBroadcaster]');
    startCall();
    return () => {
      call?.endCall();
    };
  }, [call]);

  const onLeave = () => {
    console.log('[StreamBroadcaster] onLeave', call?.state.callingState);
    call?.endCall();
  };

  return (
    <StreamState callingState={call?.state.callingState}>
      <div className="stream-broadcaster">
        {localParticipant && (
          <>
            <LivestreamLayout
              muted={false}
              showParticipantCount={false}
              showDuration={true}
              showLiveBadge={false}
              showSpeakerName={false}
              floatingParticipantProps={{
                muted: false,
                showParticipantCount: false,
                showDuration: false,
                enableFullScreen: false,
                showLiveBadge: false,
                showSpeakerName: false,
                position: 'top-right',
              }}
            />
            <CallControls {...{ onLeave }} />
          </>
        )}
      </div>
    </StreamState>
  );
};
