import "./styles.scss";
import {
  Button,
  Checkbox,
  Chip,
  DialogContent,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import SearchIcon from "@mui/icons-material/Search";
import ScheduleIcon from "@mui/icons-material/Schedule";
import mediator1 from "@assets/mediator-1.png";
import mediator2 from "@assets/mediator-2.png";
import mediator3 from "@assets/mediator-3.png";
import { useState } from "react";
import { Category } from "../../data/interfaces";
import SearchBox from "../SearchBox";
import ToggleButtons from "../ToggleButtons";
import categories from "../../data/streamCategories";

interface Filter extends Category {
  isActive: boolean;
}

const GoLiveBody = () => {
  const [allFilters, setAllFilters] = useState<Filter[]>(
    categories as Filter[]
  );

  const chipClicked = (filter: Filter) => {
    filter.isActive = !filter.isActive;
    const newFilters = [...allFilters];
    setAllFilters(newFilters);
  };

  return (
    <div className="go-live-body">
      <div className="go-live-section">
        <div className="box-title-wrapper">
          <div className="box-title">Go Live</div>
        </div>
        <div className="parallel-wrapper">
          <div className="parallel-left">
            <div className="event-search-title">
              What event are you commenting on:
            </div>
            <div className="event-search">
              <SearchBox />
            </div>
            <div className="tags-title">Tags:</div>
            <div className="tags">
              <DialogContent>
                {allFilters.map((filter) => (
                  <Chip
                    key={filter.id}
                    className={`filter-chip ${filter.isActive ? "active" : ""}`}
                    label={filter.name}
                    onClick={() => chipClicked(filter)}
                    onDelete={() => {}}
                    deleteIcon={
                      filter.isActive ? (
                        <CheckRoundedIcon />
                      ) : (
                        <AddRoundedIcon />
                      )
                    }
                  />
                ))}
              </DialogContent>
            </div>
            <div className="type-title">Type</div>
            <div className="type-toggle">
              <ToggleButtons />
            </div>
          </div>
          <div className="parallel-right">
            <div className="appointment-title">Appoint chat mediators:</div>
            <div className="mediator-search">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="selected-mediators">
              <img src={mediator1} alt="mediator 1" />
              <img src={mediator2} alt="mediator 2" />
              <img src={mediator3} alt="mediator 3" />
            </div>
            <div className="censor-title">Block words from chat:</div>
            <div className="censor-input">
              <TextField
                id="outlined-basic"
                label="Type here"
                variant="outlined"
              />
            </div>
            <div className="censored-words-list">Retard, Fake, Shit</div>
            <div className="censored-words-subtext">
              separate words/sentences by comma eg. hate, disgusting
            </div>
            <div className="time-title">Time of commentary</div>
            <div className="time-input">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <ScheduleIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <FormGroup className="go-live-checkboxes">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Show viewers your approx time stamp"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Notify followers you are going live"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Rank this stream as 18+"
              />
            </FormGroup>
          </div>
        </div>
        <div className="go-live-button">
          <Button variant="contained" disableElevation>
            Go Live
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoLiveBody;
