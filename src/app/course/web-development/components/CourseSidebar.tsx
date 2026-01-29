import styles from "../CoursePage.module.css";

export default function CourseSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <h3>Course Features</h3>
        <ul>
          <li>Beginner to Advanced</li>
          <li>80+ hours of video content</li>
          <li>15 modules · 150+ lessons</li>
          <li>5 real-world projects</li>
          <li>Professional Certificate</li>
          <li>Lifetime access</li>
        </ul>

        <button className={styles.buy}>Buy Now</button>
      </div>
    </aside>
  );
}
