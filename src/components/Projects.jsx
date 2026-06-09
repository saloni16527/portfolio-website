import "./style.css"
import Navbar from "./Navbar";

function Projects() {
   return <>
  <h1 id="proj">Projects</h1>
  <div className="wave-container">
  <div className="card">
   <div class="pro">
        <div className="img"></div>
        <h3 className="text">THE GREEN CAFE</h3>
        <p className="info">Responsive Web Page of Green Cafe build using HTML and CSS</p>
        <a className="git">Github link</a>
    </div>
   
    <div class="pro">
        <div className="img"></div>
        <h3 className="text">HERO GAME</h3>
        <p className="info">Responsive Stick Hero Game build using Javascript and React.js</p>
        <a className="git">Github link</a>
    </div>

    <div class="pro">
        <div className="img"></div>
        <h3 className="text">PORTFOLIO</h3>
        <p className="info">Responsive Portfolio Website build Using React</p>
        <a className="git">Github link</a>
    </div>
    </div>
 </div>
</>
}

export default Projects; 