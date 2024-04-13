import styles from "../styles/Sidebar.module.css";
import * as React from "react";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.linkWrapper}>
          <a
            href="/"
            className={`${styles.link} ${
              router.pathname === "/" && styles.activeLink
            }`}
          >
            <Typography className={styles.menutext}>Home</Typography>
          </a>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="/about"
            className={`${styles.link} ${
              router.pathname === "/about" && styles.activeLink
            }`}
          >
            <Typography className={styles.menutext}>About</Typography>
          </a>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="/projects"
            className={`${styles.link} ${
              router.pathname === "/projects" && styles.activeLink
            }`}
          >
            <Typography className={styles.menutext}>Projects</Typography>
          </a>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="/contact"
            className={`${styles.link} ${
              router.pathname === "/contact" && styles.activeLink
            }`}
          >
            <Typography className={styles.menutext}>Contact</Typography>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
