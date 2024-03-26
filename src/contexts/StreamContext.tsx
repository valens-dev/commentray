import { User } from '@stream-io/video-react-sdk';
import { createContext, useState, ReactNode, useContext } from 'react';

export interface StreamContextState {
  isStreamer: boolean;
  setIsStreamer: (value: boolean) => void;
  user: User;
  setUser: (value: User) => void;
  enableVideo: boolean;
  setEnableVideo: (value: boolean) => void;
}

const defaultStreamerContextState: StreamContextState = {
  isStreamer: true,
  setIsStreamer: () => {},
  user: { type: 'anonymous' },
  setUser: () => {},
  enableVideo: true,
  setEnableVideo: () => {},
};

export const StreamContext = createContext<StreamContextState>(
  defaultStreamerContextState
);

export const StreamContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isStreamer, setIsStreamer] = useState<boolean>(false);
  const [enableVideo, setEnableVideo] = useState(false);
  const [user, setUser] = useState<User>({ type: 'anonymous' });

  return (
    <StreamContext.Provider
      value={{
        isStreamer,
        setIsStreamer,
        user,
        setUser,
        enableVideo,
        setEnableVideo,
      }}
    >
      {children}
    </StreamContext.Provider>
  );
};

export const useStreamContext = () => {
  const context = useContext(StreamContext);
  if (!context) {
    throw new Error(
      'useStreamContext must be used within a StreamContextProvider'
    );
  }
  return context;
};
