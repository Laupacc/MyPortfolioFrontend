import styles from "../styles/Sidebar.module.css";
import * as React from "react";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { GiHomeGarage } from "react-icons/gi";
import { BsInfoSquareFill } from "react-icons/bs";
import { LuPalmtree } from "react-icons/lu";
import { TbMessageCode } from "react-icons/tb";

function Sidebar() {
  const router = useRouter();

  const handleLinkClick = (event, path) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.navWrapper}>
          <div className={styles.linkWrapper}>
            <a
              href="/"
              className={`${styles.link} ${
                (router.pathname === "/" || router.pathname === "/") &&
                styles.activeLink
              }`}
              onClick={(e) => handleLinkClick(e, "/")}
            >
              <GiHomeGarage className={styles.icon} />
              <div
                className={`${styles.menutext} ${
                  (router.pathname === "/" || router.pathname === "/") &&
                  styles.activeText
                }`}
              >
                Home
              </div>
            </a>
          </div>
          <div className={styles.linkWrapper}>
            <a
              href="/about"
              className={`${styles.link} ${
                router.pathname === "/about" && styles.activeLink
              }`}
              onClick={(e) => handleLinkClick(e, "/about")}
            >
              <BsInfoSquareFill className={styles.icon} />
              <div
                className={`${styles.menutext} ${
                  router.pathname === "/about" && styles.activeText
                }`}
              >
                About
              </div>
            </a>
          </div>
          <div className={styles.linkWrapper}>
            <a
              href="/projects"
              className={`${styles.link} ${
                router.pathname === "/projects" && styles.activeLink
              }`}
              onClick={(e) => handleLinkClick(e, "/projects")}
            >
              <LuPalmtree className={styles.icon} />
              <div
                className={`${styles.menutext} ${
                  router.pathname === "/projects" && styles.activeText
                }`}
              >
                Projects
              </div>
            </a>
          </div>
          <div className={styles.linkWrapper}>
            <a
              href="/contact"
              className={`${styles.link} ${
                router.pathname === "/contact" && styles.activeLink
              }`}
              onClick={(e) => handleLinkClick(e, "/contact")}
            >
              <TbMessageCode className={styles.icon} />
              <div
                className={`${styles.menutext} ${
                  router.pathname === "/contact" && styles.activeText
                }`}
              >
                Contact
              </div>
            </a>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
}

export default Sidebar;
