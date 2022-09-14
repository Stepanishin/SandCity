import React, { FC } from 'react';
import styles from './History.module.css'
import bgImg from './img/crt1.png'


const History: FC = () => {

    return (
        <div className={styles.History} >
            <div className={styles.History_container}>
                <img className={styles.History_bg} src={bgImg} alt="avatar" />
            </div>
        </div>
    );
};

export default History;