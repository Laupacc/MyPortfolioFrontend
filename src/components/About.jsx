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
import { SiTailwindcss } from "react-icons/si";
import { useMediaQuery } from "react-responsive";

function About() {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className={isDesktop ? styles.fadeDesktop : styles.fadeMobile}>
        <Fade {...(isDesktop ? { right: true } : { bottom: true })}>
          <div className={styles.main}>
            <div className={styles.container}>
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
                    <SiTailwindcss color="#37BCF8" size={160} />
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
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
export default About;
