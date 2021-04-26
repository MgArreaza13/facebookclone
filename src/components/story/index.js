import React from 'react'
import { StoryContainer, AvatarContainer } from "./styles";

function Story({ image, profileSrc, title }) {
  return (
    <StoryContainer style={{backgroundImage: `url(${image})`}}>
      <AvatarContainer src={profileSrc} />
      <h4>{title}</h4>
    </StoryContainer>
  )
}

export default Story
