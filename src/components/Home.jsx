import styles from "../styles/Home.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Home() {
  // const words = "Hello".split("");

  return (
    <>
      <div className={styles.main}>
      <Sidebar />
        <Fade right>
          <div className={styles.container}>
            <div className={styles.wavy}>
              <span style={{ "--i": 1 }}>H</span>
              <span style={{ "--i": 2 }}>e</span>
              <span style={{ "--i": 3 }}>l</span>
              <span style={{ "--i": 4 }}>l</span>
              <span style={{ "--i": 5 }}>o</span>
            </div>
            <div className={styles.maintext}>
              I'm Laura, FullStack JavaScript Web & Mobile Developer.
            </div>
            {/* <div className={styles.text}>
              {words.map((word, i) => (
                <div className={styles.wordWrapper} key={i}>
                  {word}
                </div>
              ))}
            </div> */}
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Home;
