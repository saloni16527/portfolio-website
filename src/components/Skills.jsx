import "./style.css"
import Navbar from "./Navbar";

function Skills () {
    return  <>
    <h1 id="skill">Skills</h1>
    <div className="container1">
        <div class="cursor-box html">
            <a class="font"><i class="fa-brands fa-html5"></i></a>
            <h3>HTML5</h3>
        </div>
        <div class="cursor-box css">
            <a class="font"><i class="fa-brands fa-css3"></i></a>
            <h3>CSS3</h3>
            </div>
        <div class="cursor-box javascript">
            <a class="font"><i class="fa-brands fa-js"></i></a>
            <h3>JAVASCRIPT</h3>
            </div>
        </div>
    
        
        <div className="container2">    
        <div class="cursor-box react">
            <a class="font"><i class="fa-brands fa-react"></i></a>
            <h3>REACT19</h3>
            </div>
        <div class="cursor-box git">
            <a class="font"><i class="fa-brands fa-git"></i></a> 
            <h3>GIT</h3>
            </div>
        <div class="cursor-box github">
            <a class="font"><i class="fa-brands fa-github"></i></a> 
            <h3>GITHUB</h3>
            </div>
            
    </div> 
     
     
    </>
} 

export default Skills;