import Carousel from "../components/carousel";
import styles from "../styles/room.module.scss"

const Room = () => (
  <div className={styles.sectionRoom}>
    <div className={styles.textBox}>
      <p className={styles.title}>Nossos Quartos</p>
      <hr />
      <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div className={styles.carouselBox}>
      <Carousel />
    </div>
  </div>
);

export default Room