import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useGetJudgesQuery, useGetUsersQuery } from '../../store/reducers/firebase.api';
import Admin from '../pages/CourtPage/Admin/Admin';
import CourtFooter from '../pages/CourtPage/CourtFooter/CourtFooter';
import CourtHeader from '../pages/CourtPage/CourtHeader/CourtHeader';
import FLAT from './Flat/Flat';
import ConnectWallet from '../UI/ConnectWallet/ConnectWallet';
import History from './History/History';

// import styles from './CourtPage.module.css'





const Stats:FC = () => {

    const { data} = useGetJudgesQuery('')
    const { data: usersData} = useGetUsersQuery('')
    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)
    const { publicKey, sendTransaction } = useWallet();

    return (
        <div>
            <CourtHeader />
            {
                publicKey
                ?
                    isShowFlat && <FLAT data={data} usersData={usersData} />         
                :
                <div style={{paddingTop: '300px', display:'flex', justifyContent: 'center', minHeight: '100vh'}} >
                    <ConnectWallet />
                </div>
            }
            {
                publicKey && isShowFlat && <History data={data} usersData={usersData} />
            }                  
            {/* <CourtFooter /> */}
            {
                    publicKey && (publicKey.toBase58() === 'A8grZ1aaL9Hm8sC7mtVyiAqdkFf4mB63aBpfq2WR9drt' || publicKey.toBase58() === 'gfehnueiUxNr3RuboSeTdj9S5ttN7HpbxP23V3xoPMW') && <Admin data={data} usersData={usersData} />
            }
        </div>
    );

};

export default Stats;