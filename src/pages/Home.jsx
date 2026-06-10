import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🚀 Quiz Quest </h1>

        <p className={styles.subtitle}>
          Test your knowledge, track your progress and improve every day.
        </p>

        <div className={styles.buttons}>
          <Link to="/quizsetup" className={styles.startBtn}>
            Start Quiz
          </Link>

          <Link to="/dashboard" className={styles.dashboardBtn}>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}