import { Button, InputAdornment, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const LogInBody = () => {
  return (
    <div className="login-body">
      <div className="login-section">
        <div className="box-title-wrapper">
          <div className="box-title">Log in to continue</div>
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
          <div className="already-registered">
            <a href="./privacy">Forgot your password?</a>
          </div>
          <div className="sign-up-button">
            <Button variant="contained">Login</Button>
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
            Already have an account? <a href="./privacy">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInBody;
