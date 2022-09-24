import React, { FC } from 'react';
import styles from './RoadMap.module.css'
import bg from './img/bg.svg'
import bg480 from './img/bg480.svg'
import bg320 from './img/bg320.svg'

const RoadMap:FC = () => {

    
    return (
        <div id='ROADMAP' className={styles.RoadMap} >
            <div className={styles.RoadMap_container}>
                    <div className={styles.Roadmap_title_container}>
                        <div>
                            <h2 className={styles.Roadmap_title}>ROADMAP</h2>
                            <h2 className={styles.Roadmap_title_blur}>ROADMAP</h2>
                            <img className={styles.Roadmap_title_bg} src={bg} alt="" /> 
                            <img className={styles.Roadmap_title_bg480} src={bg480} alt="" />
                            <img className={styles.Roadmap_title_bg320} src={bg320} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    );

};

export default RoadMap;