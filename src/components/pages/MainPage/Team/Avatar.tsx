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
        <div className={styles.Team_profile_mainWrap}>
            <svg className={styles.Team_profile_blur} width="419" height="419" viewBox="0 0 419 419" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_892_101816)">
                        <path d="M374.518 374.189L44.0006 374.189L44.0006 69.0305L58.0764 56.1742L71.8258 44.1573L374.518 44.1573L374.518 374.189Z" fill="#00D5FF"/>
                        </g>
                        <defs>
                        <filter id="filter0_f_892_101816" x="0.000488281" y="0.157227" width="418.517" height="418.032" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur_892_101816"/>
                        </filter>
                        </defs>
                 </svg>
            <div className={styles.Team_profile_wrap} >
                <a rel='noreferrer' target="_blank" href={url} className={styles.Team_profile}>
                    <img className={styles.Team_profile_avatar} src={imgUrl} alt="avatar" />
                    
                    <div className={styles.Team_profile_demiurg_after}>
                        <p>{memberName}</p>
                        <img src={iconTwitter} alt="" width="22" height="18" />
                    </div>
                </a>
            

            </div>
        </div>
        

    );

};

export default Avatar;