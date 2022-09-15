import React, { FC } from 'react';
import styles from './CourtFooter.module.css'
import twitter from '../../../../assets/img/twitter.svg'
import discord from '../../../../assets/img/discord.png'
import me from '../../../../assets/img/me.png'

const CourtFooter:FC = () => {

    
    return (
        <div className={styles.Footer} >
            <div className={styles.Footer_container}>
                <p className={styles.Footer_description}>© 2022 DUST CITY. ALL RIGHTS RESERVED.</p>
                <div className={styles.Footer_links_container}>
                    <a className={styles.Footer_link} rel='noreferrer' target="_blank" href="https://discord.com/channels/985493399509561405/1006456053120122911"><img className={styles.Footer_link_image_discord} src={discord} alt="discord" /></a>
                    <a className={styles.Footer_link} rel='noreferrer' target="_blank" href="https://twitter.com/rektvillenft"><img className={styles.Footer_link_image_twitter} src={twitter} alt="twitter" /></a>
                    <a className={styles.Footer_link} rel='noreferrer' target="_blank" href="https://magiceden.io/marketplace/rektville?activeTab=items"><img className={styles.Footer_link_image_me} src={me} alt="me" /></a>
                </div>
            </div>
        </div>
    );

};

export default CourtFooter;