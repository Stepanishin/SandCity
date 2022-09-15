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
                <p className={styles.Story_description}><b>The year 2178.</b> The Sun began to go out. As quickly as no one expected. Humankind just wasn’t ready…</p>
                <p className={styles.Story_description}><b>The year 2179.</b> Countries had a common plan… The insane plan worked! So they thought for the first few hours. The sun ignited again…</p>
                <p className={styles.Story_description}><b>The Day of Eternal Dawn,</b> so that day was called. No one could have ever thought that the day would turn into <b>The Eternal Dawn Era.</b> The Sun went out of control and started to expand. The only place on Earth where life was still possible was <b>the Majestic City.</b></p>
                <p className={styles.Story_description}><b>A week after the first emission,</b> a new luminary lit up in the sky. Mercury was burning in fieryswirls of solar energy.</p>
                <p className={styles.Story_description}><b>In 15 more days,</b> Mercury exploded. Billions of living beings on Earth turned to dust in aninstant. Only <b>the Majestic City</b> was able to sustain life. The radiation from the burning Sun andthe energy from Mercury’s collapsing core transformed all the organics on the planet into anew, heretofore unknown substance. Nectar, so they called it.</p>
                <p className={styles.Story_description}>After all that happened, people began to call this <b>Majestic City</b> - the City of Dust, or shortly - <span style={{color: '#EDA45C'}} ><b>Dust City...</b></span></p>
            </div>
        </div>
    );

};

export default Story;
