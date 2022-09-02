import React, { FC } from 'react';
import Court from './Court/Court';
import CourtHeader from './CourtHeader/CourtHeader';
import styles from './CourtPage.module.css'
import History from './History/History';
import Trials from './Trials/Trials';




const CourtPage:FC = () => {

    
    return (
        <div className={styles.CourtPage} >
            <CourtHeader />
            <History />
            <Court />
            <Trials />
        </div>
    );

};

export default CourtPage;