import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FcNews, FcSurvey, FcRules, FcDocument } from "react-icons/fc";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.maintext}>
            Hi, I'm Laura, junior web developer.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
