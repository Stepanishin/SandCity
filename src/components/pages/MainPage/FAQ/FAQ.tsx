import React, { FC } from 'react';
import styles from './FAQ.module.css'
import FAQItem from './FAQItem';
import bg from './img/bg.svg'
import bg480 from './img/bg480.svg'
import bg320 from './img/bg320.svg'
import bg1 from './img/bg1.svg'
import bg2 from './img/bg2.svg'
import bg3 from './img/bg3.svg'



const FAQ:FC = () => {

    
    return (
        <div id='FAQ' className={styles.FAQ} >
            <div className={styles.FAQ_container}>

                <img className={styles.FAQ_bg_svg1} src={bg1} alt="" />
                <img className={styles.FAQ_bg_svg2} src={bg2} alt="" />
                <img className={styles.FAQ_bg_svg3} src={bg3} alt="" />

                <div className={styles.FAQ_title_container}>
                    <div>
                        <h2 className={styles.FAQ_title}>FAQ</h2>
                        <h2 className={styles.FAQ_title_blur}>FAQ</h2>
                        <img className={styles.FAQ_title_bg} src={bg} alt="" /> 
                        <img className={styles.FAQ_title_bg480} src={bg480} alt="" />
                        <img className={styles.FAQ_title_bg320} src={bg320} alt="" />
                    </div>
                </div>
                <div className={styles.FAQ_list_container}>
                    <FAQItem title={'What is Dust City?'} description={"This is a NFT collection of 3333 Сitizens who are trying to survive and revive civilization."} />
                    <FAQItem title={'When is the mint date?'} description={"TBA"} />
                    <FAQItem title={'What is the mint price?'} description={"0.5 SOL "} />
                    <FAQItem title={'How to get a whitelist?'} description={"The easiest way is to hold 3 Rektville NFTs. Also we encourage people to genuinely engage and help others in Dust City! Visit our Discord server to learn more about how you can get Whitelisted."} />
                    <FAQItem title={'What is Rektville?'} description={["This is our previous degen NFT collection.", <br />, "Twitter: ", <br />, <a style={{color: `#FF0080`}} rel='noreferrer' target="_blank" href='https://twitter.com/rektvillenft'>twitter.com/rektvillenft</a>, <br />, " MagicEden: ", <br /> , <a style={{color: `#FF0080`}} rel='noreferrer' target="_blank" href='https://magiceden.io/marketplace/rektville'>Magiceden.io/marketplace/rektville</a> ]} />
                    <FAQItem title={'How many Rektville NFTs do you need to hold to mint Dust City?'} description={"Every 3 Rektville NFTs = possibility to mint 1 Dust City NFT on WL mint phase"} />
                    <FAQItem title={'Will the Rektville NFTs be burned after the mint?'} description={["We do not implement that opportunity for people to decide what to do with them: leave them as a keepsake or burn them themselves on ", <a style={{color: `#FF0080`}} rel='noreferrer' target="_blank" href='https://sol-incinerator.com/#/'>sol-incinerator.com</a>]} />
                </div>         
            </div>
        </div>
    );

};

export default FAQ;
