import styles from "../styles/footerMain.module.scss"

const FooterMain = () => (
    <div className={styles.footerMain}>
        <div className={styles.boxText}>
            <p className={styles.logo}>VIVACE</p>
            <p className={styles.subTitle}>Rua Presidente Vargas, n°42, Fazenda Boa Fé</p>
            <p className={styles.subTitle}>(22) 99999-9921 </p>
            <p className={styles.subTitle}>contato@pousadavivace.com</p>
        </div>

        <div className={styles.boxText}>
            <p className={styles.title}>Explore</p>
            <hr className={styles.hrFooter}/>
            <p className={styles.subTitle}>Sobre nós</p>
            <p className={styles.subTitle}>Nossos quartos</p>
            <p className={styles.subTitle}>Faça sua reserva</p>
        </div>
        <div className={styles.boxEmail}>
            <p className={styles.titleEmail}>Não perca nossas novidades</p>
            <hr  className={styles.hrFooterEmail}/>
            <input className={styles.inputFooter} type="email" placeholder="Ex: joao@gmail.com" />
            <br />
            <button className={styles.btnFooter}>ENVIAR</button>
        </div>
    </div>
)

export default FooterMain