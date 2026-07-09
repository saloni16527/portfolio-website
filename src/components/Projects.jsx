import "./style.css"
import Navbar from "./Navbar";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import cafe from "../assets/cafe.png";
import portfolio from "../assets/portfolio.png";
import game from "../assets/game.png";
import styles from "./project.module.css"

function Projects() {
   return <>
  <h1 className={styles.proj} id="proj">Projects</h1>
  <div className={styles['wave-container']}>
  <div className={styles['card']}>
    <div className={styles['pro']}>
        <div>
            <img src={cafe} className={styles['img']}/> 
        </div> 
        <h3 className={styles['text']}>☕ THE GREEN CAFE</h3>
        <p className={styles['info']}>A modern and responsive Green cafe webpage with an elegant design and a clean user experience interface.</p>
        <aside>
        <FaHtml5 className={styles['logo']}/>
        <FaCss3Alt className={styles['logo']}/>
        </aside>
        <button className={styles['demo']}>
          Live Demo <BsBoxArrowUpRight />
        </button>
         <button className={styles['gthb']}>
          <FaGithub /> GitHub
        </button>
    </div>
   
    <div className={styles['pro']}>
        <div>
            <img src={game} className={styles['img']}/> 
        </div> 
        <h3 className={styles['text']}>🎮 STICK HERO GAME</h3>
        <p className={styles['info']}>A responsive browser game built with Gemini Canvas,featuring smooth animations and engaging gameplay.</p>
        <aside>
        < IoLogoJavascript className={styles['logo']}/>
        <FaReact className={styles['logo']}/>
        </aside>
        <button className={styles['demo']}>
          Live Demo <BsBoxArrowUpRight />
        </button>
         <button className={styles['gthb']}>
          <FaGithub /> GitHub
        </button>
    </div>

    <div className={styles['pro']}>
        <div>
            <img src={portfolio} className={styles['img']}/> 
        </div> 
        <h3 className={styles['text']}>💻 PORTFOLIO</h3>
        <p className={styles['info']}>A responsive personal portfolio website showcasing my projects, skills, and frontend development journey.</p>
        <aside>
        <FaHtml5 className={styles['logo']}/>
        <FaCss3Alt className={styles['logo']}/>
        < IoLogoJavascript className={styles['logo']}/>
        <FaReact className={styles['logo']}/>
        </aside>
        <button className={styles['demo']}>
          Live Demo <BsBoxArrowUpRight />
        </button>
         <button className={styles['gthb']}>
          <FaGithub /> GitHub
        </button>
    </div>
        </div>
    </div>
</>
}

export default Projects; 