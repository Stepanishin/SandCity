import React, { FC } from 'react';
import styles from './Team.module.css'
import demi from './img/Demiurg.png'
import nastya from './img/Nastya.png'
import max from './img/Max.png'
import zalowsski from './img/lazyAvatar.png'
import bg from './img/bg.svg'
import bg480 from './img/bg480.svg'
import bg320 from './img/bg320.svg'

const Team:FC = () => {

    
    return (
        <div id='TEAM' className={styles.Team} >
            <div className={styles.Team_container}>
                <div className={styles.Team_container}>
                        <div className={styles.Team_title_container}>
                            <div>
                                <h2 className={styles.Team_title}>Team</h2>
                                <h2 className={styles.Team_title_blur}>Team</h2>
                                <img className={styles.Team_title_bg} src={bg} alt="" /> 
                                <img className={styles.Team_title_bg480} src={bg480} alt="" />
                                <img className={styles.Team_title_bg320} src={bg320} alt="" />
                            </div>
                        </div>
                </div>

                <div className={styles.Team_profile_container} >

                    <a rel='noreferrer' target="_blank" href='https://twitter.com/crypto_demiurg' className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={demi} alt="avatar" />
                    </a>

                    <a rel='noreferrer' target="_blank" href='https://twitter.com/_nasteenish_' className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={nastya} alt="avatar" />
                    </a>

                    <a rel='noreferrer' target="_blank" href='https://twitter.com/lywyl_SOL' className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={max} alt="avatar" />
                    </a>

                    <a rel='noreferrer' target="_blank" href='https://twitter.com/Evgenii33952894' className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={zalowsski} alt="avatar" />
                    </a>

                </div>
            </div>
        </div>
    );

};

export default Team;