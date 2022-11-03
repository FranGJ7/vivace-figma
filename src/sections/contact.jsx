import styles from "../styles/contact.module.scss"

const Contact = () => (
  <div className={styles.contactSection}>
    <div className={styles.form}>
      <p className={styles.title}>Entre em contato e faça sua reserva</p>
      <hr className={styles.hrContact}/>
      <label htmlFor="name" >Name</label>
      <input id="name" type="text" placeholder="Ex: João martins souza" />
      <label htmlFor="email" >Email</label>
      <input id="email" type="email" placeholder="Ex: joao@gmail.com" />
      <label htmlFor="message">Mensagem</label>
      <input id="message" type="text" placeholder="Mensagem" />
      <button className={styles.btn}>Enviar</button>
    </div>
    <div className={styles.boxImg}>
      <img src="../../public/img-inn/contact.png" alt="" />

    </div>
  </div>
);

export default Contact