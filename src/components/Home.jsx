import styles from "../styles/Home.module.css";
import Link from "next/link";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function Home() {
  return (
    <>
      <div className={styles.backgroundImage} />
      <div className={styles.contentWrapper}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to my website!</h1>
        </main>
      </div>
    </>
  );
}

export default Home;
