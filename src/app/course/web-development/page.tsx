import styles from "./CoursePage.module.css";
import Breadcrumb from "./components/Breadcrumb";
import CourseHero from "./components/CourseHero";
import WhatYouLearn from "./components/WhatYouLearn";
import Curriculum from "./components/Curriculum";
import CourseSidebar from "./components/CourseSidebar";

export default function WebDevelopmentCourse() {
  return (
    <div className={styles.page}>
      <Breadcrumb />

      <CourseHero />

      <section className={styles.content}>
        <div className={styles.left}>
          <WhatYouLearn />
          <Curriculum />
        </div>

        <CourseSidebar />
      </section>
    </div>
  );
}
