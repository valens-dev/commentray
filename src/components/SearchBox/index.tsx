import { Autocomplete, TextField, Stack, InputAdornment } from "@mui/material";

import FiltersIcon from "./../../assets/filters-icon.svg";
import SearchIcon from "./../../assets/search-icon.svg";

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
)


export default SearchBox;
