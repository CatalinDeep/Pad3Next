import React, { useState } from "react";

import { CreatePost, Posts } from "../components";
import Button from "../components/button/button";

import styles from "./homepage.module.scss";

const Homepage = () => {
  const [postModal, setPostModal] = useState(false);
  return (
    <section className={styles.homepage_container}>
      <Posts />
      <article
        className={postModal ? styles.modal__visible : styles.modal__hidden}
      >
        {postModal && <CreatePost closeModal={() => setPostModal(false)} />}
      </article>
      <Button onClick={() => setPostModal(true)} text="+" />
    </section>
  );
};

export default Homepage;
