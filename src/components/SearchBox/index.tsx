import { Autocomplete, TextField, Stack, InputAdornment } from "@mui/material";

import filtersIcon from "@assets/filters-icon.svg";
import searchIcon from "@assets/search-icon.svg";

const SearchBox = () => (
  <Stack spacing={2} sx={{ width: 300 }}>
    <Autocomplete
      freeSolo
      id="search-box"
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
                  <img className="filter-button" src={filtersIcon} />
                </InputAdornment>
                <InputAdornment position="end">
                  <img className="search-button" src={searchIcon} />
                </InputAdornment>
              </>
            ),
          }}
        />
      )}
    />
  </Stack>
);

export default SearchBox;
