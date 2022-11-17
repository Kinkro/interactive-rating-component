import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ button, setButton }) => {
  // console.log(props.click);
  const handleClick = () => {
    setButton(!button);
  };
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} type="submit" onClick={handleClick}>
        SUBMIT
      </button>
    </div>
  );
};

export default Footer;
