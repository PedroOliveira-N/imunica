import { Heading, Span } from "@chakra-ui/react";
import styles from './styles.module.css'
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Sidebar from "../SideBar";

export default function Header () {
    return(
    <header className={styles.header}>
        <Sidebar />
    </header>
    )
}