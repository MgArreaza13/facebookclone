import React from "react";
import MessageSender from "../messageSender";
import StoryReel from "../storyReel";
import { FeedContainer } from "./styles";

function Feed() {
  return (
    <FeedContainer>
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
    </FeedContainer>
  );
}

export default Feed;
