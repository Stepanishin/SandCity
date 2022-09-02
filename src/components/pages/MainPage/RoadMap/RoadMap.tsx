import React, { FC } from 'react';
import styles from './RoadMap.module.css'
import step1Img from './img/idc 1.png'
import step2Img from './img/exo1.png'
import step3Img from './img/g31.png'
import line from './img/Line 1.svg'



const RoadMap:FC = () => {

    
    return (
        <div id='ROADMAP' className={styles.RoadMap} >
            <div className={styles.RoadMap_container}>
                <h2 className={styles.RoadMap_title} >ROADMAP</h2>
            </div>

            <div className={styles.RoadMap_step_container}>
                <img src={step1Img} alt="" />
                <img src={line} alt="" />
                <div className={styles.RoadMap_step_description_container}>
                    <p className={styles.RoadMap_step_description_number}>1</p>
                    <p className={styles.RoadMap_step_description_title} >Gen 1:</p>
                    <ul className={styles.RoadMap_step_description_list}>
                        <li>"Court” rev.shares</li>
                        <li>Staking for $HOPE</li>
                        <li>WL Opportunities</li>
                        <li>”Emporium”</li>
                        <li>Access to the DAO</li>
                    </ul>
                </div>
            </div>

            <div className={styles.RoadMap_step2_container}>
                <div className={styles.RoadMap_step2_description_container}>
                    <p className={styles.RoadMap_step_description_number}>2</p>
                    <p className={styles.RoadMap_step_description_title} >Gen 2:</p>
                    <ul className={styles.RoadMap_step2_description_list}>
                        <li>Reconnaissance PFP <br /> Mint for $HOPE</li>
                        <li>Exploring Missions</li>
                        <li>???</li>
                        <li>???</li>
                    </ul>
                </div>
                <img src={line} alt="" />
                <img src={step2Img} alt="" />
            </div>

            <div className={styles.RoadMap_step3_container}>
                <img className={styles.RoadMap_step3_img} src={step3Img} alt="" />
                <img src={line} alt="" />
                <div className={styles.RoadMap_step3_description_container}>
                    <p className={styles.RoadMap_step_description_number}>3</p>
                    <p className={styles.RoadMap_step_description_title} >Gen 3:</p>
                    <ul className={styles.RoadMap_step_description_list}>
                        <li>”Symbiosis Labs”</li>
                        <li>OG Launchpad</li>
                        <li>Mutations</li>
                        <li>Roadmap v2.0</li>
                    </ul>
                </div>
            </div>

        </div>
    );

};

export default RoadMap;