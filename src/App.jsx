import React from "react";
import AddComment from "./components/AddComment";
import Comments from "./container/Comments";
import Post from "./components/Post";
import "./App.css";
import Rate from "./components/Rate";
import { useState } from "react";
function App() {
  const [isReply, setIsReplay] = useState(false)

const [addCommentTitle, setAddCommentTitle] = useState("Write your comment:")


return (
    <div className="app">
      <Post />
      <Rate />
      <AddComment isReply={isReply}  addCommentTitle={addCommentTitle} handleToggle={()=>setIsReplay(!isReply)} />
      <Comments  setName={setAddCommentTitle} setIsReply={setIsReplay}/>
    </div>
  );
}

export default App;
