import { Barcode, Mascot } from '../../img';
import styles from './Header.module.css';

function Header({ children }) {
    return (
        <header className={styles.header}>
            {children}
            <div className={styles.header__inner}>
                <div className={styles.header__innerLeft}>
                    <h1 className={styles.header__title}>Howdy, I'm Galileo.</h1>
                    <p className={styles.header__para}>Lagos Business School no1 personal assistant. I'm more than ready to attend to your questions. Cheers'🥂 </p>
                </div>
                <div className={styles.header__innerRight}>
                    <div className={styles.header__imgBx}>
                        <img src={Barcode} className={styles.header__img} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;