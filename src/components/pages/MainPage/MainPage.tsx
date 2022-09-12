import React, { FC } from 'react';
import City from './City/City';
import FAQ from './FAQ/FAQ';
import MainFooter from './Footer/MainFooter';
import MainHeader from './MainHeader/MainHeader';

import styles from './MainPage.module.css'
import RoadMap from './RoadMap/RoadMap';
import Story from './Story/Story';
import Team from './Team/Team';



const MainPage:FC = () => {

    
    return (
        <div className={styles.MainPage} >
            <MainHeader />
            <City />
            {/* <Story /> */}
            {/* <RoadMap /> */}
            {/* <Team />
            <FAQ />
            <MainFooter /> */}
        </div>
    );

};

export default MainPage;