import React, { FC } from 'react';
import styles from './FAQ.module.css'
import arrowImg from './img/arrow.svg'

interface IFAQItemProps {
    title: string,
    description: string
}

const FAQItem:FC<IFAQItemProps> = ({title, description}) => {

    // close and open answer
    const showDescr = () => {
        const arrow = document.getElementById(`${title}`)!
        const descr = document.getElementById(`${description}`)!
        if (arrow.style.transform === 'scale(-1)') {
            arrow.style.transform = 'scale(1)'
            descr.style.position = 'absolute'
            descr.style.opacity = '0'
        } else {
            arrow.style.transform = 'scale(-1)'
            descr.style.opacity = '1'
            descr.style.position = 'relative'
        }
    }

    
    return (

        <div className={styles.FAQ_item_container} >

            <div className={styles.FAQ_item_title_wrap}>
                <h3 className={styles.FAQ_item_title}>What is Dust City?</h3>
                <img onClick={showDescr} className={styles.FAQ_item_arrow} id={title} src={arrowImg} alt="arrow" />
            </div>
                
            <p id={description} className={styles.FAQ_item_description}>{description}</p>

        </div>

    );

};

export default FAQItem;