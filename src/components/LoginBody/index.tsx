import "./styles.scss";
import { Button, InputAdornment, TextField } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

const LoginBody = () => {
  return (
    <div className="login-body">
      <div className="login-section">
        <div className="box-title-wrapper">
          <div className="box-title">Sign up to Continue</div>
          <div className="name-input">
            <div className="title">Name</div>
            <TextField
              className="input"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div className="mail-input">
            <div className="title">Email</div>
            <TextField
              className="input"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div className="phone-input">
            <div className="title">Mobile number</div>
            <TextField
              className="input"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LocalPhoneOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div className="password-input">
            <div className="title">Password</div>
            <TextField
              className="input"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOffOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div className="login-privacy-notice">
            By clicking Sign Up, you are agreeing to our{" "}
            <a href="./privacy" target="_blank">
              Terms of Service
            </a>
            , are acknowledging our{" "}
            <a href="./privacy" target="_blank">
              Privacy Notice and the EU, EEA & UK Consumer Right of Withdrawal
              Information.
            </a>
          </div>
          <div className="sign-up-button">
            <Button variant="contained">Sign Up</Button>
          </div>
          <div className="connect-via">or connect via</div>
          <div className="alternative-profiles">
            <Button variant="outlined">
              <GoogleIcon />
            </Button>
            <Button variant="outlined">
              <AppleIcon />
            </Button>
            <Button variant="outlined">
              <FacebookIcon />
            </Button>
          </div>
          <div className="already-registered">
            Already have an account? <a href="./privacy">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBody;
