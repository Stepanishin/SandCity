import React, { FC } from 'react';
import styles from './City.module.css'
import Court from './img/Court.png'
import mainbg from '../../../../assets/img/main 1.png'


const City:FC = () => {

    
    return (
        <div id='CITY' className={styles.City} >

            <img className={styles.City_bg} src={mainbg} useMap="#image-map" />

            <map name="image-map">
                <area className={styles.City_Court} alt="1" title="1" href="#" coords="639,816,560,501" shape="rect">
                </area>
                {/* <area target="_blank" alt="2" title="2" href="2" coords="400,714,322,308" shape="rect" /> */}
            </map>
        </div>
    );

};

export default City;
