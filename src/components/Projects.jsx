import styles from "../styles/Projects.module.css";
import Fade from "react-reveal/Fade";
import projectsDataFr from "../data/projectsDataFr.json";
import projectsData from "../data/projectsData.json";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();
  const currentProjectsData =
    i18n.language === "fr" ? projectsDataFr : projectsData;

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
              {t("projects.btn.web")}
            </a>
            <a
              className={styles.topbuttons}
              onClick={() => setSelectedCategory("MOBILE")}
            >
              {t("projects.btn.mobile")}
            </a>
          </div>
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
                        <a
                          className={styles.button}
                          href={project.demoLink}
                          target="_blank"
                        >
                          {t("projects.btn.toSite")}
                        </a>
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

          <div className={styles.mobileOnly}>
            {selectedCategory === "WEB" && (
              <div className={styles.containerweb}>
                {currentProjectsData.webProjects.map((project) => (
                  <div className={styles.computer}>
                    <div className={styles.stand}>
                      <div
                        className={styles.monitor}
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                        // <iframe src={project.demoLink} width="100%" height="100%" />
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
                        {t("projects.btn.toSite")}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {selectedCategory === "MOBILE" && (
              <div class={styles.containerphone}>
                {currentProjectsData.phoneProjects.map((project) => (
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
