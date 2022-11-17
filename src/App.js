import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./App.module.css";
import thankYou from "./images/illustration-thank-you.svg";
import { useState } from "react";
import SubmitPage from "./SubmitPage";

function App() {
  const [active, setActive] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const [button, setButton] = useState(true);
  const [number, setNumber] = useState(0);

  return (
    <div className={styles.app}>
      {button ? (
        <div>
          <Header imgUrl={thankYou} />
          <Main
            active={active}
            setActive={setActive}
            number={number}
            setNumber={setNumber}
          />
          <Footer button={button} setButton={setButton} />
        </div>
      ) : (
        <SubmitPage number={number} />
      )}
    </div>
  );
}

export default App;
