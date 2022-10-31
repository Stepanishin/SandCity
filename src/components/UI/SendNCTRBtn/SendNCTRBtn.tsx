import React from 'react';
import styles from './SendSolanaBtn.module.css'
import { useEffect } from 'react';
import { FC, ReactNode, useMemo, useCallback, useState } from 'react';

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js';
// import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getDatabase, ref, get, child, push, update, set } from "firebase/database";

import { TOKEN_PROGRAM_ID, createTransferInstruction } from "@solana/spl-token";

import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";

import * as bs58 from "bs58";
import { getOrCreateAssociatedTokenAccount } from '@solana/spl-token';




// import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
// import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';


export interface ISendSolanaBtnProps {
    wallet?: string,
    SolForWhat?: string,
    currentCard?: any,
    BET?: number
}

const SendNCTRBtn:FC<ISendSolanaBtnProps> = ({currentCard, BET, SolForWhat}) => {

        // const connection = new Connection(clusterApiUrl("mainnet-beta"))
        const { connection } = useConnection();
        const { publicKey, signTransaction, sendTransaction } = useWallet();
        // const db = getDatabase();
        let alarm_loading : any
        let card_timeAndBet_timer:any
        let alarm_sendSucces:any
        let alarm_sendError_chooseBET:any
        let alarm_sendError_something:any
    
        let theWallet = 'A8grZ1aaL9Hm8sC7mtVyiAqdkFf4mB63aBpfq2WR9drt'
        let mintNCTRAdress = 'AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC'

        const onClick = useCallback( async (e:any) => {

            try {
                if (!publicKey || !signTransaction) throw new WalletNotConnectedError()
                const toPublicKey = new PublicKey(theWallet) //Кошелек, куда пересылать
                const mint = new PublicKey(mintNCTRAdress) //Адрес токена ,который нужно переслать

                const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
                    connection,
                    publicKey,
                    mint,
                    publicKey,
                    signTransaction
                )

                const toTokenAccount = await getOrCreateAssociatedTokenAccount(
                    connection,
                    publicKey,
                    mint,
                    toPublicKey,
                    signTransaction
                )

                const transaction = new Transaction().add(
                    createTransferInstruction(
                        fromTokenAccount.address, // source
                        toTokenAccount.address, // dest
                        publicKey,
                        0.1 * LAMPORTS_PER_SOL,
                        [],
                        TOKEN_PROGRAM_ID
                    )
                )

                const blockHash = await connection.getRecentBlockhash()
                transaction.feePayer = await publicKey
                transaction.recentBlockhash = await blockHash.blockhash
                const signed = await signTransaction(transaction)

                await connection.sendRawTransaction(signed.serialize())
            } catch (error: any) {
            }
    
             
        }, [publicKey, sendTransaction, connection ]);

   

    
    
    return (
        <div>
            <button onClick={onClick} >
                BET NCTR
            </button>

        </div>
        
        
    );

};

export default SendNCTRBtn;