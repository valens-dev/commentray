import "./styles.scss"
import "../Toggle/styles.scss"
import IconButton from '@mui/material/IconButton';
import FilterIcon from "./../../assets/filter-streams-icon.svg";
import ChannelList from "../../data/users";
import StreamerCard from "../StreamerCard";

const StreamChat = () => (
  <div className="sc-container">
    <div className="sc-head">
      <div className="sc-title">Stream Chat</div>
    </div>
    <div className="sc-list">
      <div className="sc-list-inner-container">
        <div className="sc-button-menu">
        </div>
        <div className="sc-chat-content">
          <div className="sc-notification-box">
            <div className="notif-left">
              <div className="sc-notification-status"></div>
              <div className="sc-gift-icon"></div>
            </div>
            <div className="notif-center">
              <div className="sc-notif-text"></div>
              <div className="sc-notif-name"></div>
            </div>
            <div className="notif-erase-button-wrapper" />
            <IconButton className="notif-erase-button"><img src={FilterIcon} alt="erase notification button" /></IconButton>
          </div>
          <div className="sc-comment-bubble">
            <div className="commenter-icon">
              <img src={FilterIcon} alt="commenter 1" />
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
              <img src={FilterIcon} alt="commenter 2" />
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
              <img src={FilterIcon} alt="commenter 1" />
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
          <div className="sc-comment-bubble"></div>
        </div>
        <div className="sc-message-input"></div>
      </div>
    </div>
  </div>
)


export default StreamChat;
