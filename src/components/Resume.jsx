import styles from "../styles/Resume.module.css";
import Link from "next/link";
import { FcNews } from "react-icons/fc";

function Resume() {
  const ResumePDF = "/laurapaccanariCVEng.pdf";
  return (
    <>
      <div>
        <Link
          className={styles.link}
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
        >
          <FcNews className={styles.icon} />
          <span className={styles.text}>My Resume</span>
        </Link>
      </div>
    </>
  );
}

export default Resume;
