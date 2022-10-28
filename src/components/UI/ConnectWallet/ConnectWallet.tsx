import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { FC } from 'react';
import { Connection} from '@metaplex/js'; 
import './ConnectWallet.css'
import { accessToFlatSlice } from '../../../store/reducers/getAccesToFlatReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

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
  
    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();

    if (publicKey) {
        dispatch(accessToFalt(true))
    }
    if (!publicKey) {
        dispatch(accessToFalt(false))
    }


    return (
        
        <WalletMultiButton />
        
    );
};