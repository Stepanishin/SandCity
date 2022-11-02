import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { useGetJudgesQuery } from '../../../store/reducers/firebase.api';
import Admin from './Admin/Admin';
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
    const { publicKey, sendTransaction } = useWallet();

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
            {
                publicKey && (publicKey.toBase58() === 'A8grZ1aaL9Hm8sC7mtVyiAqdkFf4mB63aBpfq2WR9drt' || publicKey.toBase58() === 'gfehnueiUxNr3RuboSeTdj9S5ttN7HpbxP23V3xoPMW') && <Admin data={data} />
            }
        </div>
    );

};

export default CourtPage;