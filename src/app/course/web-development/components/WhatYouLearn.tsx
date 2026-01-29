import styles from "../CoursePage.module.css";

export default function WhatYouLearn() {
  return (
    <div className={styles.card}>
      <h2>What you’ll Learn</h2>
      <ul>
        <li>Prepare for Industry Certification Exam</li>
        <li>Over 25 Engaging Lab Exercises</li>
        <li>HTML, CSS & JavaScript</li>
        <li>Client-side Programming</li>
        <li>Database Development with MySQL</li>
        <li>Certification of Competence</li>
      </ul>
    </div>
  );
}
