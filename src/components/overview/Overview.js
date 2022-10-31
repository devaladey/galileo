import styles from './Overview.module.css';
import Overviews from './Overviews';

function Overview() {
    return (
        <section className={styles.overview}>
            <div className={styles.overviewCenter}>
                <h2 className={styles.overviewTitle}>Overview</h2>
                <p className={styles.overviewPara}>Galileo was built using the WhatsApp business API. The chatbot
                    works using a ‘block’ system. </p>
            </div>
            <Overviews />
        </section>
    );
}

export default Overview;