import styles from "../styles/Projects.module.css";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import projectsData from "../data/projectsData.json";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

import { IPhoneX } from "react-device-frames";

function Projects() {
  return (
    <>
      <p className={styles.scrollText}>Scroll ⇨ for more projects</p>
      <main className={styles.main}>
        <Fade right>
          <div className={styles.webContainer}>
            {projectsData.webProjects.map((project) => (
              <div className={styles.card}>
                <DeviceFrameset device="MacBook Pro" zoom={"55%"}>
                  <iframe src={project.demoLink} width="100%" height="100%" />
                  <img className={styles.imageUrl} src={project.imageUrl} />
                </DeviceFrameset>
                <div className={styles.content}>
                  <div className={styles.title}>{project.title}</div>
                  <div className={styles.subtitle}>{project.subtitle}</div>
                  <Button
                    className={styles.demoLink}
                    href={project.demoLink}
                    target="_blank"
                  >
                    To website
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.phoneContainer}>
            {projectsData.phoneProjects.map((project) => (
              <div className={styles.card}>
                <DeviceFrameset device="iPhone X" zoom={"60%"}>
                  <img src={project.imageUrl} width="100%" height="100%" />
                </DeviceFrameset>
                <div className={styles.content}>
                  <div className={styles.title}>{project.title}</div>
                  <div className={styles.subtitle}>{project.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* <div class={styles.containerphone}>
            <div class={styles.phone}>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1543663/cp-iphonex-1125x2436.png" />
            </div>
          </div> */}

          {/* <IPhoneX
            screenshot={"https://i.imgur.com/oLOEoYv.png"}
            height={500}
          /> */}

          {/* {projectsData.map((project) => (
            <div className={styles.computer}>
              <div className={styles.stand}>
                <div
                  className={styles.monitor}
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                ></div>
              </div>
              <div>{project.title}</div>
              <div>{project.subtitle}</div>
              <Button href={project.demoLink} target="_blank">
                Demo
              </Button>
            </div>
          ))} */}
        </Fade>
      </main>
    </>
  );
}

export default Projects;
