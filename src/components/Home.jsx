import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Sidebar from "../components/Sidebar";
import {
  CirclesWithBarm,
  DNA,
  RotatingTriangles,
  Watch,
} from "react-loader-spinner";
import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

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
                <span style={{ "--i": 1 }}>H</span>
                <span style={{ "--i": 2 }}>e</span>
                <span style={{ "--i": 3 }}>l</span>
                <span style={{ "--i": 4 }}>l</span>
                <span style={{ "--i": 5 }}>o</span>
              </div>
              <div className={styles.maintext}>
                I'm Laura, FullStack JavaScript Web & Mobile Developer.
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}

export default Home;
