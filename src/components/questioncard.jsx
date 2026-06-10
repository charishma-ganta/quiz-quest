import Timer from "./timer";
import styles from "./questioncard.module.css";

export default function QuestionCard({questions,currentQuestion,answers,handleAnswer,setCurrentQuestion,score,selectedanswer}){
   if (!questions || !answers) {
  return <h2>Loading...</h2>;
}

    return(
        <div className={styles.container}>
            
            <Timer currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} questions={questions} score={score}/>
            
            <div className={styles.questionNo}>
                <h2>Question : {currentQuestion + 1}/{questions.length}</h2>
            </div>
            
            <div className={styles.question}>
            <h2>{questions[currentQuestion]?.question}</h2>
            
            <div className= {styles.options}>
            {
                (answers|| []).map((answer)=>(

                    <label key={answer} className={`${styles.option} ${selectedanswer === answer ? styles.selected : ""}`}>

                          <input type="radio" name={`question-${currentQuestion}`} value={answer} checked={selectedanswer===answer} onChange={()=> handleAnswer(answer)} /> {answer}


                    </label>
                  
    
                ))
            }
            </div>

            </div>
        </div>
    );
}