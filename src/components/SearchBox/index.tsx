import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";

import FiltersDialog from "./../FiltersDialog";
import filtersIcon from "@assets/filters-icon.svg";
import searchIcon from "@assets/search-icon.svg";

const SearchBox = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSearchClick = () => {
    console.log("Search button clicked");
  };

  const handleFiltersClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <TextField
        label="Search"
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position="end">
                <IconButton onClick={handleFiltersClick}>
                  <img
                    className="filter-button"
                    src={filtersIcon}
                    alt="filter results button"
                  />
                </IconButton>
              </InputAdornment>
              <InputAdornment position="end">
                <IconButton onClick={handleSearchClick}>
                  <img
                    className="search-button"
                    src={searchIcon}
                    alt="search results button"
                  />
                </IconButton>
              </InputAdornment>
            </>
          ),
        }}
      />
      <FiltersDialog open={openDialog} onClose={handleCloseDialog} />
    </>
  );
};

export default SearchBox;
