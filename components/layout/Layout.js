import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CarShop</h2>
          <p>Choose an by your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>CarShop | Next.js Courses &copy;</footer>
    </>
  );
}

export default Layout;
