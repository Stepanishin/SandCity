import React, { FC } from 'react';
import styles from './Story.module.css'
import city from './img/storyCity.png'
import bg from './img/bg.svg'
import bg480 from './img/bg480.svg'




const Story:FC = () => {

    
    return (
        <div id="STORY" className={styles.Story} >
                <div className={styles.Story_container} >
                    <div className={styles.Story_title_container}>
                        <div>
                            <h2 className={styles.Story_title}>STORY</h2>
                            <h2 className={styles.Story_title_blur}>STORY</h2>
                            <img className={styles.Story_title_bg} src={bg} alt="" />
                            <img className={styles.Story_title_bg480} src={bg480} alt="" />
                        </div>
                    </div>

                    <div className={styles.Story_description_container1440}>
                        <div className={styles.Story_description_leftWrap}>
                            <p className={styles.Story_description_p}>The year 2178. The Sun began to go out. As quickly as no one expected. Humankind just wasn't ready…</p>
                            <p className={styles.Story_description_p}>The year 2179. Countries had a common plan… The insane plan worked! So they thought for the first few hours. The sun ignited again…</p>
                            <p className={styles.Story_description_p}>The Day of Eternal Dawn, so that day was called. No one could have ever thought that the day would turn into The Eternal Dawn Era. The Sun went out of control and started to expand. The only place on Earth where life was still possible was the Majestic City.</p>
                            <p className={styles.Story_description_p}>A week after the first emission, a new luminary lit up in the sky. Mercury was burning in fieryswirls of solar energy.</p>
                            <p className={styles.Story_description_p}>In 15 more days, Mercury exploded. Billions of living beings on Earth turned to dust in aninstant. Only the Majestic City was able to sustain life. </p>
                            <p className={styles.Story_description_p}>The radiation from the burning Sun andthe energy from Mercury's collapsing core transformed all the organics on the planet into anew, heretofore unknown substance. Nectar, so they called it.</p>
                        </div>
                        <div className={styles.Story_description_rightWrap}>
                            <p className={styles.Story_description_p}>After all that happened, people began to call this Majestic City — the City of Dust, or shortly — Dust City...</p>
                            <div className={styles.Story_description_img_wrap}>
                                <img className={styles.Story_description_img} src={city} alt="City" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.Story_description_container1000}>
                        <div className={styles.Story_description_container}>
                            <div className={styles.Story_description_leftWrap}>
                                <p className={styles.Story_description_p}>The year 2178. The Sun began to go out. As quickly as no one expected. Humankind just wasn't ready…</p>
                                <p className={styles.Story_description_p}>The year 2179. Countries had a common plan… The insane plan worked! So they thought for the first few hours. The sun ignited again…</p>
                                <p className={styles.Story_description_p}>The Day of Eternal Dawn, so that day was called. No one could have ever thought that the day would turn into The Eternal Dawn Era. The Sun went out of control and started to expand. The only place on Earth where life was still possible was the Majestic City.</p>
                                <p className={styles.Story_description_p}>A week after the first emission, a new luminary lit up in the sky. Mercury was burning in fieryswirls of solar energy.</p>
                            </div>
                            <div className={styles.Story_description_rightWrap}>
                                <p className={styles.Story_description_p}>In 15 more days, Mercury exploded. Billions of living beings on Earth turned to dust in aninstant. Only the Majestic City was able to sustain life. </p>
                                <p className={styles.Story_description_p}>The radiation from the burning Sun andthe energy from Mercury's collapsing core transformed all the organics on the planet into anew, heretofore unknown substance. Nectar, so they called it.</p>
                                <p className={styles.Story_description_p}>After all that happened, people began to call this Majestic City — the City of Dust, or shortly — Dust City...</p>
                            </div>
                        </div>
                        <div className={styles.Story_description_img_wrap}>
                            <img className={styles.Story_description_img} src={city} alt="City" />
                        </div>
                    </div>

                    <div className={styles.Story_description_container768}>
                        <div className={styles.Story_description_leftWrap}>
                            <p className={styles.Story_description_p}>The year 2178. The Sun began to go out. As quickly as no one expected. Humankind just wasn't ready…</p>
                            <p className={styles.Story_description_p}>The year 2179. Countries had a common plan… The insane plan worked! So they thought for the first few hours. The sun ignited again…</p>
                            <p className={styles.Story_description_p}>The Day of Eternal Dawn, so that day was called. No one could have ever thought that the day would turn into The Eternal Dawn Era. The Sun went out of control and started to expand. The only place on Earth where life was still possible was the Majestic City.</p>
                        </div>
                        <div className={styles.Story_description_img_wrap}>
                            <img className={styles.Story_description_img} src={city} alt="City" />
                        </div>
                        <div className={styles.Story_description_rightWrap}>
                            <p className={styles.Story_description_p}>A week after the first emission, a new luminary lit up in the sky. Mercury was burning in fieryswirls of solar energy.</p>
                            <p className={styles.Story_description_p}>In 15 more days, Mercury exploded. Billions of living beings on Earth turned to dust in aninstant. Only the Majestic City was able to sustain life. </p>
                            <p className={styles.Story_description_p}>The radiation from the burning Sun andthe energy from Mercury's collapsing core transformed all the organics on the planet into anew, heretofore unknown substance. Nectar, so they called it.</p>
                            <p className={styles.Story_description_p}>After all that happened, people began to call this Majestic City — the City of Dust, or shortly — Dust City...</p>
                        </div>
                    </div>
            </div>
        </div>
    );

};

export default Story;
