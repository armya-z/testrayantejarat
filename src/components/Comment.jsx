import Avatar from "../assets/avatar.png";

function Comment({ name, message, children,handleClick,id }) {
 


  return (
    <div className="box" id={id} name={name} >
      <div className="content">
        <div className="avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="texts">
          <div className="header">
            <h3 className="name"  >{name}</h3>
            <button id={id} name={name} onClick={handleClick} >replay</button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
      <div className="children"   >
        {children.map(({ id, name, message, children }) => (

<Comment
            key={id}
            id={id}
            name={name}
            message={message}
            children={children}
            handleClick={handleClick}
            />
        ))}
      </div>
    </div>
  );
}

export default Comment;
