import "./style.css"
import Navbar from "./Navbar";

function HomePage () {
    return <>
    <main id="home"> 
    <main className="main">
     <div class="split-text-container">
    <span class="text-part left">Hi,</span>
    <span class="text-part right">Myself SALONI</span>
    </div>
   
    <div className="me">
    <h3>I'm Computer Science student,Just a Beginner in Web Development</h3>
    <h3>Undergraduate B.TECH Student Focused on Frontend Technologies (HTML/CSS/JS).</h3>
   <button class="btn btn-pulse">Contact me</button>
   </div>
    <p>
    <a href="#" className="icon"><i id="face" class="fa-brands fa-square-facebook"></i></a>
    <a href="#" className="icon"><i id="in" class="fa-brands fa-square-instagram"></i></a>
    <a href="#" className="icon"><i id="li" class="fa-brands fa-linkedin"></i></a>
    <a href="#" className="icon"><i id="tw" class="fa-brands fa-square-twitter"></i></a>
    </p>
    </main>
    <img src="/me.jpg" id="pic"/>
    </main>
    </>
}

export default HomePage;