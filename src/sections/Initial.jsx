import styles from "../styles/initial.module.scss"

const Initial = () => (
   
  <div className={styles.container}>
    <div className={styles.leftBox}>
      <div className={styles.textBox}>
        <p className={styles.logo}>VIVACE</p>
        <p className={styles.title}>O Descanso Que Você Merece</p>
        <p className={styles.subTitle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud.</p>
        <button className={styles.btnLeft}>FAÇA SUA RESERVA</button>
      </div>
    </div>
    <div className={styles.rightBox}>
      <div className={styles.navBar}>
        <a href="#">Sobre</a>
        <a href="#">Quartos</a>
        <a href="#">Contato</a>                                         
        <button className={styles.btnRight}>RESERVAR</button>
      </div>
      <div className={styles.boxImg} />
    </div>
  </div>
  
);

export default Initial