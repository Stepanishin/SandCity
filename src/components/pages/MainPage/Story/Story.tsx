import React, { FC } from 'react';
import styles from './Story.module.css'
import city from '../../../../assets/img/city.png'



const Story:FC = () => {

    
    return (
        <div id="STORY" className={styles.Story} >
            <div className={styles.Story_container} >
                <p className={styles.Story_barcode} >Save this world and Revive civilization.</p>
                <h2 className={styles.Story_title} >DUST CITY</h2>
                <img className={styles.Story_cityImg} src={city} alt="PhotoOfCity" />
                <p className={styles.Story_description}>In the Summer of 2222, sandstorms began. The crop was destroyed, people were starving. Millions of people fled south to survive. There, only hunger, chaos and death awaited them.</p>
                <p className={styles.Story_description}>But there were people who decided to survive no matter what. They will have to rebuild this city. In a completely destroyed world, people develop their technologies to withstand the cruel sands. We humans must learn to live in this world again, TOGETHER. We must restore civilization.</p>
                <p className={styles.Story_description}>Step by step, building new buildings, we resist the merciless sandstorms. Our city is expanding, but it becomes obvious that there are not enough people. We open the gates of our city to 2222 new settlers...</p>
            </div>
        </div>
    );

};

export default Story;