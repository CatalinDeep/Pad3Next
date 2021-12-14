import React, { useState } from "react";
import axios from "axios";

import styles from "./editPost.module.scss";

const EditPost = ({ cancelEdit, propsPost }) => {
  const [post, setPost] = useState(propsPost);

  const onChange = (evt) => {
    setPost({ ...post, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("/api/updatePost", post)
      .then(function (response) {
        console.log(response);
        window.location = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        Username
        <input
          type="text"
          required
          value={post.user}
          name="user"
          onChange={onChange}
        />
      </label>
      <label className={styles.field}>
        Title
        <input
          type="text"
          required
          value={post.title}
          name="title"
          onChange={onChange}
        />
      </label>
      <label className={styles.field}>
        Content
        <input
          type="text"
          required
          value={post.content}
          name="content"
          onChange={onChange}
        />
      </label>
      <div className={styles.buttons}>
        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
        <div className={styles.close_btn} onClick={cancelEdit}>
          Close
        </div>
      </div>
    </form>
  );
};

export default EditPost;
