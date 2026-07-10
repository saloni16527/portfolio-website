import styles from "./navbar.module.css";

function Navbar(){
    return <>
    <div className ={styles['navbar']}>
    <a href="#home">Home</a>
    <a href="#about">About </a>
    <a href="#skill">Skills</a>
    <a href="#proj">Projects</a>
    <a href="#cont">Contact</a>
 </div>
    </>
}

export default Navbar;