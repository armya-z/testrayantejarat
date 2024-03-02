import React from "react";
import SelectBox from "./SelectBox";
function AddComment({addCommentTitle,handleToggle,isReply}) {
  return (
    <div className="ac-wrapper">
      <h2 className="addCommentTitle">{`Write your comment in response to ${addCommentTitle}:
`}</h2>
      <form action="" className="form">
        <input placeholder="name" type="text" />
        <input placeholder="email" type="text" />
      {!isReply&&  <SelectBox isReply={isReply}/>}

<textarea
          placeholder="message..."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
       {isReply && <button  onClick={handleToggle}>Cancell</button>}
        {/* Cancell Button */}
      </form>
    </div>
  );
}

export default AddComment;
