import './styles.scss';
import VideocamIcon from '@mui/icons-material/VideocamOutlined';
import MicNoneIcon from '@mui/icons-material/MicNone';

import { Button } from '@mui/material';
import { useStreamContext } from '../../contexts/StreamContext';

const ToggleVideoAudioButtons = () => {
  const { enableVideo, setEnableVideo } = useStreamContext();

  const handleToggle = () => setEnableVideo(!enableVideo);

  return (
    <>
      <Button
        variant={enableVideo ? 'outlined' : 'contained'}
        startIcon={<VideocamIcon />}
        onClick={handleToggle}
      >
        Enable Video
      </Button>
      <Button
        variant={enableVideo ? 'contained' : 'outlined'}
        endIcon={<MicNoneIcon />}
        onClick={handleToggle}
      >
        Audio Only
      </Button>
    </>
  );
};

export default ToggleVideoAudioButtons;
