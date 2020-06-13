// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
// import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  const [data, setData] = useState(props.comments)

  const [comment, setComment] = useState("");
  
 
  const submitComment = (e) => {
    e.preventDefault();

    setData(data => [...data, {username: "Guest", text: comment} ]);
    setComment("");
  }

  const changeComment = e => {
      setComment(e.target.value);
  }

  // console.log(props.comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */
        data.map((comment, i) => 
          <Comment key = {i} comment = {comment} />
        )
      }
      <CommentInput comment={comment} changeComment={changeComment} submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
