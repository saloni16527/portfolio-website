import "./style.css"
import Navbar from "./Navbar";

function Contact () {
    return <>
     <h1 id="cont">Contact</h1>
    <h3 class="get">Lets Get-In Touch and Buid Something Amazing Together</h3>
    <input type="text" placeholder="Enter name" id="name"/>
    <input type="email" placeholder="Enter email" id="email"/>
    <textarea placeholder="Your Message" id="msg"></textarea>
    <button class="btn1 btn-pulse">Enter</button>

    <div id="foot"> 
    <div>
    <a href="#"><i id="face1" class="fa-brands fa-square-facebook"></i></a>
    <a href="#"><i id="in1" class="fa-brands fa-square-instagram"></i></a>
    <a href="#"><i id="li1" class="fa-brands fa-linkedin"></i></a>
    <a href="#"><i id="tw1" class="fa-brands fa-square-twitter"></i></a> 
    </div>
    <div>
    <a id="copy">Follow me</a>
    </div>
    <div>
    <a id="copy1"><i class="fa-solid fa-copyright"></i> Saloni-All Rights Reserved</a>
    </div>
    </div>

    </>
}

export default Contact;