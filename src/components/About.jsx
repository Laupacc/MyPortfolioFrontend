import styles from "../styles/About.module.css";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import {
  FaNode,
  FaHtml5,
  FaCss3,
  FaReact,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.main}>
        <Fade bottom>
          <div className={styles.container}>
            {/* <div className={styles.under}> */}
            <div className={styles.wavy}>
              <span style={{ "--i": 1 }}>{t("about.title.1")}</span>
              <span style={{ "--i": 2 }}>{t("about.title.2")}</span>
              <span style={{ "--i": 3 }}>{t("about.title.3")}</span>
              <span style={{ "--i": 4 }}>{t("about.title.4")}</span>
              <span style={{ "--i": 5 }}>{t("about.title.5")}</span>
            </div>
            <div className={styles.aboutText}>{t("about.description")}</div>

            <div className={styles.stageCubeCont}>
              <div className={styles.cubeSpinner}>
                <div className={styles.face1}>
                  <FaNode color="#4B8BBE" size={160} />
                </div>
                <div className={styles.face2}>
                  <FaHtml5 color="#F06529" size={160} />
                </div>
                <div className={styles.face3}>
                  <FaCss3 color="#28A4D9" size={160} />
                </div>
                <div className={styles.face4}>
                  <FaReact color="#5ED4F4" size={160} />
                </div>
                <div className={styles.face5}>
                  <FaJsSquare color="#EFD81D" size={160} />
                </div>
                <div className={styles.face6}>
                  <FaGitAlt color="#EC4D28" size={160} />
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </Fade>
      </div>
    </>
  );
}

export default About;
