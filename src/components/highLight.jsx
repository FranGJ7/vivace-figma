import iconCoffe from "../../public/icons/coffee.png"
import iconCard from "../../public/icons/credit-card.png"
import iconHeart from "../../public/icons/heart.png"
import styles from "../styles/highLight.module.scss";

const HighLight = () => (
  <div className={styles.highLight}>
    <div className={styles.boxItem}>
      <div className={styles.circle}>
        <img className={styles.icon} src={iconCoffe} alt="icone café" />
      </div>
      <p className={styles.description}>Com café da manhã incluso</p>
    </div>
    <div className={styles.boxItem}>
      <div className={styles.circle}>
        <img className={styles.icon} src={iconCard} alt="icone cartão de crédito" />
      </div>
      <p className={styles.description}>Várias formas de pagamento</p>
    </div>
    <div className={styles.boxItem}>
      <div className={styles.circle}>
        <img className={styles.icon} src={iconHeart} alt="icone coração" />
      </div>
      <p className={styles.description}>Hóspedes 100% satisfeitos</p>
    </div>
  </div>
)
export default HighLight 
 