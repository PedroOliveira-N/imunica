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
import { Link } from "react-router-dom";

export default function Sidebar() {
  const ref = useRef(null)
  
    return (
    <div>
        <Drawer.Root initialFocusEl={() => ref.current}>
            <Drawer.Trigger asChild>
                <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                        e.currentTarget.blur();
                    }}
                >
                    Abrir
                </Button>
            </Drawer.Trigger>
            <Portal>
            <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>Drawer Title</Drawer.Title>
                        </Drawer.Header>
                    <Drawer.Body>
                        <nav className={styles.nav}>
                            <Link to="/">Home</Link>
                            <Link to="/analisador">Analisador</Link>
                            <Link to="/jogos">Jogos</Link>
                            <Link to="/aprender">Aprender</Link>
                        </nav>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button variant="outline">Cancel</Button>
                        <Button>Save</Button>
                    </Drawer.Footer>
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