import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./timer.module.css";
export default function Timer({currentQuestion,setCurrentQuestion,questions,score}){
    const navigate = useNavigate();
    const [timeLeft,setTimeLeft] = useState(30);


    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft((prev)=>prev - 1);
        },1000);

        return()=>clearInterval(timer);
    },[currentQuestion]);


    useEffect(()=>{
        if(timeLeft ===0){
            if(currentQuestion < questions.length - 1){
                  setCurrentQuestion((prev)=> prev + 1);
            }else{
                
                navigate("/result",{
                    state: {
                        score,
                        questions
                    }
                })
            }
            
        }
    },[timeLeft]);

   

    useEffect(()=>{
        setTimeLeft(30);
    },[currentQuestion]);

    
    return(
        <div className={styles.timer}>
            <h3>Time Left : {timeLeft}s </h3>
        </div>
    );
}