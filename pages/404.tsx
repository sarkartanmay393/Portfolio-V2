import styles from "../styles/404.module.css";

export default function NotFoundPage() {
  return (
    <section className={styles.notfound_page}>
      <main className={styles.notfound_page_main}>
        <h1>404: Page not found!</h1>
        <h3>Get back to</h3>
        <a className={styles.ButtonBox} href="/">
          <code className={styles.getBackButton}>/homepage</code>
        </a>
      </main>
    </section>
  );
}
