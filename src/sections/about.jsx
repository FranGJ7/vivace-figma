import styles from "../styles/about.module.scss"


const About = () => (
  <div className={styles.aboutSection}>
    <div className={styles.imgBox} />
    <div className={styles.aboutBox}>
      <p className={styles.title}>Sobre nós</p>
      <hr />
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
      <button>SAIBA MAIS</button>
    </div>
    <div className={styles.boxRight}/>

  </div>
);

export default About