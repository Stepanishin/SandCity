import React, { FC } from 'react';
import styles from './Team.module.css'
import demi from './img/Demiurg.png'
import nastya from './img/Nastya.png'
import max from './img/Max.png'
import zalowsski from './img/lazyAvatar.png'
import bg from './img/bg.svg'
import bg480 from './img/bg480.svg'
import bg320 from './img/bg320.svg'
import iconTwitter from './img/iconTwitter.svg'

export interface IAvatarProps {
    memberName?: string,
    url?: string,
    imgUrl?: string
}

const Avatar:FC<IAvatarProps> = ({ memberName, url ,imgUrl }) => {
  
    return (

        <div className={styles.Team_profile_wrap} >
            <a rel='noreferrer' target="_blank" href={url} className={styles.Team_profile}>
                <img className={styles.Team_profile_avatar} src={imgUrl} alt="avatar" />
                <div className={styles.Team_profile_demiurg_after}>
                    <p>{memberName}</p>
                    <img src={iconTwitter} alt="" width="22" height="18" />
                </div>
            </a>
        </div>

    );

};

export default Avatar;