import {
  Button,
  Chip,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import "./styles.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useState } from "react";
import { Filter } from "./../../data/interfaces";
import interests from "../../data/interests";

const LoginBody = () => {
  const [allInterests, setAllInterests] = useState<Filter[]>(
    interests as Filter[]
  );

  const chipClicked = (interest: Filter) => {
    interest.isActive = !interest.isActive;
    const newInterests = [...allInterests];
    setAllInterests(newInterests);
  };

  return (
    <div className="login-body">
      <div className="login-section">
        <div className="box-title-wrapper">
          <div className="box-title">Just a few more details</div>
          <div className="interests-selection">
            <div className="interests-title">What are your main interests</div>
            <div className="interest-filters">
              <DialogContent>
                {allInterests.map((interest) => (
                  <Chip
                    key={interest.id}
                    className={`filter-chip ${
                      interest.isActive ? "active" : ""
                    }`}
                    label={interest.name}
                    onClick={() => chipClicked(interest)}
                    onDelete={() => {}}
                    deleteIcon={
                      interest.isActive ? (
                        <CheckRoundedIcon />
                      ) : (
                        <AddRoundedIcon />
                      )
                    }
                  />
                ))}
              </DialogContent>
            </div>
          </div>
          <div className="sport-input">
            <div className="title">Enter Sport</div>
            <TextField
              className="input"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div className="adult-only-designation">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Will your content be applicable for 18+ only?
              </FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="save-button">
            <Button variant="contained">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBody;
