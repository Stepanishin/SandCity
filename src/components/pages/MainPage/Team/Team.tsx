import React, { FC } from 'react';
import styles from './Team.module.css'
import demi from './img/Demiurg.jpg'
import nastya from './img/Nastya.jpg'
import max from './img/Max.jpg'
import zalowsski from './img/lazyAvatar.png'

const Team:FC = () => {

    
    return (
        <div id='TEAM' className={styles.Team} >
            <div className={styles.Team_container}>
                <h2 className={styles.Team_title} >TEAM</h2>
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