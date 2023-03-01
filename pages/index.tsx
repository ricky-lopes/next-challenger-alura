import Image from "next/image";

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.image_container}>
        <h1>Boas-vindas ao <br></br> #CodeChella2023!</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.buy_ticket}>
          <Image className={styles.buy_ticket_image} src="/images/publicShow.jfif" width="609" height="381" alt="PublicShow"/>
          <div className={styles.infos_ticket}>
            <h6> {'<'} 11 e 12 de Março {'>'} Aluródromo de São Paulo</h6>
            <p>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, 
              linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. 
              Divirta-se!
            </p>
            <button>Comprar ingresso!</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}
