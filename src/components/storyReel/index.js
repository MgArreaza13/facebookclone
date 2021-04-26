import React from "react";
import Story from "../story";
import { StoryReelContainer } from "./styles";
function StoryReel() {
  return (
    <StoryReelContainer>
      <Story
        image="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80"
        profileSrc="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Floyd J. Brown"
      />
      <Story
        image="https://images.unsplash.com/photo-1574285013029-29296a71930e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
        profileSrc="https://images.pexels.com/photos/35597/homeless-male-b-w-poverty.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Kim P. Way"
      />
      <Story
        image="https://images.unsplash.com/photo-1559065188-2537766d864b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://images.pexels.com/photos/6969/sunset-summer-hipster-pipe.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Robert D. Rogers"
      />
      <Story
        image="https://images.unsplash.com/photo-1568206354559-addcfc739aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://images.pexels.com/photos/108157/pexels-photo-108157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Jason E. Klein"
      />
      <Story
        image="https://images.unsplash.com/photo-1592402637866-1f38043cbd42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
        profileSrc="https://images.pexels.com/photos/58463/pexels-photo-58463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Maria L. Leopold
        "
      />
    </StoryReelContainer>
  );
}

export default StoryReel;
