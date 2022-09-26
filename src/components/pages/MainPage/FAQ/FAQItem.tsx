import React, { FC } from 'react';
import styles from './FAQ.module.css'
import arrowImg from './img/arrow.svg'

interface IFAQItemProps {
    title: string,
    description: any
}

const FAQItem:FC<IFAQItemProps> = ({title, description}) => {

    // close and open answer
    const showDescr = () => {
        const arrow = document.getElementById(`${title}`)!
        const descr = document.getElementById(`${description}`)!
        if (arrow.style.transform === 'rotate(0deg)') {
            arrow.style.transform = 'rotate(90deg)'
            descr.style.position = 'relative'
            descr.style.opacity = '1'
            descr.style.visibility = 'visible'
            
        } else {
            arrow.style.transform = 'rotate(0deg)'
            descr.style.opacity = '0'
            descr.style.position = 'absolute'
            descr.style.visibility = 'hidden'
        }
    }

    
    return (
        <div className={styles.FAQ_item_wrap}>
            <div onClick={showDescr} className={styles.FAQ_item_container} >
                <div className={styles.FAQ_item_title_wrap}>
                    <h3 className={styles.FAQ_item_title}>{title}</h3>
                    <img className={styles.FAQ_item_arrow} style={{transform: 'rotate(0deg)'}} src={arrowImg} alt="arrow" id={title}  />
                </div>            
            </div>
            <p id={description} className={styles.FAQ_item_description}>{description}</p>
        </div>
        

    );

};

export default FAQItem;