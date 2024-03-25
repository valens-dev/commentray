import React from 'react';
import { useStreamContext } from '../../contexts/StreamContext';

const UserTypeRadioButtons = () => {
  const { isStreamer, setIsStreamer } = useStreamContext();

  const handleRadioButtonChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsStreamer(event.target.value === 'streamer');
  };

  return (
    <div>
      <input
        type="radio"
        id="viewerRadio"
        name="userType"
        value="viewer"
        checked={!isStreamer}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor="viewerRadio">Viewer</label>
      <input
        type="radio"
        id="streamerRadio"
        name="userType"
        value="streamer"
        checked={isStreamer}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor="streamerRadio">Streamer</label>
    </div>
  );
};

export default UserTypeRadioButtons;
