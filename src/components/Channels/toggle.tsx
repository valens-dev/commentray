import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ColorButton() {
  const [subType, setSubType] = React.useState("live");

  return (
    <Box sx={{ display: "flex" }}>
      <Box className="mask-box">
        <Box
          className="mask"
          style={{
            transform: `translateX(${subType === "live" ? 0 : "140px"})`
          }}
        />
        <Button
          disableRipple
          variant="text"
          sx={{ color: subType === "live" ? "#ffffff" : "#7A777E" }}
          onClick={() => setSubType("live")}
        >
          Live
        </Button>
        <Button
          disableRipple
          variant="text"
          sx={{ color: subType === "favourites" ? "#ffffff" : "#7A777E" }}
          onClick={() => setSubType("favourites")}
        >
          Favourites
        </Button>
      </Box>
    </Box>
  );
}
