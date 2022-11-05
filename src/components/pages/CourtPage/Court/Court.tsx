import React, { FC } from 'react';
import styles from './Court.module.css'
import court from './img/Court.png'
import bg2 from './img/bg2.svg'


const Court: FC = () => {

    return (
        <div id='ABOUT' className={styles.Court} >
            <img className={styles.Court_decoration_bg2} src={bg2} alt="" />
            <div className={styles.Court_container} >
               <p className={styles.Court_container_description}>At some point, the Wanderers in the Sands decided to do things differently: they started expelling people beyond the gates of the hive city for any fault, and then, after they were turned into piles of ashes, their Nectar-filled bodies were collected so that they could serve the survival of others even in death.</p>
                <img className={styles.Court_container_image} src={court} alt="Court" />
            </div>
        </div>
    );
};

export default Court;