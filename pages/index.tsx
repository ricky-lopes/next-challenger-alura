import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.content_page}>
      <div className={styles.img}>
        <h1>Boas-vindas ao</h1>
        <h1>#CodeChella2023!</h1>
      </div>
      <div className={styles.context_page}>
        <div className={styles.buy_ticket}>
          <img className={styles.img_buy_ticket} src="/public/images/peoples.jfif"/>
          <div className={styles.infos_ticket}>
            <h2>{'<'} 11 e 12 de Março {'>'} <br></br> Aluródromo de São Paulo</h2>
            <p>Hora de programar nossa memória com novas lembranças! Uma nova experiência 
              sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, 
              com vários artistas e referências. Divirta-se!
            </p>
            <div className={styles.center_btn_tickets}>
              <button className={styles.btn_tickets}> 
                Comprar ingreso! 
                <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.25 17.875L16.8125 12.4375L21.1875 8.8125L15.5625 8.5L13.5 3.25L11.4375 8.5L5.75 8.8125L10.1875 12.4375L8.75 17.875L13.5 14.8125L18.25 17.875ZM24.9375 9.625C24.4375 10.1667 24.1875 10.7917 24.1875 11.5C24.1875 12.2083 24.4375 12.8333 24.9375 13.375C25.4792 13.9167 26.1042 14.1875 26.8125 14.1875V19.5C26.8125 20.2083 26.5417 20.8333 26 21.375C25.5 21.9167 24.8958 22.1875 24.1875 22.1875H2.8125C2.10417 22.1875 1.47917 21.9167 0.9375 21.375C0.4375 20.8333 0.1875 20.2083 0.1875 19.5V14.1875C0.9375 14.1875 1.5625 13.9375 2.0625 13.4375C2.5625 12.8958 2.8125 12.25 2.8125 11.5C2.8125 10.7917 2.54167 10.1667 2 9.625C1.5 9.08333 0.895833 8.8125 0.1875 8.8125V3.5C0.1875 2.79167 0.4375 2.16667 0.9375 1.625C1.47917 1.08333 2.10417 0.8125 2.8125 0.8125H24.1875C24.8958 0.8125 25.5 1.08333 26 1.625C26.5417 2.16667 26.8125 2.79167 26.8125 3.5V8.8125C26.1042 8.8125 25.4792 9.08333 24.9375 9.625Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.center_btn_tickets_mt}>
          <h1>/Line-Up/</h1>
        </div>
        <div className={styles.flex_between}>
          <div className={styles.yellow_border}></div>
          <div className={styles.yellow_label}>
            <h3>SÁBADO {'<'}11/03{'>'}</h3>
          </div>
          <div className={styles.yellow_border}></div>
        </div>
        <div className={styles.shows}>
          <div className={styles.bands}>
            <h2>System of a DOM</h2>
          </div>
          <div className={styles.order_band}>
            <h6>Linkin Promises</h6>
            <h6>Fullstack Fighters</h6>
            <h6>Papa React</h6>
            <h6>Angular in Chains</h6>
          </div>
          <div className={styles.order_band_around}>
            <h4>Agnostic Front-end</h4>
            <h4>SlipkNode</h4>
            <h4>Pink Flutter</h4>
            <h4>Kiss</h4>
          </div>
        </div>
        <div className={styles.flex_between}>
          <div className={styles.yellow_border}></div>
          <div className={styles.yellow_label}>
            <h3>Domingo {'<'}12/03{'>'}</h3>
          </div>
          <div className={styles.yellow_border}></div>
        </div>
        <div className={styles.shows}>
          <div className={styles.bands}>
            <h2>Lana Del Ploy</h2>
          </div>
          <div className={styles.order_band}>
            <h6>Dua Lib</h6>
            <h6>The Backnd</h6>
            <h6>CSS Styles</h6>
            <h6>DJ Query</h6>
            <h6>ArrayAna Grande</h6>
          </div>
          <div className={styles.order_band_around}>
            <h4>Miley Cypress</h4>
            <h4>The Bootstrap Boys</h4>
            <h4>Json Derulo</h4>
            <h4>CloudPlay</h4>
            <h4>DevLovato</h4>
          </div>
        </div>
          
      </div>
    </div>
    
  )
}
