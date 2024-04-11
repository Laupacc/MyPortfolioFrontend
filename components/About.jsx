import { useEffect, useState } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
// import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/About.module.css";

function About() {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState(styles.textAnimate);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass(styles.textAnimateHover);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`${styles.container} ${styles.aboutPage}`}>
        <div className={styles.textZone}>
          <h1>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            /> */}
          </h1>
          <p>
            I'm a Computer Science Undergrad student at Indian Institute of
            Information Technology and Management, Gwalior.
          </p>
          <p>
            I'm a very ambitious Full stack developer. I love Automating tasks.
            Also experienced with Natural Language Processing, Computer Vision.
          </p>
          <p>
            I'm also a competitive coder. Python is my favorite language but
            when it comes to competitive coding, I prefer to use C++.
          </p>
          <p>In love with Open Source.</p>
          <p>
            If I need to define myself in one sentence that would be an Anime
            Lover, and tech-obsessed!!!
          </p>
        </div>

        <div className={styles.stageCubeCont}>
          <div className={styles.cubeSpinner}>
            <div className={styles.face1}>
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
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
      <Loader type="pacman" />
    </>
  );
}

export default About;
