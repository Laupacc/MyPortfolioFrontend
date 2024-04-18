import styles from "../styles/Home.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

function Home() {
  const words = "Home".split("");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Fade right>
            <div className={styles.text}>
              {words.map((word, index) => (
                <div className={styles.wordWrapper} key={index}>
                  {word}
                </div>
              ))}
            </div>
            <div className={styles.maintext}>
              Hi, I'm Laura, FullStack JavaScript web & mobile developer.
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home;
