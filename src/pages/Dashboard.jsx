import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("quizResults")) || [];
    setResults(data);
  }, []);

  const bestScore = results.reduce(
    (max, r) => (r.score > max ? r.score : max),
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>📊 Dashboard</h1>

      {results.length === 0 ? (
        <h3 className={styles.empty}>⁕ No quiz attempts yet </h3>
      ) : (
        <>
          
          <div className={styles.summary}>
            <h3>Total Attempts: {results.length}</h3>
            <h3>Best Score: {bestScore}</h3>
          </div>

          
          <div className={styles.list}>
            {results
              .slice()
              .reverse()
              .map((r, index) => (
                <div key={index} className={styles.card}>
                  <h3>Quiz #{results.length - index}</h3>
                  <p>Category: {r.category}</p>
                  <p>Difficulty: {r.difficulty}</p>
                  <p>
                    Score: {r.score} / {r.total}
                  </p>
                  <p>Date: {r.date}</p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}