import React, { useEffect, useState } from "react";
import MessageSender from "../messageSender";
import Post from "../post";
import StoryReel from "../storyReel";
import { FeedContainer } from "./styles";
import { db } from "../../firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  return (
    <FeedContainer>
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </FeedContainer>
  );
}

export default Feed;
