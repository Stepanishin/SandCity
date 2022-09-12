import React, { FC } from 'react';
import styles from './City.module.css'
import mainbg from '../../../../assets/img/main 1.png'
import { Link } from 'react-router-dom';
import Court from './img/Court.png'
import emporium from './img/emporium.png'
import Lab from './img/Lab.png'
import Stacking from './img/stacking.png'


const City:FC = () => {
  
    return (
        <div id='CITY' className={styles.City} >

            <img className={styles.City_bg} src={mainbg} />

            <Link to={'./'} className={styles.City_Court_wrapper}>
                <img className={styles.City_Court} src={Court} alt="" />
                <p className={styles.City_Court_descr}>Court</p>
            </Link>

            <Link to={'./'} className={styles.City_emporium_wrapper}>
                <img className={styles.City_emporium} src={emporium} alt="" />
                <p className={styles.City_emporium_descr}>Emporium</p>
            </Link>

            <Link to={'./'} className={styles.City_Lab_wrapper}>
                <img className={styles.City_Lab} src={Lab} alt="" />
                <p className={styles.City_Lab_descr}>Symbiosis Labs</p>
            </Link>

            <Link to={'./'} className={styles.City_Stacking_wrapper}>
                <img className={styles.City_Stacking} src={Stacking} alt="" />
                <p className={styles.City_Stacking_descr}>Stacking</p>
            </Link>
            

        </div>
    );

};

export default City;
