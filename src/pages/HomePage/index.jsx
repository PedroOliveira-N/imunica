import Sidebar from '../../components/SideBar'
import styles from './styles.module.css'

export default function HomePage () {
    return(
        <div className={styles.centerfied}>
            {/* <h1 className={styles.h1}>Página Inicial</h1> */}
            <img src='/initial.landing.image.png' className={styles.backgroundImg}/>
            <Sidebar className={styles.sideBar}>
                Comece a Navegar Pelo Nosso Conteúdo!
            </Sidebar>
        </div>
    )
}