import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchCategories} from "../services/api";
import styles from "./QuizSetup.module.css";
export default function QuizSetup(){
    const [categories, setCategories] = useState([]);
    const [difficulty, setDifficulty] = useState("");
    const [category,setCategory] = useState("");


    const navigate = useNavigate();
    function handleClick(){
        navigate("/quiz",{
            state:{
                category,
                difficulty
            }
        });
    }

    useEffect(()=>{
        async function loadCategories(){
            const data = await fetchCategories();
            setCategories(data);
        }

        loadCategories();
    },[]);
    return(
        <div className={styles.container}>

          <div className={styles.card}>
            <h1 className={styles.heading}>Start Your Learning Adventure</h1>

            <div>
            
            <select 
               value = {category}
               onChange={(e)=>setCategory(e.target.value)}
            >

                <option value="">Select Category</option>
                 
              {categories.map((cat)=>(
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            </div>
            

            <div>
            <select 
               value = {difficulty}
               onChange={(e)=>setDifficulty(e.target.value)}
            >

                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            
            
            </div>
            <div>
            <button onClick={handleClick}
            disabled={!category || !difficulty}>Start Quiz</button>
            </div>
          </div>
        </div>
    );
}       