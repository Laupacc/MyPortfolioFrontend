import { useEffect, useState } from "react";
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

function About() {
  return (
    <>
      <div className={`${styles.container} ${styles.aboutPage}`}>
        <div className={styles.textZone}>
          <p className={styles.title}>My kinda skills</p>
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
    </>
  );
}

export default About;
