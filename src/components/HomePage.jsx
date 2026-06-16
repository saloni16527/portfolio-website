import "./style.css"
import Navbar from "./Navbar";
import me from "../assets/me.jpg";
import styles from "./homepage.module.css"

function HomePage () {
    return <>
    <main className={styles.home} id="home">
    <main className={styles['main']}>
     <div className={styles['split-text-container']}>
    <span className= {`${styles['text-part']} ${styles['left']}`}>Hi,</span>
    <span className={`${styles['text-part']}  ${styles['right']}`}>Myself SALONI</span>
    </div>
   
    <div className={styles['me']}>
    <h3>I'm Computer Science student,Just a Beginner in Web Development,
        Undergraduate B.TECH Student Focused on Frontend Technologies (HTML/CSS/JS).</h3>
   <button className={`${styles['btn']}  ${styles['btn-pulse']}`}>Contact me</button>
   </div>
    <p>
    <a href="#" className="icon"><i id="face" class="fa-brands fa-square-facebook"></i></a>
    <a href="#" className="icon"><i id="in" class="fa-brands fa-square-instagram"></i></a>
    <a href="#" className="icon"><i id="li" class="fa-brands fa-linkedin"></i></a>
    <a href="#" className="icon"><i id="tw" class="fa-brands fa-square-twitter"></i></a>
    </p>
    </main>
    <img src={me} className={styles['pic']}/>
    </main>
    </>
}

export default HomePage;