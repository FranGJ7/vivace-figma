import Carousel from "../components/carousel";
import HighLight from "../components/highLight";
import styles from "../styles/room.module.scss"

const Room = () => (
  <>
  <div className={styles.sectionRoom}>
    <div className={styles.textBox}>
      <p className={styles.title}>Nossos Quartos</p>
      <hr className={styles.hrRoom}/>
      <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div className={styles.carouselBox}>
      <Carousel />
    </div>
    
   
  </div>
  <div className={styles.highLight}> 
  <HighLight/>
  </div>
  
 
  </>
);

export default Room