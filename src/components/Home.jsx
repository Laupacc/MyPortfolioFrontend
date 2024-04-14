import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FcNews, FcSurvey, FcRules, FcDocument } from "react-icons/fc";

function Home() {
  const ResumePDF = "/WebDeveloperCV.pdf";
  return (
    <>
      <div className={styles.backgroundImage} />
      <div className={styles.contentWrapper}>
        <main className={styles.main}>
          {/* <h1 className={styles.title}>Welcome to my website!</h1> */}
        </main>
        <Link
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
          className={styles.link}
        >
          <FcDocument className={styles.icon} />
          My Resume
        </Link>
      </div>
    </>
  );
}

export default Home;
