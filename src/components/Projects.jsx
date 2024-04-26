import styles from "../styles/Projects.module.css";
import Fade from "react-reveal/Fade";
import projectsData from "../data/projectsData.json";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");

  return (
    <>
      <main className={styles.main}>
        <Sidebar />
        <Fade right>
          <div className={styles.buttonContainer}>
            <a
              className={styles.topbuttons}
              onClick={() => setSelectedCategory("WEB")}
            >
              Web apps
            </a>
            <a
              className={styles.topbuttons}
              onClick={() => setSelectedCategory("MOBILE")}
            >
              Mobile apps
            </a>
          </div>
          <div className={styles.webOnly}>
            <div className={styles.container}>
              {selectedCategory === "WEB" && (
                <div className={styles.webContainer}>
                  {projectsData.webProjects.map((project) => (
                    <div className={styles.webcard} key={project.id}>
                      <DeviceFrameset device="MacBook Pro" zoom={"50%"}>
                        <iframe
                          src={project.demoLink}
                          width="100%"
                          height="100%"
                        />
                      </DeviceFrameset>

                      <div className={styles.content}>
                        <div className={styles.title}>{project.title}</div>
                        <div className={styles.subtitle}>
                          {project.subtitle}
                        </div>
                        <a
                          className={styles.button}
                          href={project.demoLink}
                          target="_blank"
                        >
                          To website
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedCategory === "MOBILE" && (
                <div className={styles.phoneContainer}>
                  {projectsData.phoneProjects.map((project) => (
                    <div className={styles.phonecard} key={project.id}>
                      <DeviceFrameset device="iPhone X" zoom={"50%"}>
                        <img
                          src={project.imageUrl}
                          width="100%"
                          height="100%"
                          alt={project.title}
                        />
                      </DeviceFrameset>
                      <div className={styles.content}>
                        <div className={styles.title}>{project.title}</div>
                        <div className={styles.subtitle}>
                          {project.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.mobileOnly}>
            {selectedCategory === "WEB" && (
              <div className={styles.containerweb}>
                {projectsData.webProjects.map((project) => (
                  <div className={styles.computer}>
                    <div className={styles.stand}>
                      <div
                        className={styles.monitor}
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                      ></div>
                    </div>
                    <div className={styles.smallContent}>
                      <div className={styles.title}>{project.title}</div>
                      <div className={styles.subtitle}>{project.subtitle}</div>
                      <a
                        className={styles.button}
                        href={project.demoLink}
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {selectedCategory === "MOBILE" && (
              <div class={styles.containerphone}>
                {projectsData.phoneProjects.map((project) => (
                  <div class={styles.phone}>
                    <img src={project.imageUrl} />
                    <div className={styles.smallContentPhone}>
                      <div className={styles.title}>{project.title}</div>
                      <div className={styles.subtitle}>{project.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Fade>
      </main>
    </>
  );
}

export default Projects;
