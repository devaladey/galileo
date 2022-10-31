import { Logo } from '../../img';
import styles from './Navbar.module.css';
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__inner}>
                <a className={styles.navbar__logoLink}>
                    <img src={Logo} alt='Galileo Logo' className={styles.navbar__logo} />
                </a>
                <a href='https://api.whatsapp.com/send?phone=2349032887485&text=Hi' className={styles.navbar__btn}>Meet Galileo</a>
            </div>


        </nav>
    );
}

export default Navbar;