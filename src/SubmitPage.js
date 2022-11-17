import React from "react";
import submitImg from "./images/illustration-thank-you.svg";
import styles from "./SubmitPage.module.css";

const SubmitPage = ({ number }) => {
  console.log(number);
  return (
    <>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={submitImg} alt="thank-you" />
      </div>
      <div className={styles.textAlign}>
        <div className={styles.choiceContainer}>
          <span className={styles.choice}>You selected {number} out of 5</span>
        </div>
        <h1 className={styles.heading}>Thank you!</h1>
        <p className={styles.text}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default SubmitPage;
