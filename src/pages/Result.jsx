import { useLocation } from "react-router-dom";
import styles from "./Result.module.css";
export default function Result(){
    const {state} = useLocation();
    const wrongCount = state.questions.length - state.score;
    const correctCount = state.score;
    return(
        <div className={styles.container}>
            <h1>Result page</h1>
            <p><b>🎉“Quiz Completed Successfully!”</b></p>
            <p>Score : {state.score}</p>
            <p>Total Questions : {state.questions.length}</p>
            <p>Correct Answers: {correctCount}</p>
            <p>Wrong Answers: {wrongCount}</p>
        </div>
    );
}