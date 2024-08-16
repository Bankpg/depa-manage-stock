import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/dashboard"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Dashboard <span>-&gt;</span>
          </h2>
          <p>Click</p>
        </a>

        <a
          href="/bank2"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Bank2<span>-&gt;</span>
          </h2>
          <p>not open</p>
        </a>

        <a
          href="/bank3"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Bank3<span>-&gt;</span>
          </h2>
          <p>Click</p>
        </a>

        <a
          href="/bank4"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Bank4<span>-&gt;</span>
          </h2>
          <p>Click</p>
        </a>
      </div>
    </main>
  );
}
