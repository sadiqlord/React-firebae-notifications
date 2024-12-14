
const Message = ({ notification }) => {
  const { icon, title, body } = notification;
  return (
    <div className="notification-container">
      {title && (
        <div className="notification-header">
          {icon && (
            <div className="image-container">
              <img src={icon} alt="Notification" width={100} />
            </div>
          )}
          <span className="notification-title">{title}</span>
        </div>
      )}
      {body && <div className="notification-body">{body}</div>}
    </div>
  );
};

export default Message;
