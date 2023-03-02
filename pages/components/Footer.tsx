import styles from '../../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <img className={styles.logo} src="/images/logo_preto.png" alt="" />
                <div className={styles.social_network}>
                    <p>Acesse nossas redes:</p>
                    <img className={styles.img} src="/images/wpp_icon.png" alt="" />
                    <img className={styles.img} src="/images/twi_icon.png" alt="" />
                    <img className={styles.img} src="/images/inst_icon.png" alt="" />
                    <img className={styles.img} src="/images/ttw_icon.png" alt="" />
                </div>
            </div>
            <div>
                <p> Desenvolvido por Henrique.</p>
                <p>Projeto sem fins comerciais.</p>
            </div>
        </footer>
    )
}