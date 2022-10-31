import { Comp1 } from '../../img'
import styles from './Video.module.css';

function Video() {
    return (
        <section className={styles.videoBx}>
            {/* <div className={styles.videoContent}>
                <div className={styles.videoBtn}>

                </div>

            </div> */}
            <div className={styles.aboutGalileo}>
                <div className={styles.aboutGalileoLeft}>
                    <img src={Comp1} className={styles.aboutGalileoLeftImg} />
                </div>
                <div className={styles.aboutGalileoRight}>
                    <p className={styles.aboutGalileoRightPara}>Galileo’s capabilities can also be extended to displaying
                        links for more information, sending user responses via
                        emails, sharing images, voice notes and much more.
                        Asides WhatsApp, Galileo can also be extended to other
                        channels including websites, Facebook and mobile apps.</p>
                    <p className={styles.aboutGalileoRightPara}>
                        We also built conversational capabilities into Galileo such
                        that if you don’t select one of the button replies you can
                        have a regular conversation which includes standard
                        greetings eg How are you? And when Galileo is struggling
                        to provide satisfactory responses to your Enquiries, you
                        can also opt to speak with a human (called human
                        takeover).
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Video;