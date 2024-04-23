import styles from "../styles/Projects.module.css";
import Fade from "react-reveal/Fade";
import Button from "@mui/material/Button";
import projectsData from "../data/projectsData.json";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { useState } from "react";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");
  return (
    <>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.topbuttons}
          onClick={() => setSelectedCategory("WEB")}
        >
          Web apps
        </Button>
        <Button
          className={styles.topbuttons}
          onClick={() => setSelectedCategory("MOBILE")}
        >
          Mobile apps
        </Button>
      </div>
      <main className={styles.main}>
        <Fade right>
          <div className={styles.container}>
            {selectedCategory === "WEB" && (
              <div className={styles.webContainer}>
                {projectsData.webProjects.map((project) => (
                  <div className={styles.webcard}>
                    <DeviceFrameset
                      device="MacBook Pro"
                      zoom={"50%"}
                      key={project.id}
                    >
                      <iframe
                        src={project.demoLink}
                        width="100%"
                        height="100%"
                      />
                      <img
                        className={styles.imageUrl}
                        src={project.imageUrl}
                        alt={project.title}
                      />
                    </DeviceFrameset>

                    <div className={styles.content}>
                      <div className={styles.title}>{project.title}</div>
                      <div className={styles.subtitle}>{project.subtitle}</div>
                      <Button
                        className={styles.button}
                        href={project.demoLink}
                        target="_blank"
                      >
                        To website
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedCategory === "MOBILE" && (
              <div className={styles.phoneContainer}>
                {projectsData.phoneProjects.map((project) => (
                  <div className={styles.phonecard} key={project.id}>
                    <DeviceFrameset device="iPhone X" zoom={"60%"}>
                      <img
                        src={project.imageUrl}
                        width="100%"
                        height="100%"
                        alt={project.title}
                      />
                    </DeviceFrameset>
                    <div className={styles.content}>
                      <div className={styles.title}>{project.title}</div>
                      <div className={styles.subtitle}>{project.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* <div class={styles.containerphone}>
            <div class={styles.phone}>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1543663/cp-iphonex-1125x2436.png" />
            </div>
          </div> */}

          {/* {projectsData.webProjects.map((project) => (
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
