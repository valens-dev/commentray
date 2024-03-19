import "./styles.scss";
import { useState } from "react";
import { Box, Stack, Slider, IconButton } from "@mui/material";

import soundIcon from "@assets/sound-icon.svg";
import soundIcon from "@assets/sound-icon.svg";

const ContinuousSlider = () => {
  const [value, setValue] = useState<number>(30);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const [value, setValue] = useState<number>(30);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className="lt-volume-slider">
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
        </Stack>
      </Box>
      <IconButton>
        <img src={soundIcon} alt="mute/unmute button" />
      </IconButton>
    </div>
  );
};
  return (
    <div className="lt-volume-slider">
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
        </Stack>
      </Box>
      <IconButton>
        <img src={soundIcon} alt="mute/unmute button" />
      </IconButton>
    </div>
  );
};

export default ContinuousSlider;
