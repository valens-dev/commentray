import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import companyLogo from './../../assets/header-logo.svg';
import profilePicture from './../../assets/profile.png';

import HamburgerMenu from '../HamburgerMenu';
import SearchBox from '../SearchBox';

import './styles.scss';
import { useStreamContext } from '../../contexts/StreamContext';

const Header = () => {
  const navigate = useNavigate();
  const { setIsStreamer } = useStreamContext();
  const isLoggedIn = false;

  const goLive = () => {
    setIsStreamer(true);
    navigate('/go-live');
  };

  return (
    <div className="header">
      <div className="header-left-elements">
        <div className="header-logo-container">
          <a className="header-logo-link" href="/">
            <img src={companyLogo} />
          </a>
        </div>
        <div className="followed-button">
          <a className="followed-link" href="/">
            <span>Followed</span>
          </a>
        </div>
        <div className="followed-button">
          <a className="followed-link" href="/">
            <span>Browse</span>
          </a>
        </div>
      </div>

      <div className="header-center-elements">
        <div className="header-search-box">
          <SearchBox />
        </div>
      </div>

      {/* <UserTypeRadioButtons /> */}
      <div className="header-right-elements">
        {isLoggedIn ? (
          <>
            <div className="header-live-container">
              <Button variant="contained" onClick={goLive}>
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
            <Button variant="contained" onClick={() => navigate('/sign-in')}>
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
