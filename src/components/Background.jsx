// Home.js

import styles from "../styles/Background.module.css";
import Link from "next/link";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <div className={styles.backgroundImage}>
        {init && <Particles options={particlesOptions} />}
      </div>
    </>
  );
}

export default Background;
