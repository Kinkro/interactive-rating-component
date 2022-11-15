import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} type="submit">
        SUBMIT
      </button>
    </div>
  );
};

export default Footer;
