import styles from "../CoursePage.module.css";

const modules = [
  "Introduction to Web Development",
  "Advanced HTML & CSS",
  "JavaScript Essentials",
  "React Basics and Advanced Concepts",
  "Backend Development with Node.js & Express",
  "User Authentication and Authorization",
  "Final Capstone Project",
];

export default function Curriculum() {
  return (
    <div className={styles.card}>
      <h2>Course Curriculum Breakdown</h2>

      {modules.map((title, i) => (
        <details key={i} className={styles.module}>
          <summary className={styles.moduleSummary}>
            Module {i + 1}: {title}
          </summary>
        </details>
      ))}
    </div>
  );
}
