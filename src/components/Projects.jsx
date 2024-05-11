import styles from "../styles/Projects.module.css";
import projectsDataFrench from "../data/projectsDataFrench.json";
import projectsData from "../data/projectsData.json";
import { DeviceFrameset } from "react-device-frameset";
import Fade from "react-reveal/Fade";
import "react-device-frameset/styles/marvel-devices.min.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

function Projects() {
  const { t, i18n } = useTranslation();
  const currentProjectsData =
    i18n.language === "fr" ? projectsDataFrench : projectsData;

  const [selectedCategory, setSelectedCategory] = useState("WEB");

  return (
    <>
      <main className={styles.main}>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.submitBtn_pushable} ${styles.topBtn}`}
            onClick={() => setSelectedCategory("WEB")}
          >
            <span className={styles.submitBtn_shadow}></span>
            <span className={styles.submitBtn_edge}></span>
            <span className={styles.submitBtn_front}>
              {t("projects.btn.web")}
            </span>
          </button>
          <button
            className={`${styles.submitBtn_pushable} ${styles.topBtn}`}
            onClick={() => setSelectedCategory("MOBILE")}
          >
            <span className={styles.submitBtn_shadow}></span>
            <span className={styles.submitBtn_edge}></span>
            <span className={styles.submitBtn_front}>
              {t("projects.btn.mobile")}
            </span>
          </button>
        </div>
        <Fade right>
          <div className={styles.webOnly}>
            <div className={styles.container}>
              {selectedCategory === "WEB" && (
                <div className={styles.webContainer}>
                  {currentProjectsData.webProjects.map((project) => (
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
                        <div className={styles.button}>
                          <Button
                            href={project.demoLink}
                            target="_blank"
                            className={styles.submitBtn_pushable}
                          >
                            <span className={styles.submitBtn_shadow}></span>
                            <span className={styles.submitBtn_edge}></span>
                            <span className={styles.submitBtn_front}>
                              {t("projects.btn.toSite")}
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedCategory === "MOBILE" && (
                <div className={styles.phoneContainer}>
                  {currentProjectsData.phoneProjects.map((project) => (
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
        </Fade>

        <Fade bottom>
          <div className={styles.mobileOnly}>
            <div className={styles.smallContainer}>
              {selectedCategory === "WEB" && (
                <div className={styles.smallWebContainer}>
                  {currentProjectsData.webProjects.map((project) => (
                    <div className={styles.computer}>
                      <div className={styles.stand}>
                        <div
                          className={styles.monitor}
                          style={{
                            backgroundImage: `url(${project.imageUrl})`,
                          }}
                        >
                          {/* <iframe
                            src={project.demoLink}
                            width="100%"
                            height="100%"
                          /> */}
                        </div>
                      </div>
                      <div className={styles.smallWebContent}>
                        <div className={styles.smallTitle}>{project.title}</div>
                        <div className={styles.smallSubtitle}>
                          {project.subtitle}
                        </div>
                        <div className={styles.smallButton}>
                          <Button
                            className={styles.submitBtn_pushable}
                            href={project.demoLink}
                            target="_blank"
                          >
                            <span className={styles.submitBtn_shadow}></span>
                            <span className={styles.submitBtn_edge}></span>
                            <span className={styles.submitBtn_front}>
                              {t("projects.btn.toSite")}
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedCategory === "MOBILE" && (
                <div class={styles.smallPhoneContainer}>
                  {currentProjectsData.phoneProjects.map((project) => (
                    <div class={styles.phone}>
                      <img src={project.imageUrl} />
                      <div className={styles.smallPhoneContent}>
                        <div className={styles.smallTitle}>{project.title}</div>
                        <div className={styles.smallSubtitle}>
                          {project.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Fade>
      </main>
    </>
  );
}

export default Projects;
