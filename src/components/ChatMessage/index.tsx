import "./styles.scss";
import { ChatMessageProps } from "../../data/interfaces";

const ChatMessage = ({ comment }: ChatMessageProps) => (
  <div className="sc-comment-bubble">
    <div className="commenter-icon">
      <img src={comment.commenter.image} alt="commenter avatar" />
    </div>
    <div className="comment-main-section">
      <div className="comment-main-upper">
        <div className="commenter-name">{comment.commenter.name}</div>
        <div className="comment-time">{comment.timeStamp}</div>
      </div>
      <div className="comment-message">{comment.content}</div>
    </div>
  </div>
);

export default ChatMessage;
