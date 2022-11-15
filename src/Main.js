import React from "react";
import styles from "./Main.module.css";
import HeaderStyles from "./Header.module.css";
import { useState } from "react";

const Main = () => {
  const arr = [1, 2, 3, 4, 5];
  const [backgroundColor, setBackgroundColor] = useState("#262E38");
  console.log(onClickStyles);
  console.log(backgroundColor);
  const handleClick = () => {
    onClickStyles.backgroundColor === "#262E38"
      ? setBackgroundColor("#FC7614")
      : setBackgroundColor("#262E38");
  };
  return (
    <div className={styles.circleContainer}>
      {arr.map((item) => {
        return (
          <span
            key={item}
            onClick={handleClick}
            className={`${styles.circle} ${HeaderStyles.para} ${onClickStyles.backgroundColor}`}
            // styles={{ ...styles, backgroundColor: "orange" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
// console.log(backgroundColor);

export default Main;

const onClickStyles = {
  backgroundColor: "#262E38",
};
