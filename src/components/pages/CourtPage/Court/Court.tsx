import React, { FC } from 'react';
import styles from './Court.module.css'


const Court: FC = () => {

    return (
        <div id='ABOUT' className={styles.Court} >
            <div className={styles.Court_container} >
                <p className={styles.Court_barcode} >In the new world, it is very important not to forget about justice.</p>
                <h2 className={styles.Court_title} >Court</h2>
                <p className={styles.Court_description} >The cruelest “Court” - salvation for the city. As the Nectar became scarce, Wanderers began to send condemned people outside the hive city for any offense, and then, when their bodies turned into a pile of dust mixed with Nectar, condemned could serve the survival of others even in death.</p>
            </div>
        </div>
    );
};

export default Court;