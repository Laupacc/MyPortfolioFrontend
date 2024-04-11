import styles from "../styles/Home.module.css";
import Link from "next/link";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! vvv</a>
          <div>
            <Link href="/about">
              <span className={styles.link}>About</span>
            </Link>
          </div>
        </h1>
      </main>
    </div>
  );
}
export default Home;
