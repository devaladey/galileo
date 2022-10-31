import { Bg1, Bg2, Bg3, Block, ChatDemo, ChatDemo2, Hero, image1, image2, image3, image4, iPhone1, iPhone2, iPhone3 } from '../../img'
import styles from './Overview.module.css';

function Overviews() {
    return (
        <div>
            {/* <img src={iPhone1} /> */}
            <div className={styles.overviewRow}>
                <div className={styles.overviewCol}>
                    {/* <div className={styles.overviewColImgBx} 
                    style={{ backgroundImage: `url(${Bg1})` }}
                    > */}
                        <img className={styles.overviewColImg} src={image4} alt='Phone' />
                    {/* </div> */}
                </div>
                <div className={styles.overviewCol}>
                    <div className={styles.overviewColTxtBx}>
                        <h2 className={styles.overviewColTitle}>The Block System Technology.</h2>
                        <p className={styles.overviewColPara}>The LBS Chatbot affectionately known as Galileo was
                            built using the WhatsApp business API. The chatbot
                            works using a ‘block’ system. Each ‘block’ contains
                            multiple messages that show up in order. These
                            ‘blocks’ work with designed ‘flows’ or ‘actions’ for
                            each item within the blocks.</p>
                    </div>
                </div>
            </div>
            <div className={styles.overviewRow}>
                <div className={styles.overviewCol}>
                    <div className={styles.overviewColTxtBx}>
                        <h2 className={styles.overviewColTitle}>Smart & <br className={styles.break} />  Friendly</h2>
                        <p className={styles.overviewColPara}>
                            We also built conversational capabilities into
                            Galileo such that if you don’t select one of
                            the button replies you can have a regular
                            conversation which includes standard
                            greetings. Eg How are you? And when
                            Galileo is struggling to provide satisfactory
                            responses to your Enquiries, you can also opt
                            to speak with a human (called human
                            takeover)</p>
                    </div>
                </div>
                <div className={styles.overviewCol}>
                    {/* <div className={`${styles.overviewColImgBx} ${styles.two}`} 
                    style={{ backgroundImage: `url(${Bg2})` }}
                    > */}
                        <img className={styles.overviewColImg} src={image1} alt='Phone' />
                    {/* </div> */}
                </div>
            </div>
            <div className={styles.overviewRow}>
                <div className={styles.overviewCol}>
                    {/* <div className={`${styles.overviewColImgBx} ${styles.three}`} 
                    style={{ backgroundImage: `url(${Bg3})` }}
                    > */}
                        <img className={styles.overviewColImg} src={Block} alt='Phone' />
                    {/* </div> */}
                </div>
                <div className={styles.overviewCol}>
                    <div className={styles.overviewColTxtBx}>
                        <h2 className={styles.overviewColTitle}>Simple & <br className={styles.break} /> Intuitive</h2>
                        <p className={styles.overviewColPara}>
                            The “main menu” and “glossary” allows the user to
                            navigate the knowledge-base of Galileo to access
                            carefully curated and structured content in a
                            similar fashion like the popular USSD menus.
                            Galileo also works with global keywords that allows
                            it to direct users to the right content.</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardRow}>
                <div className={styles.cardCol}>
                    <img className={styles.cardImg} src={Hero} alt='Phone' />
                    <div className={styles.overviewCard}>
                        <p>
                            "All this would also not have been possible without curating, researching,
                            developing, summarizing and structuring content. Managing the content
                            was the first big step in making Galileo possible."
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Overviews;