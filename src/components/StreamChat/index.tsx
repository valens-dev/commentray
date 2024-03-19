import "./styles.scss";
import "../Toggle/styles.scss";
import { TextField, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import expandIcon from "@assets/expand-icon.svg";
import friendsIcon from "@assets/friends-icon.svg";
import giftIcon from "@assets/gift-notification.png";
import eraseIcon from "@assets/x-icon.svg";
import giftButtonIcon from "@assets/gift-button-icon.svg";
import emoticonButtonIcon from "@assets/emoticon-button-icon.svg";
import alertIcon from "@assets/alert-info-icon.svg";
import comments from "../../data/comments";
import ChatMessage from "../ChatMessage";
import { Fragment } from "react/jsx-runtime";

const StreamChat = () => (
  <div className="sc-container">
    <div className="sc-head">
      <div className="sc-title">Stream Chat</div>
    </div>
    <div className="sc-list">
      <div className="sc-list-inner-container">
        <div className="sc-button-menu">
          <IconButton className="expand-button">
            <img src={expandIcon} alt="expand menu button" />
          </IconButton>
          <IconButton className="friends-button">
            <img src={friendsIcon} alt="see friends button" />
          </IconButton>
        </div>
        <div className="sc-chat-content">
          <div className="sc-notification-box">
            <div className="notif-left">
              <div className="sc-notification-status-wrapper">
                <div className="sc-notification-status" />
              </div>
              <div className="sc-notification-icon">
                <img
                  className="sc-gift-icon"
                  src={giftIcon}
                  alt="notification icon"
                />
              </div>
              <div className="notif-information">
                <div className="sc-notif-text">Gift a Sub now to be #1!</div>
                <div className="sc-notif-name">Megabox</div>
              </div>
            </div>

            <div className="notif-erase-button-wrapper">
              <IconButton className="notif-erase-button">
                <img src={eraseIcon} alt="erase notification button" />
              </IconButton>
            </div>
          </div>

          {comments.map((comment) =>
            comment.isNew ? (
              <Fragment key={comment.id}>
                <div className="sc-comment-separator">
                  <div className="sc-separator-text">New</div>
                  <div className="sc-separator-line" />
                </div>
                <ChatMessage comment={comment} />
              </Fragment>
            ) : (
              <ChatMessage key={comment.id} comment={comment} />
            )
          )}
        </div>
        <div className="sc-message-input">
          <div className="input-notification">
            <img
              className="notification-icon"
              src={alertIcon}
              alt="alert icon"
            />
            <div className="notification-text">Followers-Only Chat</div>
          </div>
          <TextField
            id="outlined-basic"
            label="Send a message"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="secondary" aria-label="send a gift">
                    <img src={giftButtonIcon} alt="gift icon" />
                  </IconButton>
                  <IconButton color="secondary" aria-label="send a reaction">
                    <img src={emoticonButtonIcon} alt="emoji icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default StreamChat;
