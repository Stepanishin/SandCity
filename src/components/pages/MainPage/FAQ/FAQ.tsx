import React, { FC } from 'react';
import styles from './FAQ.module.css'
import FAQItem from './FAQItem';
import arrow from './img/arrow.svg'



const FAQ:FC = () => {

    
    return (
        <div id='FAQ' className={styles.FAQ} >
            <div className={styles.FAQ_container}>
                <h2 className={styles.FAQ_title} >FAQ</h2>
                <FAQItem title={'What is Dust City?'} description={"This is a NFT collection of 3333 Сitizens who are trying to survive and revive civilization."} />
                <FAQItem title={'When is the mint date?'} description={"TBA"} />
                <FAQItem title={'What is the mint price?'} description={"TBA "} />
                <FAQItem title={'How to get a whitelist?'} description={"The easiest way is to hold 3 Rektville NFTs. Also we encourage people to genuinely engage and help others in Dust City! Visit our Discord server to learn more about how you can get Whitelisted."} />
                <FAQItem title={'What is Rektville?'} description={["This is our previous degen NFT collection.", <br />, "Twitter: ", <br />, <a style={{color: `rgb(237, 164, 92)`}} rel='noreferrer' target="_blank" href='https://twitter.com/rektvillenft'>twitter.com/rektvillenft</a>, <br />, " MagicEden: ", <br /> , <a style={{color: `rgb(237, 164, 92)`}} rel='noreferrer' target="_blank" href='https://magiceden.io/marketplace/rektville'>Magiceden.io/marketplace/rektville</a> ]} />
                <FAQItem title={'How many Rektville NFTs do you need to hold to mint Dust City?'} description={"Every 3 Rektville NFTs = possibility to mint 1 Dust City NFT on WL mint phase"} />
                <FAQItem title={'Will the Rektville NFTs be burned after the mint?'} description={["We do not implement that opportunity for people to decide what to do with them: leave them as a keepsake or burn them themselves on ", <a style={{color: `rgb(237, 164, 92)`}} rel='noreferrer' target="_blank" href='https://sol-incinerator.com/#/'>sol-incinerator.com</a>]} />
            </div>

            

        </div>
    );

};

export default FAQ;
