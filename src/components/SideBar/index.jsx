import styles from "./styles.module.css"
import {
  Button,
  CloseButton,
  Drawer,
  Input,
  Portal,
  Stack
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaGlasses, FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoReorderThree, IoSchool } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const ref = useRef(null)
  
    return (
    <div>
        <Drawer.Root initialFocusEl={() => ref.current}>
            <Drawer.Trigger asChild className={styles.trigger}>
                <Button 
                    className={styles.button}
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                        e.currentTarget.blur();
                    }}>
                    <IoReorderThree className={styles.menu}/>
                </Button>
            </Drawer.Trigger>

            <Portal>
                <Drawer.Backdrop/>
                    <Drawer.Positioner>
                        <Drawer.Content className={styles.content}>
                            <Drawer.Header className={styles.header}>
                                <Drawer.Title className={styles.title}>Menu de Navegação</Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body className={styles.body}>
                                <h1>Páginas da Imúnica:</h1>
                                <nav className={styles.nav}>
                                    <Link to="/" className={styles.link}>
                                        <FaHome className={styles.icons}/>
                                        Início
                                    </Link>
                                    <Link to="/analisador" className={styles.link}>
                                        <FaGlasses className={styles.icons}/>
                                        Analisador de Textos
                                    </Link>
                                    <Link to="/area-educativa" className={styles.link}>
                                        <IoSchool className={styles.icons}/>
                                        Área Educativa
                                    </Link>
                                    <Link to="/aprender" className={styles.link}>
                                        <FaPeopleGroup className={styles.icons}/>
                                        Sobre
                                    </Link>
                                </nav>
                                <img src="/icon.threepoints.png" alt="logo" />
                            </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>      
    

          </div>
  );
}