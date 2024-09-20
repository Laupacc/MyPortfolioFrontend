import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

function Home() {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);
  const isDesktopQuery = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDesktop(isDesktopQuery);
    }, 150); // delay in milliseconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [isDesktopQuery]);

  return (
    <div className={styles.main}>
      <div className={isDesktop ? styles.fadeDesktop : styles.fadeMobile}>
        <Fade {...(isDesktop ? { right: true } : { bottom: true })}>
          <div className={styles.container}>
            <div className={styles.topText}>{t("home.topText")}</div>
            <div className={styles.wavy}>
              <span style={{ "--i": 1 }}>{t("home.title.1")}</span>
              <span style={{ "--i": 2 }}>{t("home.title.2")}</span>
              <span style={{ "--i": 3 }}>{t("home.title.3")}</span>
              <span style={{ "--i": 4 }}>{t("home.title.4")}</span>
              <span style={{ "--i": 5 }}>{t("home.title.5")}</span>
            </div>
            <div className={styles.maintext}>{t("home.description")}</div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
