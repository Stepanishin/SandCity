import React, { FC } from 'react';
import styles from './Court.module.css'


const Court: FC = () => {

    return (
        <div className={styles.Court} >
            <div className={styles.Court_container} >
                <p className={styles.Court_barcode} >In the new world, it is very important not to forget about justice.</p>
                <h2 className={styles.Court_title} >Court</h2>
                <p className={styles.Court_description} >"Court" is the place where you have to make your verdict.</p>
            </div>
        </div>
    );
};

export default Court;