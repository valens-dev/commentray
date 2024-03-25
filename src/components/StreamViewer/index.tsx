import { useEffect, useState } from 'react';
import {
  CallingState,
  LivestreamLayout,
  useCall,
} from '@stream-io/video-react-sdk';

import StreamState from '../StreamState';

import '@stream-io/video-react-sdk/dist/css/styles.css';

export const StreamViewer = () => {
  const call = useCall();
  const [callingState, setCallingState] = useState(CallingState.UNKNOWN);

  useEffect(() => {
    call?.join();

    call?.state.callingState$.subscribe((state) => {
      console.log('[StreamViewer] calling state', state);
      setCallingState(call?.state.callingState);
    });
  }, []);

  return (
    <StreamState {...{ callingState }}>
      <LivestreamLayout
        muted={true}
        showParticipantCount={false}
        showDuration={false}
        showLiveBadge={false}
        showSpeakerName={false}
        floatingParticipantProps={{
          muted: false,
          showParticipantCount: false,
          showDuration: false,
          showLiveBadge: false,
          showSpeakerName: false,
          position: 'top-right',
        }}
      />
    </StreamState>
  );
};
