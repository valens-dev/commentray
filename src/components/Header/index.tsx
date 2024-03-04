import { Autocomplete, Button, TextField, Menu, MenuItem, Stack, InputAdornment } from '@mui/material';

import * as React from 'react';
import './styles.scss';
import companyLogo from './../../assets/header-logo.svg';
import profilePicture from './../../assets/profile.png';
import FiltersIcon from './../../assets/filters-icon.svg';
import SearchIcon from './../../assets/search-icon.svg';

function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo"
        disableClearable
        options={['Football', 'Basketball', 'Volleyball', 'Snooker', 'Hockey']}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              endAdornment: (
                <>
                  <InputAdornment position="end">
                    <img className="filter-button" src={FiltersIcon} />
                  </InputAdornment>
                  <InputAdornment position="end">
                    <img className="search-button" src={SearchIcon} />
                  </InputAdornment>
                </>
              )
            }}
          />
        )}
      />
    </Stack>
  );
}

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="hamburger-button"
        aria-controls={open ? 'hamburger-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div className="header-hamburger-icon">
        </div>
      </Button>
      <Menu
        id="hamburger-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'hamburger-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};


const Header = () => {
  return (
    <div className='header'>
      <div className='header-left-elements'>
        <div className="header-logo-container">
          <a className="header-logo-link" href='https://www.google.com/'>
            <img src={companyLogo} />
          </a>
        </div>
        <div className="followed-button">
          <a className="followed-link" href='https://www.google.com/'>
            <span>Followed</span>
          </a>
        </div>
        <div className="followed-button">
          <a className="followed-link" href='https://www.google.com/'>
            <span>Browse</span>
          </a>
        </div>
      </div>

      <div className="header-center-elements">
        <div className="header-search-box">
          <FreeSolo />
        </div>
      </div>

      <div className='header-right-elements'>
        <div className='header-live-container'>
          <Button variant="contained">
            Go Live
          </Button>
        </div>
        <div className="header-menu">
          <HamburgerMenu />
        </div>
        <div className='header-user-settings'>
          <img src={profilePicture} />
        </div>
      </div>
    </div>
  )
}

export default Header;
