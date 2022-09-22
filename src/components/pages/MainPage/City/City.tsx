import React, { FC } from 'react';
import styles from './City.module.css'
import mainbg from './img/Dust-City.png'



const City:FC = () => {
  
    return (
        <div id='CITY' className={styles.City} >

            {/* <img className={styles.City_bg} src={mainbg} />        */}
            <div className={styles.City_bg_bottom}></div>
        </div>
    );

};

export default City;
