import React, { FC } from 'react';
import styles from './MainFooter.module.css'
import twitter from './img/twitter.svg'
import discord from './img/discord.png'
import me from './img/me.png'


const MainFooter:FC = () => {

    
    return (
        <div className={styles.Footer} >
            <div className={styles.Footer_container}>
                <p className={styles.Footer_description}>© 2022 DUST CITY. ALL RIGHTS RESERVED.</p>
                <div className={styles.Footer_links_container}>
                    <a rel='noreferrer' target="_blank" href="https://twitter.com/rektvillenft"><img src={twitter} alt="twitter" /></a>
                    <a rel='noreferrer' target="_blank" href="https://discord.com/channels/985493399509561405/1006456053120122911"><img src={discord} alt="discord" /></a>
                    <a rel='noreferrer' target="_blank" href="https://magiceden.io/marketplace/rektville?activeTab=items"><img src={me} alt="me" /></a>
                </div>
            </div>
        </div>
    );

};

export default MainFooter;