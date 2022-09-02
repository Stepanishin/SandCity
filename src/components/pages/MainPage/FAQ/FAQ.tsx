import React, { FC } from 'react';
import styles from './FAQ.module.css'
import FAQItem from './FAQItem';
import arrow from './img/arrow.svg'



const FAQ:FC = () => {

    
    return (
        <div id='FAQ' className={styles.FAQ} >
            <div className={styles.FAQ_container}>
                <h2 className={styles.FAQ_title} >FAQ</h2>
                <FAQItem title={'What is Dust City?'} description={"Is a NFT collection of 2,222 Citizen's that trying to build a decentralized Society on the #Solana Blockchain"} />
                <FAQItem title={'What is Dust City?2'} description={"Is a NFT collection of 2,222 Citizen's that trying to build a decentralized Society on the #Solana Blockchain2"} />
                <FAQItem title={'What is Dust City?3'} description={"Is a NFT collection of 2,222 Citizen's that trying to build a decentralized Society on the #Solana Blockchain3"} />
            </div>

            

        </div>
    );

};

export default FAQ;