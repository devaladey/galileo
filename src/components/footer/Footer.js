import styles from './Footer.module.css';

function Footer() {
    return ( 
        <footer className={styles.footer}>
            <p>Developed and managed by SMP 83 Group 5</p>
            <div className={styles.footer__circle}></div>
        </footer>
     );
}

export default Footer;