import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import {
  MessageSenderContainer,
  MessageSenderTop,
  MessageSenderBottom,
  MessageSenderOptions,
} from "./styles";
function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    setInput("")
    setImageUrl("")
  };

  return (
    <MessageSenderContainer>
      <MessageSenderTop>
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            className="input_post"
            placeholder="What's on your mind?"
          />
          <input
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            type="text"
            placeholder="image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </MessageSenderTop>
      <MessageSenderBottom>
        <MessageSenderOptions>
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </MessageSenderOptions>
        <MessageSenderOptions>
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </MessageSenderOptions>
        <MessageSenderOptions>
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </MessageSenderOptions>
      </MessageSenderBottom>
    </MessageSenderContainer>
  );
}

export default MessageSender;
