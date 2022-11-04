import imgAbout from "../../public/img-inn/about.jpg"
import styles from "../styles/about.module.scss"


const About = () => (
  <div className={styles.aboutSection}>
    <img className={styles.imgBox} src={imgAbout}/>
    <div className={styles.aboutBox}>
      <p className={styles.title}>Sobre nós</p>
      <hr className={styles.hrAbout}/>
      <p className={styles.description}>Sed ut perspiciatis unde  laudantium, architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <button className={styles.btnAbout}>SAIBA MAIS</button>
    </div>
  </div>
);

export default About  