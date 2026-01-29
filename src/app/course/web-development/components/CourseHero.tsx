import styles from "../CoursePage.module.css";

export default function CourseHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          Become a Certified Web Developer:<br />
          HTML, CSS and JavaScript
        </h1>

        <p>
          This comprehensive course will take you through the essential skills
          needed to become a successful full-stack developer.
        </p>

        <div className={styles.rating}>
          ⭐⭐⭐⭐⭐ <span>5.0</span>
          <small>2,500+ enrolled</small>
        </div>

        <div className={styles.buttons}>
          <button className={styles.primary}>Test</button>
          <button className={styles.secondary}>Learn it</button>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img src="/images/hero6.jpg" alt="Web Development" />
      </div>
    </section>
  );
}
