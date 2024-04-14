import styles from "../styles/Home.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Fade right>
            <div className={styles.maintext}>
              Hi, I'm Laura, junior web developer.
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home;
