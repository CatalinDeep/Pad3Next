import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "../post/post";

import styles from "./posts.module.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/getPosts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.container}>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              user={post.user}
              content={post.content}
              id={post.id}
            />
          );
        })
      ) : (
        <span>No posts yet</span>
      )}
    </section>
  );
};

export default Posts;
