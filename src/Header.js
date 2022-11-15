import React from "react";
import star from "./images/icon-star.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={star} alt="star" />
      </div>
      <h1 className={styles.heading}>How did we do?</h1>
      <p className={styles.para}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
};

export default Header;
