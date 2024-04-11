import styles from "../styles/Sidebar.module.css";
import Link from "next/link";

function Sidebar() {
  return (
    <div>
      <main className={styles.main}>
        <Link href="/">
          <p className={styles.link}>Home</p>
        </Link>
        <Link href="/about">
          <p className={styles.link}>About</p>
        </Link>
        <Link href="/projects">
          <p className={styles.link}>Projects</p>
        </Link>
        <Link href="/contact">
          <p className={styles.link}>Contact</p>
        </Link>
      </main>
    </div>
  );
}
export default Sidebar;
