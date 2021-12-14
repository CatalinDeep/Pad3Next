import React from "react";

import styles from "./button.module.scss";

const Button = ({ onClick, text }) => {
  return (
    <div className={styles.btn_wrapper}>
      <button onClick={onClick} className={styles.btn}>
        {text}
      </button>
    </div>
  );
};

export default Button;
