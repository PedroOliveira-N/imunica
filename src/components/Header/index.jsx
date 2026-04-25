import { Heading, Span } from "@chakra-ui/react";
import styles from './styles.module.css'
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Sidebar from "../SideBar";

export default function Header () {
    return(
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src="/icon.png"/>

            <div>
                <h1 className={styles.title}>Imúnica</h1>
                <h2 className={styles.slogan}>Imunização Digital</h2>
            </div>
        </div>

        <Sidebar className={styles.sideBar}/>
    </header>
    )
}