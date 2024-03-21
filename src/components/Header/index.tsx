import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import companyLogo from "@assets/header-logo.svg";
import profilePicture from "@assets/profile.png";
import SearchBox from "../SearchBox";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = false;

  return (
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
        {isLoggedIn ? (
          <>
            <div className="header-live-container">
              <Button variant="contained" onClick={() => navigate("/go-live")}>
                Go Live
              </Button>
            </div>
            <div className="header-menu">
              <HamburgerMenu />
            </div>
            <div className="header-user-settings">
              <img src={profilePicture} />
            </div>
          </>
        ) : (
          <div className="header-live-container">
            <Button variant="contained" onClick={() => navigate("/login")}>
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
