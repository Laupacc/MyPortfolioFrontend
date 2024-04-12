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
      <div className="App">
        <div>
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to my wesbite!</h1>
          </main>
          <About />
          <Projects />
          <Contact />
        </div>
        {init && (
          <Particles
            className={styles.backgroundImage}
            options={particlesOptions}
          />
        )}
      </div>
    </>
  );
}

export default Home;
