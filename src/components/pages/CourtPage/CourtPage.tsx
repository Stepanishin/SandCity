import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { useGetJudgesQuery } from '../../../store/reducers/firebase.api';
import Archive from './Archive/Archive';
import Court from './Court/Court';
import CourtFooter from './CourtFooter/CourtFooter';
import CourtHeader from './CourtHeader/CourtHeader';
import styles from './CourtPage.module.css'
import FLAT from './Flat/Flat';
import History from './History/History';
import Trials from './Trials/Trials';




const CourtPage:FC = () => {

    const { isLoading, data} = useGetJudgesQuery('')
    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)

    
    return (
        <div className={styles.CourtPage} >
            <CourtHeader />
            {/* <History /> */}
            {/* <Court /> */}
            <Trials data={data} />
            {
                isShowFlat && <FLAT data={data} />
            }
            <Archive data={data} />
            <CourtFooter />
        </div>
    );

};

export default CourtPage;