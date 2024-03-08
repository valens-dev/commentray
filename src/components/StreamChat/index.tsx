import "./styles.scss"
import "../Toggle/styles.scss"
import IconButton from '@mui/material/IconButton';
import filterIcon from "./../../assets/filter-streams-icon.svg";
import expandIcon from "./../../assets/expand-icon.svg";
import friendsIcon from "./../../assets/friends-icon.svg";
import giftIcon from "./../../assets/gift-notification.png";
import eraseIcon from "./../../assets/x-icon.svg";
import commenter1 from "./../../assets/commenter-1.png";
import commenter2 from "./../../assets/commenter-2.png";
import commenter3 from "./../../assets/commenter-3.png";


const StreamChat = () => (
  <div className="sc-container">
    <div className="sc-head">
      <div className="sc-title">Stream Chat</div>
    </div>
    <div className="sc-list">
      <div className="sc-list-inner-container">
        <div className="sc-button-menu">
          <IconButton className="expand-button"><img src={expandIcon} alt="expand menu button" /></IconButton>
          <IconButton className="friends-button"><img src={friendsIcon} alt="see friends button" /></IconButton>
        </div>
        <div className="sc-chat-content">
          <div className="sc-notification-box">
            <div className="notif-left">
              <div className="sc-notification-status-wrapper">
                <div className="sc-notification-status" />
              </div>
              <div className="sc-notification-icon">
                <img className="sc-gift-icon" src={giftIcon} alt="notification icon" />
              </div>
              <div className="notif-information">
                <div className="sc-notif-text">Gift a Sub now to be #1!</div>
                <div className="sc-notif-name">Megabox</div>
              </div>
            </div>

            <div className="notif-erase-button-wrapper">
              <IconButton className="notif-erase-button"><img src={eraseIcon} alt="erase notification button" /></IconButton>
            </div>
          </div>
          <div className="sc-comment-bubble">
            <div className="commenter-icon">
              <img src={commenter1} alt="commenter 1" />
            </div>
            <div className="comment-main-section">
              <div className="comment-main-upper">
                <div className="commenter-name">Jane Cooper</div>
                <div className="comment-time">12:45</div>
              </div>
              <div className="comment-message">Rashford!!!!! *Chefs kiss* 🤌😘</div>
            </div>
          </div>
          <div className="sc-comment-bubble">
            <div className="commenter-icon">
              <img src={commenter2} alt="commenter 2" />
            </div>
            <div className="comment-main-section">
              <div className="comment-main-upper">
                <div className="commenter-name">Wade Warren</div>
                <div className="comment-time">12:45</div>
              </div>
              <div className="comment-message">GOALLLLL</div>
            </div>
          </div>
          <div className="sc-comment-bubble">
            <div className="commenter-icon">
              <img src={commenter3} alt="commenter 3" />
            </div>
            <div className="comment-main-section">
              <div className="comment-main-upper">
                <div className="commenter-name">Jenny Wilson</div>
                <div className="comment-time">12:45</div>
              </div>
              <div className="comment-message">Best game of football this year. Nice one lads!</div>
            </div>
          </div>
          <div className="sc-comment-separator" />
          <div className="sc-comment-bubble">
            <div className="commenter-icon">
              <img src={filterIcon} alt="commenter 4" />
            </div>
            <div className="comment-main-section">
              <div className="comment-main-upper">
                <div className="commenter-name">Savannah Nguyen</div>
                <div className="comment-time">12:45</div>
              </div>
              <div className="comment-message">You guys are hilarious, I love how stressed Kevin is getting. That man loves his football.</div>
            </div>
          </div>
        </div>
        <div className="sc-message-input"></div>
      </div>
    </div>
  </div>
)


export default StreamChat;
