import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { FC } from 'react';
import { Connection} from '@metaplex/js'; 
import './ConnectWallet.css'

require('@solana/wallet-adapter-react-ui/styles.css');



const ConnectWallet:FC = () => {
    return (   
        <Content /> 
    );
};

export default ConnectWallet;

const Content: FC= () => {
  
    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();



    return (
        
        <WalletMultiButton />
        
    );
};