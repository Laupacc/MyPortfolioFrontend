import styles from "../styles/Projects.module.css";
import projectsDataFrench from "../data/projectsDataFrench.json";
import projectsData from "../data/projectsData.json";
import { DeviceFrameset } from "react-device-frameset";
import Fade from "react-reveal/Fade";
import "react-device-frameset/styles/marvel-devices.min.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { Category } from "@mui/icons-material";

function Projects() {
  const { t, i18n } = useTranslation();
  const currentProjectsData =
    i18n.language === "fr" ? projectsDataFrench : projectsData;

  const [selectedCategory, setSelectedCategory] = useState("MOBILE");

  return (
    <>
      <main
        className={selectedCategory === "WEB" ? styles.main : styles.mainPhone}
      >
        {/* Top Buttons */}
        <div className={styles.buttonContainer}>
          {/* Button MOBILE */}
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
          {/* Button WEB */}
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
        </div>

        {selectedCategory === "WEB" && (
          <div className={styles.swipe}>
            Swipe for more projects{" "}
            <BsArrowRight className={styles.arrow} size={25} />
          </div>
        )}

        {/* Desktop Version */}
        <Fade right>
          <div className={styles.webOnly}>
            <div className={styles.container}>
              {/* Web Apps */}
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

              {/* Mobile Apps */}
              {selectedCategory === "MOBILE" && (
                <div className={styles.phoneContainer}>
                  {currentProjectsData.phoneProjects.map((project) => (
                    <div className={styles.phonecard} key={project.id}>
                      <DeviceFrameset device="iPhone X" zoom={"60%"}>
                        {project.videoUrl ? (
                          <video
                            src={project.videoUrl}
                            width="100%"
                            height="100%"
                            autoPlay
                            controls
                            loop
                            alt={project.title}
                            style={{ objectFit: "fill" }}
                            onError={(e) => {
                              console.error(
                                `Error loading video: ${project.videoUrl}`,
                                e
                              );
                              console.error("Error details:", {
                                type: e.type,
                                target: e.target,
                                currentTarget: e.currentTarget,
                                eventPhase: e.eventPhase,
                                isTrusted: e.isTrusted,
                                timeStamp: e.timeStamp,
                              });
                            }}
                          />
                        ) : (
                          <img
                            src={project.imageUrl}
                            width="100%"
                            height="100%"
                            alt={project.title}
                          />
                        )}
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

        {/* Mobile Version */}
        <Fade bottom>
          <div className={styles.mobileOnly}>
            <div className={styles.smallContainer}>
              {/* Web Apps */}
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

              {/* Mobile Apps */}
              {selectedCategory === "MOBILE" && (
                <div class={styles.smallPhoneContainer}>
                  {currentProjectsData.phoneProjects.map((project) => (
                    <div className={styles.phone} key={project.id}>
                      {project.videoUrl ? (
                        <video
                          src={project.videoUrl}
                          autoPlay
                          controls
                          loop
                          alt={project.title}
                        />
                      ) : (
                        <img src={project.imageUrl} alt={project.title} />
                      )}
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
