import React, { useState } from "react";
import axios from "axios";

import EditPost from "./editPost";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faEdit } from "@fortawesome/free-solid-svg-icons";

import styles from "./post.module.scss";

const Post = ({ title, user, content, id }) => {
  const [editMode, setEditMode] = useState(false);

  const onDelete = () => {
    axios
      .post("/api/deletePost", { id })
      .then((response) => {
        console.log(response);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("delete");
  };

  return (
    <article className={styles.post}>
      {editMode ? (
        <EditPost
          propsPost={{ title, user, content, id }}
          cancelEdit={() => setEditMode(false)}
        />
      ) : (
        <>
          <div className={styles.header}>
            <h5 className={styles.username}>{user}</h5>
            <div className={styles.header__right}>
              <div className={styles.icon_delete} onClick={onDelete}>
                <FontAwesomeIcon icon={faWindowClose} className={styles.icon} />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEdit}
                  className={styles.icon}
                  onClick={() => setEditMode(true)}
                />
              </div>
            </div>
          </div>
          <h2>{title}</h2>
          <p>{content}</p>
        </>
      )}
    </article>
  );
};

export default Post;
