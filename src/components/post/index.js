import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import {
  PostContainer,
  PostTop,
  AvatarUser,
  PostTopInfo,
  PostBottom,
  PostImage,
  PostOptionsContainer,
  PostOption,
} from "./styles";
function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <PostContainer>
      <PostTop>
        <AvatarUser src={profilePic} />
        <PostTopInfo>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </PostTopInfo>
      </PostTop>

      <PostBottom>
        <p>{message}</p>
      </PostBottom>

      <PostImage>
        <img src={image} alt="" />
      </PostImage>

      <PostOptionsContainer>
        <PostOption>
          <ThumbUp />
          <p>Like</p>
        </PostOption>
        <PostOption>
          <ChatBubbleOutline />
          <p>Comment</p>
        </PostOption>
        <PostOption>
          <NearMe />
          <p>Share</p>
        </PostOption>
        <PostOption>
          <AccountCircle />
          <ExpandMoreOutlined />
        </PostOption>
      </PostOptionsContainer>
    </PostContainer>
  );
}

export default Post;
