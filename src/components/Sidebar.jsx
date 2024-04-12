import styles from "../styles/Sidebar.module.css";
import React from "react";
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
            <Typography>Home</Typography>
          </a>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="/about"
            className={`${styles.link} ${
              router.pathname === "/about" && styles.activeLink
            }`}
          >
            <Typography>About</Typography>
          </a>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="/projects"
            className={`${styles.link} ${
              router.pathname === "/projects" && styles.activeLink
            }`}
          >
            <Typography>Projects</Typography>
          </a>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="/contact"
            className={`${styles.link} ${
              router.pathname === "/contact" && styles.activeLink
            }`}
          >
            <Typography>Contact</Typography>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
