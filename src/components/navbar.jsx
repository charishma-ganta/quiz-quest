import { Link } from "react-router-dom";
import styles from "./navbar.module.css"
export default function Navbar(){
    return(
        <div className={styles.container}>
            <div className={styles.home}>
               <Link className={styles.navLink} to="/">Home</Link>
            </div>

            <div className={styles.start}>
                <Link className={styles.navLink} to="/quizsetup">Start-Quiz</Link>
            </div>

            <div className={styles.dashboard}>
                <Link className={styles.navLink} to="/dashboard">Dashboard</Link>
            </div>
            
        </div>
    );
}