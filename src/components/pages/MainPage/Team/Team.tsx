import React, { FC } from 'react';
import styles from './Team.module.css'
import demi from './img/Demiurg.png'
import nastya from './img/Nastya.png'
import max from './img/Max.png'
import zalowsski from './img/lazyAvatar.png'
import bg from './img/bg.svg'
import bg480 from './img/bg480.svg'
import bg320 from './img/bg320.svg'
import Avatar from './Avatar';
import bg1 from './img/bg1.svg'
import bg2 from './img/bg2.svg'
import bg3 from './img/bg3.svg'
import bg4 from './img/bg4.svg'

const Team:FC = () => {

    
    return (
        <div id='TEAM' className={styles.Team} >
            <div className={styles.Team_container}>

                <img className={styles.Team_bg_svg1} src={bg1} alt="" />
                <img className={styles.Team_bg_svg2} src={bg2} alt="" />
                <img className={styles.Team_bg_svg3} src={bg3} alt="" />
                <img className={styles.Team_bg_svg4} src={bg4} alt="" />

                <div className={styles.Team_title_container}>
                    <div>
                        <h2 className={styles.Team_title}>Team</h2>
                        <h2 className={styles.Team_title_blur}>Team</h2>
                        <img className={styles.Team_title_bg} src={bg} alt="" /> 
                        <img className={styles.Team_title_bg480} src={bg480} alt="" />
                        <img className={styles.Team_title_bg320} src={bg320} alt="" />
                    </div>
                </div>

                <div className={styles.Team_profile_container} >

                    <Avatar memberName={'crypto_demiurg'} url={'https://twitter.com/crypto_demiurg'} imgUrl={demi} />
                    <Avatar memberName={'_nasteenish_'} url={'https://twitter.com/_nasteenish_'} imgUrl={nastya} />
                    <Avatar memberName={'lywyl_SOL'} url={'https://twitter.com/lywyl_SOL'} imgUrl={max} />
                    <Avatar memberName={'Zalowsski'} url={'https://twitter.com/Zalowsski'} imgUrl={zalowsski} />

                </div>
            </div>
        </div>
    );

};

export default Team;