import styles from "../styles/highLight.module.scss";

const HighLight = () => (
  <div className={styles.highLight}>
    <div className={styles.boxItem}>
      <div className={styles.circle}>
        <img className={styles.icon} src="../../public/icons/coffee.png" alt="" />
      </div>
      <p className={styles.description}>Com café da manhã incluso</p>
    </div>
    <div className={styles.boxItem}>
      <div className={styles.circle}>
        <img className={styles.icon} src="../../public/icons/credit-card.png" alt="" />
      </div>
      <p className={styles.description}>Várias formas de pagamento</p>
    </div>
    <div className={styles.boxItem}>
      <div className={styles.circle}>
        <img className={styles.icon} src="../../public/icons/heart.png" alt="" />
      </div>
      <p className={styles.description}>Hóspedes 100% satisfeitos</p>
    </div>
  </div>
)
export default HighLight 
 