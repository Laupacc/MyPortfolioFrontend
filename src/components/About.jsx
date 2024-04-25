import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/About.module.css";
import Fade from "react-reveal/Fade";
import Sidebar from "./Sidebar";

function About() {
  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <Fade right>
          <div className={styles.container}>
            <div className={styles.wavy}>
              <span style={{ "--i": 1 }}>A</span>
              <span style={{ "--i": 2 }}>b</span>
              <span style={{ "--i": 3 }}>o</span>
              <span style={{ "--i": 4 }}>u</span>
              <span style={{ "--i": 5 }}>t</span>
            </div>
            <div className={styles.aboutText}>
              I have a background in anthropology and project management,
              co-founded a coffee store but now specialize in full-stack
              development. Combining an enthusiasm for technology and a knack
              for business, I approach each project with a fresh and distinctive
              outlook.
            </div>

            <div className={styles.stageCubeCont}>
              <div className={styles.cubeSpinner}>
                <div className={styles.face1}>
                  <FontAwesomeIcon icon={faNode} color="#4B8BBE" />
                </div>
                <div className={styles.face2}>
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className={styles.face3}>
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className={styles.face4}>
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className={styles.face5}>
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className={styles.face6}>
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
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
