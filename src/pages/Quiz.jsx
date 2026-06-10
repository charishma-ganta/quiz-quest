import { useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import {fetchQuestions} from "../services/api"
import { useEffect, useMemo, useState } from "react";
import styles from "./Quiz.module.css"; 
export default function Quiz(){
    const [selectedanswer,setSelectedanswer] = useState("");
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const[score,setScore] = useState(0);
    

    const location = useLocation();
    const category = location.state?.category;
    const difficulty = location.state?.difficulty;

    const navigate = useNavigate();

    useEffect(()=>{
        async function loadData() {

           if (!category || !difficulty) return;
            const data = await fetchQuestions(category,difficulty);
            setQuestions(data?.results||[]);
        }

        loadData();
    },[category, difficulty]);
    

    const answers = useMemo(()=>{
        if(!questions[currentQuestion]) return[];

        return [questions[currentQuestion].correct_answer,...questions[currentQuestion].incorrect_answers].sort(()=>Math.random() - 0.5);
    },[questions,currentQuestion]) ;

    function handleAnswer(selectedAnswer){
       setSelectedanswer(selectedAnswer);
       
        
    }
    

    function handleNext() {
        if (currentQuestion >= questions.length) return;
      if (
             selectedanswer === questions[currentQuestion].correct_answer
         ) {
                setScore((prev) => prev + 1);
              }

            setSelectedanswer("");
            setCurrentQuestion((prev) => prev + 1);
    }
   

    function handleSubmit() {
  const result = {
    score,
    total: questions.length,
    category,
    difficulty,
    date: new Date().toLocaleString()
  };

  const oldResults =
    JSON.parse(localStorage.getItem("quizResults")) || [];

  localStorage.setItem(
    "quizResults",
    JSON.stringify([...oldResults, result])
  );

  navigate("/result", {
    state: {
      score,
      questions
    }
  });
}

   if (!questions || questions.length === 0 || !questions[currentQuestion]) {
  return <h1>Loading...</h1>;
}

    return(
    <div className={styles.container}>
            
        <div className={styles.card}>
            <div>
            {(currentQuestion < questions.length)?
              <QuestionCard questions={questions} currentQuestion={currentQuestion} answers={answers} handleAnswer={handleAnswer} setCurrentQuestion={setCurrentQuestion} score={score} selectedanswer={selectedanswer} />
              
              : ""


            }
            </div>
            
            <div >
            {(currentQuestion < questions.length - 1)?
             <div className={styles.next}>
                <button className={styles.button} onClick={handleNext}>Next</button>
            </div> :
            <div className={styles.next}>
                <button className={styles.button}  onClick={handleSubmit}>Submit</button>
            </div>

        }
            </div>
        </div>
    </div>
    );
}