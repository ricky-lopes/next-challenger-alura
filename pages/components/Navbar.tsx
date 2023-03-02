import Link from "next/link";

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img className={styles.logo_img} src="/images/logo.png" alt="Logo"/>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">A experiência</Link>
                </li>
                <li>
                    <Link href="/">Mapa de Setores</Link>
                </li>
                <li>
                    <Link href="/">Informações</Link>
                </li>
                <li>
                    <Link href="/">Ingresso</Link>
                </li>
            </ul>
        </nav>
    )
}