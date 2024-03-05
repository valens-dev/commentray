import { Autocomplete, TextField, Stack, InputAdornment } from "@mui/material";

import FiltersIcon from "./../../assets/filters-icon.svg";
import SearchIcon from "./../../assets/search-icon.svg";

const FreeSolo = () => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo"
        disableClearable
        options={["Football", "Basketball", "Volleyball", "Snooker", "Hockey"]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <>
                  <InputAdornment position="end">
                    <img className="filter-button" src={FiltersIcon} />
                  </InputAdornment>
                  <InputAdornment position="end">
                    <img className="search-button" src={SearchIcon} />
                  </InputAdornment>
                </>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
};

export default FreeSolo;
