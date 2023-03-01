import Link from "next/link";
import Image from "next/image";

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/logo.png" width="233" height="64" alt="Logo"/>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">A experiência</Link>
                </li>
                <li>
                    <Link href="/about">Mapa de Setores</Link>
                </li>
                <li>
                    <Link href="/">Informações</Link>
                </li>
                <li>
                    <Link href="/about">Ingresso</Link>
                </li>
            </ul>
        </nav>
    )
}