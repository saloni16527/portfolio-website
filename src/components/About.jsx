import "./style.css"
import Navbar from "./Navbar";

function About() {
    return <>
    <h1 id="aboutme">About</h1>
    <main className="section">
        <main className="paragraph">
        <ul>
            <h3>
            <li class="para">Hello! I'm Saloni, a Computer Science Engineering student with a deep passion for web development. I enjoy taking complex problems and turning them into simple, beautiful, and intuitive web applications.</li>
            <li class="para">I am a proactive learner, combining my academic knowledge in CSE with hands-on web development using HTML5, CSS3, and JavaScript. Currently, I am exploring React and responsive design to build better user experiences.</li>
            <li class="para">From building simple HTML pages to engaging web apps, I love the process of coding. I'm eager to build impactful digital solutions and contribute to open-source projects.</li>
            </h3>
        </ul>
        </main>
        <img src="pic.jpg" id="photo"/>
    </main>
    </>
}

export default About;