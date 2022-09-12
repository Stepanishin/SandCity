import React, { FC } from 'react';
import styles from './Team.module.css'
import team1 from './img/Team1.png'
import team2 from './img/Team2.png'
import team3 from './img/Team3.png'
import team4 from './img/Team4.png'

const Team:FC = () => {

    
    return (
        <div id='TEAM' className={styles.Team} >
            <div className={styles.Team_container}>
                <h2 className={styles.Team_title} >TEAM</h2>
                <div className={styles.Team_profile_container} >

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team1} alt="avatar" />
                        <p className={styles.Team_profile_name}>Max</p>
                    </div>

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team2} alt="avatar" />
                        <p className={styles.Team_profile_name}>Nastya</p>
                    </div>

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team3} alt="avatar" />
                        <p className={styles.Team_profile_name}>Max</p>
                    </div>

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team4} alt="avatar" />
                        <p className={styles.Team_profile_name}>Max</p>
                    </div>

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team1} alt="avatar" />
                        <p className={styles.Team_profile_name}>Max</p>
                    </div>

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team2} alt="avatar" />
                        <p className={styles.Team_profile_name}>Max</p>
                    </div>

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team3} alt="avatar" />
                        <p className={styles.Team_profile_name}>Max</p>
                    </div>

                    <div className={styles.Team_profile}>
                        <img className={styles.Team_profile_avatar} src={team4} alt="avatar" />
                        <p className={styles.Team_profile_name}>Max</p>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default Team;