import { Button } from "@mui/material";

import "./styles.scss";
import companyLogo from "@assets/header-logo.svg";
import profilePicture from "@assets/profile.png";
import SearchBox from "../SearchBox";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => (
  <div className="header">
    <div className="header-left-elements">
      <div className="header-logo-container">
        <a className="header-logo-link" href="https://www.google.com/">
          <img src={companyLogo} />
        </a>
      </div>
      <div className="followed-button">
        <a className="followed-link" href="https://www.google.com/">
          <span>Followed</span>
        </a>
      </div>
      <div className="followed-button">
        <a className="followed-link" href="https://www.google.com/">
          <span>Browse</span>
        </a>
      </div>
    </div>

    <div className="header-center-elements">
      <div className="header-search-box">
        <SearchBox />
      </div>
    </div>

    <div className="header-right-elements">
      <div className="header-live-container">
        <Button variant="contained">Go Live</Button>
      </div>
      <div className="header-menu">
        <HamburgerMenu />
      </div>
      <div className="header-user-settings">
        <img src={profilePicture} />
      </div>
    </div>
  </div>
);

export default Header;
