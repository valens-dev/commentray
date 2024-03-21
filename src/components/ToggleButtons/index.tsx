import "./styles.scss";
import VideocamIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { useState } from "react";
import { Button } from "@mui/material";

const ToggleButtons = () => {
  const [isSendContained, setIsSendContained] = useState(false);

  const handleToggle = () => {
    setIsSendContained(! isSendContained)
  };

  return (
    <>
      <Button
        variant={isSendContained ? "outlined" : "contained"}
        startIcon={<VideocamIcon />}
        onClick={handleToggle}
      >
        Enable Video
      </Button>
      <Button
        variant={isSendContained ? "contained" : "outlined"}
        endIcon={<MicNoneIcon />}
        onClick={handleToggle}
      >
        Audio Only
      </Button>
    </>
  );
};

export default ToggleButtons;
