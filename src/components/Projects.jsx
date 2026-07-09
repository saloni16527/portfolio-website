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

function Projects() {
   return <>
  <h1 id="proj">Projects</h1>
  <div className="wave-container">
  <div className="card">
    <div className="pro">
        <div>
            <img src={cafe} className="img"/> 
        </div> 
        <h3 className="text">☕ THE GREEN CAFE</h3>
        <p className="info">A modern and responsive Green cafe webpage with an elegant design and a clean user experience interface.</p>
        <aside>
        <FaHtml5 className="logo"/>
        <FaCss3Alt className="logo"/>
        </aside>
        <button className="demo">
          Live Demo <BsBoxArrowUpRight />
        </button>
         <button className="gthb">
          <FaGithub /> GitHub
        </button>
    </div>
   
    <div className="pro">
        <div>
            <img src={game} className="img"/> 
        </div> 
        <h3 className="text">🎮 STICK HERO GAME</h3>
        <p className="info">A responsive browser game built with Gemini Canvas,featuring smooth animations and engaging gameplay.</p>
        <aside>
        < IoLogoJavascript className="logo"/>
        <FaReact className="logo"/>
        </aside>
        <button className="demo">
          Live Demo <BsBoxArrowUpRight />
        </button>
         <button className="gthb">
          <FaGithub className="cat"/> GitHub
        </button>
    </div>

    <div className="pro">
        <div>
            <img src={portfolio} className="img"/> 
        </div> 
        <h3 className="text">💻 PORTFOLIO</h3>
        <p className="info">A responsive personal portfolio website showcasing my projects, skills, and frontend development journey.</p>
        <FaHtml5 className="logo"/>
        <FaCss3Alt className="logo"/>
        < IoLogoJavascript className="logo"/>
        <FaReact className="logo"/>
        <button className="demo">
          Live Demo <BsBoxArrowUpRight />
        </button>
         <button className="gthb">
          <FaGithub className="cat"/> GitHub
        </button>
    </div>
        </div>
    </div>
</>
}

export default Projects; 