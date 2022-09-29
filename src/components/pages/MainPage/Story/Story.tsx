import React, { FC } from 'react';
import styles from './Story.module.css'
import city from './img/storyCity.png'
import bg from './img/bg.svg'
import bg480 from './img/bg480.svg'
import bg2 from './img/bg2.svg'
import bg3 from './img/bg3.svg'
import bg4 from './img/bg4.svg'
import bg5 from './img/bg5.svg'
import bg6 from './img/bg6.svg'
import bg7 from './img/bg7.svg'




const Story:FC = () => {

    
    return (
        <div  className={styles.Story} >
                <svg className={styles.Story_bg} width="1440" height="2589" viewBox="0 0 1440 2589" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_873_83218)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-138.55 766.319C-18.1478 717.835 73.5437 617.007 204.518 604.603C349.723 590.852 505.528 606.324 631.126 693.43C760.522 783.171 841.766 929.592 889.834 1079.89C937.442 1228.76 959.894 1393.78 898.493 1529.46C840.093 1658.51 689.198 1697.46 574.624 1776.45C461.661 1854.32 373.935 1993.35 233.258 1988.06C92.3664 1982.77 -1.83184 1832.48 -122.961 1750.24C-256.971 1659.25 -424.67 1618.45 -513.406 1481.09C-616.592 1321.36 -725.952 1104.57 -642.663 945.75C-556.946 782.305 -307.925 834.523 -138.55 766.319Z" fill="#DB2FD5" fill-opacity="0.15"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_873_83218" x="-1272.12" y="0.196045" width="2807.97" height="2588.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>5151L17
                    <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_873_83218"/>
                    </filter>
                    </defs>
                </svg>
                <img className={styles.Story_bg_svg4} src={bg4} alt="" />
                

                <div className={styles.Story_container} >

                    <svg className={styles.Story_bg_svg1} viewBox="0 0 224 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.17101e-06 17.7659L6.03998e-07 37.3413L2.63502 37.3413L2.63502 18.9175L18.9392 2.79666L98.4838 2.79667L110.341 14.6404L110.341 36.0253L86.9556 36.0253L86.9556 39.6443L89.2612 41.9473L134.221 41.9473L136.527 39.6443L136.527 36.0253L113.141 36.0253L113.141 14.6404L124.999 2.79668L204.543 2.79669L220.683 18.9175L220.683 37.3413L223.482 37.3413L223.482 17.7659L205.696 -1.63609e-05L123.846 -2.70943e-05L111.659 12.173L99.4719 -3.02905e-05L17.7864 -4.10023e-05L0.329372 17.2724L3.17101e-06 17.7659Z" fill="#5A1E7D"/>
                    </svg>
                    <div className={styles.Story_bg_wrap_svg2svg3}>
                        <img className={styles.Story_bg_svg2} src={bg2} alt="" />
                        <img className={styles.Story_bg_svg3} src={bg3} alt="" />
                    </div>
                    <img className={styles.Story_bg_svg5} src={bg5} alt="" />
                    <img className={styles.Story_bg_svg6} src={bg6} alt="" />
                    <img className={styles.Story_bg_svg7} src={bg7} alt="" />



                    <div id="STORY" className={styles.Story_title_container}>
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


