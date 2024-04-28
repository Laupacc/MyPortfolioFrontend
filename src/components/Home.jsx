import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Sidebar from "../components/Sidebar";
import { DNA, RotatingTriangles } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Sidebar />
      {loading ? (
        <DNA
          visible={true}
          height="140"
          width="140"
          ariaLabel="dna-loading"
          wrapperClass={styles.dnaWrapper}
          wrapperStyle={{}}
        />
      ) : (
        <div className={styles.main}>
          <Fade right>
            <div className={styles.container}>
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
      )}
    </>
  );
}

export default Home;
