import React, {useEffect} from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { FC } from 'react';
// import { Connection} from '@metaplex/js'; 
import './ConnectWallet.css'
import { accessToFlatSlice } from '../../../store/reducers/getAccesToFlatReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import * as web3 from "@solana/web3.js";
import { getDatabase } from 'firebase/database';
import { ref } from 'firebase/database';
import { get } from 'firebase/database';
import { child } from 'firebase/database';
import { set } from 'firebase/database';
import { update } from 'firebase/database';
import { Routes, Route, useParams } from 'react-router-dom';
import { useGetUsersQuery, useLazyGetUsersQuery } from '../../../store/reducers/firebase.api';
import { changeStateSlice } from '../../../store/reducers/getChangeState';

require('@solana/wallet-adapter-react-ui/styles.css');



const ConnectWallet:FC = () => {
    return (   
        <Content /> 
    );
};

export default ConnectWallet;

const Content: FC= () => {


    let {isChange} = useAppSelector(state => state.changeStateSlice)
    const {changeState} = changeStateSlice.actions

    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)
    const {accessToFalt} = accessToFlatSlice.actions
    const dispatch = useAppDispatch()
  
    const connection = new web3.Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();

    const db = getDatabase();

    let refLink
    
    useEffect(() => {
        refLink = window.location.search.split("?")[1] 
        if (refLink && refLink.length > 0)  {
            localStorage.setItem('refLink', refLink);  // Сохраняем Реферальную ссылку в localstorage, если она существует
        } 
    }, [])

    if (publicKey) {
        dispatch(accessToFalt(true))
    }
    if (!publicKey) {
        dispatch(accessToFalt(false))
    }

    if (publicKey) {
        const updateDb = () => {
            const dbRef = ref(getDatabase());
            get(child(dbRef,  `/Users`)).then((snapshot:any) => {
                if (snapshot.exists()) {
                    let userWallet = publicKey.toBase58()
                    let arr = snapshot.val()
                    const updates:any = {};
                    if (arr.hasOwnProperty(`${userWallet}`)) {
                        return
                    } else {
                        let refCode = Math.random().toString().substr(2, 10);
                        let refOwner = localStorage.getItem('refLink')
                        set(ref(db, `/Users/${userWallet}`), {
                            'userWallet': userWallet,
                            'status': 'Сitizen',
                            'refCode': refCode,
                            'refOwner': refOwner,
                            'referers': {
                                1:1
                            },
                            'score': 0

                        });
                    }
                    dispatch(changeState())
                    return update(ref(db), updates);
                    
                }
            }).catch((error:any) => {
                console.error(error);
            });

        }
        updateDb()
    }


    return (
        
        <WalletMultiButton />
        
    );
};