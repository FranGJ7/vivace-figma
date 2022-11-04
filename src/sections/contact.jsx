import imgContact from "../../public/img-inn/contact.png"
import styles from "../styles/contact.module.scss"

const Contact = () => (
  <div className={styles.contactSection}>
    <div className={styles.form}>
      <p className={styles.title}>Entre em contato e faça sua reserva</p>
      <hr className={styles.hrContact}/>
      <label htmlFor="name" >Name</label>
      <input className={styles.inputForm} id="name" type="text" placeholder="Ex: João martins souza" />
      <label htmlFor="email" >Email</label>
      <input className={styles.inputForm} id="email" type="email" placeholder="Ex: joao@gmail.com" />
      <label htmlFor="message">Mensagem</label>
      <input className={styles.inputMessage} id="message" type="text" placeholder="Mensagem" />
      <button className={styles.btn}>Enviar</button>
    </div>
    <div className={styles.boxImg}>
      <img src={imgContact} alt="imgContact" /> 
    </div>
  </div>
);

export default Contact 