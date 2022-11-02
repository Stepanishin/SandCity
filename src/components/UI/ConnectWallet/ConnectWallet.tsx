import React from 'react';
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

require('@solana/wallet-adapter-react-ui/styles.css');



const ConnectWallet:FC = () => {
    return (   
        <Content /> 
    );
};

export default ConnectWallet;

const Content: FC= () => {

    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)
    const {accessToFalt} = accessToFlatSlice.actions
    const dispatch = useAppDispatch()
  
    const connection = new web3.Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();

    const db = getDatabase();

    if (publicKey) {
        dispatch(accessToFalt(true))
    }
    if (!publicKey) {
        dispatch(accessToFalt(false))
    }

    if (publicKey) {
        const updateDb = () => {
            const dbRef = ref(getDatabase());
            get(child(dbRef,  `/users`)).then((snapshot:any) => {
                if (snapshot.exists()) {
                    let userWallet = publicKey.toBase58()
                    let arr = snapshot.val()
                    const updates:any = {};
                    if (arr.hasOwnProperty(`${userWallet}`)) {
                        return
                    } else {
                        set(ref(db, `/users/${userWallet}`), {
                            'userWallet': userWallet,
                            'status': 'Сitizen',
                        });
                    }
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