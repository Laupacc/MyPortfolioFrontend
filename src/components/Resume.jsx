import styles from "../styles/Resume.module.css";
import Link from "next/link";
import { FcNews, FcSurvey, FcRules, FcDocument } from "react-icons/fc";

function Resume() {
  const ResumePDF = "/WebDeveloperCV.pdf";
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
          My Resume
        </Link>
      </div>
    </>
  );
}

export default Resume;
