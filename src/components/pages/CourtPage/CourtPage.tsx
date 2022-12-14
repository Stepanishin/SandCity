import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { useGetUsersQuery, useGetJudgesQuery, useLazyGetUsersQuery, useLazyGetJudgesQuery } from '../../../store/reducers/firebase.api';
import Admin from './Admin/Admin';
import Archive from './Archive/Archive';
import Court from './Court/Court';
import CourtFooter from './CourtFooter/CourtFooter';
import CourtHeader from './CourtHeader/CourtHeader';
import styles from './CourtPage.module.css'
import FLAT from '../../Stats/Flat/Flat';
import History from './History/History';
import Trials from './Trials/Trials';
import Records from './Records/Records';
import HeroScreen from '../../HeroScreen/HeroScreen';




const CourtPage:FC = () => {

    // const { data} = useGetJudgesQuery('')
    // const { data: usersData} = useGetUsersQuery('')
    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)
    const { publicKey, sendTransaction } = useWallet();

    let {isChange} = useAppSelector(state => state.changeStateSlice)
    const [fetchGetJudges, { data }] = useLazyGetJudgesQuery()
    const [fetchGetUsers, { data:usersData }] = useLazyGetUsersQuery()
    useEffect(() => {
        fetchGetJudges()
        fetchGetUsers()
    }, [])
    useEffect(() => {
        fetchGetJudges()
        fetchGetUsers()
    }, [isChange])

    return (
        <div className={styles.CourtPage} >       
            <CourtHeader />
            <Court />
            <Trials data={data} />
            <Records data={data} usersData={usersData} />
            <Archive data={data} />
        </div>
    );

};

export default CourtPage;