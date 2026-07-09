import "./style.css"
import Navbar from "./Navbar";
import styles from "./skill.module.css"

function Skills () {
    return  <>
    <h1 className={styles.skill} id="skill">Skills</h1>
    <div className={styles['container1']}>
        <div className={`${styles['cursor-box']} ${styles['html']}`}>
            <a className={styles['font']}><i class="fa-brands fa-html5"></i></a>
            <h3>HTML5</h3>
        </div>
        <div className={`${styles['cursor-box']} ${styles['css']}`}>
            <a className={styles['font']}><i class="fa-brands fa-css3"></i></a>
            <h3>CSS3</h3>
            </div>
        <div className={`${styles['cursor-box']} ${styles['javascript']}`}>
            <a className={styles['font']}><i class="fa-brands fa-js"></i></a>
            <h3>JAVASCRIPT</h3>
            </div>
        </div>
    
        
        <div className={styles['container2']}>    
        <div className={`${styles['cursor-box']} ${styles['react']}`}>
            <a className={styles['font']}><i class="fa-brands fa-react"></i></a>
            <h3>REACT19</h3>
            </div>
        <div className={`${styles['cursor-box']} ${styles['git']}`}>
            <a className={styles['font']}><i class="fa-brands fa-git"></i></a> 
            <h3>GIT</h3>
            </div>
        <div className={`${styles['cursor-box']} ${styles['github']}`}>
            <a className={styles['font']}><i class="fa-brands fa-github"></i></a> 
            <h3>GITHUB</h3>
            </div>
            
    </div> 
     
     
    </>
} 

export default Skills;