import React from "react";
import styles from "./Main.module.css";
import HeaderStyles from "./Header.module.css";

const Main = ({ active, setActive, number, setNumber }) => {
  const handleClick = (event) => {
    setNumber(event.target.innerHTML);
    console.log(number);
    if (event.target.innerHTML === "1") {
      setActive({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
      });
    } else if (event.target.innerHTML === "2") {
      setActive({
        one: false,
        two: true,
        three: false,
        four: false,
        five: false,
      });
    } else if (event.target.innerHTML === "3") {
      setActive({
        one: false,
        two: false,
        three: true,
        four: false,
        five: false,
      });
    } else if (event.target.innerHTML === "4") {
      setActive({
        one: false,
        two: false,
        three: false,
        four: true,
        five: false,
      });
    } else if (event.target.innerHTML === "5") {
      setActive({
        one: false,
        two: false,
        three: false,
        four: false,
        five: true,
      });
    }
  };
  return (
    <div className={styles.circleContainer}>
      <button
        onClick={handleClick}
        className={`${
          active.one ? `${styles.circle} ${styles.active}` : styles.circle
        } ${HeaderStyles.para}`}
      >
        1
      </button>
      <button
        onClick={handleClick}
        className={`${
          active.two ? `${styles.circle} ${styles.active}` : styles.circle
        } ${HeaderStyles.para}`}
      >
        2
      </button>
      <button
        onClick={handleClick}
        className={`${
          active.three ? `${styles.circle} ${styles.active}` : styles.circle
        } ${HeaderStyles.para}`}
      >
        3
      </button>
      <button
        onClick={handleClick}
        className={`${
          active.four ? `${styles.circle} ${styles.active}` : styles.circle
        } ${HeaderStyles.para}`}
      >
        4
      </button>
      <button
        onClick={handleClick}
        className={`${
          active.five ? `${styles.circle} ${styles.active}` : styles.circle
        } ${HeaderStyles.para}`}
      >
        5
      </button>
    </div>
  );
};
// console.log(backgroundColor);

export default Main;
