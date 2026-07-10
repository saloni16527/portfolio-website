import Navbar from "./Navbar";
import styles from "./contact.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Contact () {
    return <>
     <h1 className={styles.cont} id="cont">Contact</h1>
    <h3 className={styles['get']}>Lets Get-In Touch and Buid Something Amazing Together</h3>
    <form>
    <input type="text" placeholder="Enter name" className={styles['name']}/>
    <input type="email" placeholder="Enter email" className={styles['email']}/>
    <textarea placeholder="Your Message" className={styles['msg']}></textarea>
    <button type="submit" className={`${styles['btn1']} ${styles['btn-pulse']}`}>Enter</button>
    </form>

    <div className={styles['foot']}> 
    <div className={styles['box']}>
     <a href="https://www.linkedin.com/in/saloni-892543413?utm_source=share_via&utm_content=profile&utm_medium=member_android" className={styles.lkn}><FaLinkedin /></a>
     <a href="https://github.com/saloni16527" className={styles.gtb}><FaGithubSquare /></a> 
    </div>
    <div>
    <a className={styles['copy']}>Follow me</a>
    </div>
    <div>
    <a className={styles['copy1']}><i class="fa-solid fa-copyright"></i> Saloni-All Rights Reserved</a>
    </div>
    </div>

    </>
}

export default Contact;