import "./components/style.css"
import './App.css'
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import image from "./image.png";

function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <HomePage></HomePage>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
    </>
  )
}

export default App;
