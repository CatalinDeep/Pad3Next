import React, { useState } from "react";
import axios from "axios";

import styles from "./createPost.module.scss";

export default function CreatePost({ closeModal }) {
  const [post, setPost] = useState({ user: "", title: "", content: "" });

  const onChange = (evt) => {
    setPost({ ...post, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("/api/addPost", post)
      .then((response) => {
        console.log(response);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <article className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.field}>
          Username
          <input
            type="text"
            required
            name="user"
            value={post.user}
            onChange={onChange}
          />
        </label>
        <label className={styles.field}>
          Title
          <input
            type="text"
            required
            name="title"
            value={post.title}
            onChange={onChange}
          />
        </label>
        <label className={styles.field}>
          Content
          <input
            type="text"
            required
            name="content"
            value={post.content}
            onChange={onChange}
          />
        </label>
        <div className={styles.buttons}>
          <button type="submit" className={styles.submit_btn}>
            Submit post
          </button>
        </div>
      </form>
      <button onClick={closeModal} className={styles.close_btn}>
        &times;
      </button>
    </article>
  );
}
