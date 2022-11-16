import React from 'react';
import styles from './SendNCTR.module.css'
import { useEffect } from 'react';
import { FC, ReactNode, useMemo, useCallback, useState } from 'react';
import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getDatabase, ref, get, child, push, update, set } from "firebase/database";
import { TOKEN_PROGRAM_ID, createTransferInstruction } from "@solana/spl-token";
import { getOrCreateAssociatedTokenAccount } from '@solana/spl-token';

import toast from 'react-hot-toast';
import { Toaster, resolveValue } from 'react-hot-toast';





export interface ISendSolanaBtnProps {
    wallet?: string,
    currentCard?: any,
    BET?: number
}

const SendNCTRBtn:FC<ISendSolanaBtnProps> = ({currentCard, BET }) => {

        const { connection } = useConnection();
        const { publicKey, signTransaction, sendTransaction } = useWallet();
        const db = getDatabase();
        let alarm_loading : any
        let card_timeAndBet_timer:any
        let alarm_sendSucces:any
        let alarm_sendError_chooseBET:any
        let alarm_sendError_something:any
        let {SolForWhat} = useAppSelector(state => state.SolForWhatSlice)

        let theWallet:any = currentCard[0][1].walletForBet
        let mintNCTRAdress = 'AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC'

        // Создаём тосты*(алармы)
        const succes = () => {
            toast.success('Your bid has been accepted!')
        };
        const bidNotSelected = () => {
            toast.error('Bid not selected!')
        };
        const smhWrong = () => {
            toast.error('Something went wrong!')
        };
        const betToSmall = () => {
            toast.error('Your bet is too small!')
        };
        // 

        const onClick = useCallback( async (e:any) => {
            alarm_loading = document.querySelector('#alarm_loading')!
            card_timeAndBet_timer = document.querySelector('#card_timeAndBet_timer')
            alarm_sendSucces = document.querySelector('#alarm_sendSucces')
            alarm_sendError_chooseBET = document.querySelector('#alarm_sendError_chooseBET')
            alarm_sendError_something = document.querySelector('#alarm_sendError_something')

            // Если не выбрали на какое событие ставить
            if (SolForWhat === '') {
                bidNotSelected()
                return false
            }
            // 

            // Если не присоединили кошелек
            if (!publicKey) {
                let wl: HTMLElement = document.querySelector('.wallet-adapter-button')!
                if (wl instanceof HTMLElement) {
                        wl.click()         
                }  
            }
            // 
            // Если ставка слишком маленькая
            if (BET && BET < 10) {
                betToSmall()
                return false
            }
            // 
            try {
                ////////////////////////SOLANA///////////////////////////////////////////////////////////////////////////////////////////////////////////////   
                if (!publicKey || !signTransaction) throw new WalletNotConnectedError()

                alarm_loading.style.display = 'block'

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
                let lamportsI = LAMPORTS_PER_SOL*BET!;
                const transaction = new Transaction().add(
                    createTransferInstruction(
                        fromTokenAccount.address, // source
                        toTokenAccount.address, // dest
                        publicKey,
                        lamportsI,
                        [],
                        TOKEN_PROGRAM_ID
                    )
                )

                const blockHash = await connection.getRecentBlockhash()
                transaction.feePayer = await publicKey
                transaction.recentBlockhash = await blockHash.blockhash
                const signed = await signTransaction(transaction)
                await connection.sendRawTransaction(signed.serialize())
                ///////////////////////DATA BASE///////////////////////////////////////////////////////////////////////////////////////////////////////////
                const updateDb = () => {

                    const dbRef = ref(getDatabase());
                            get(child(dbRef,  `/Judges/${currentCard[0][1].name}${currentCard[0][1].id}`)).then((snapshot:any) => {
                            if (snapshot.exists()) {
                                let arr = snapshot.val()
                                const updates:any = {};
                                let solQuantity:any = 0;
        
                                // Определяем, куда и сколько будет приплюсовывать ставку в базе данных, draw, less or more
                                if (SolForWhat === 'SolForMore') {
                                    solQuantity = arr.BetNCTR.SolForMore
                                } else if (SolForWhat === 'SolForLess') {
                                    solQuantity = arr.BetNCTR.SolForLess
                                } else if (SolForWhat === 'SolForDraw') {
                                    solQuantity = arr.BetNCTR.SolForDraw
                                }
                                // Делаем запись в базу данных
                                updates[`/Judges/${currentCard[0][1].name}${currentCard[0][1].id}/BetNCTR` + `/${SolForWhat}/`] = BET + solQuantity;
        
                                // создаём и Добавляем в базу кошелек и сумму ставки этого кошелька
                                let userWallet = publicKey.toBase58()
                                if (arr.BetNCTR.wallets[`${SolForWhat}`].hasOwnProperty(`${userWallet}`)) {
                                    let currentBet = arr.BetNCTR.wallets[`${SolForWhat}`][userWallet].bet
                                    updates[`/Judges/${currentCard[0][1].name}${currentCard[0][1].id}/BetNCTR/wallets/${SolForWhat}/${userWallet}/bet/`] = currentBet + BET
                                } else {
                                        set(ref(db, `/Judges/${currentCard[0][1].name}${currentCard[0][1].id}/BetNCTR/wallets/${SolForWhat}/${userWallet}`), {
                                            'userWallet': userWallet,
                                            'bet': BET,
                                        } );
                                }
        
                                // Закрытие Лоадера
                                const closeAlarmLoading =() => {
                                    alarm_loading.style.display = 'none'
                                }
                                setTimeout(closeAlarmLoading, 1000)
                                // 
        
                                // Сигнал , что всё прошло успешно
                                succes()
        
                                return update(ref(db), updates);
            
                            } else {
                                console.log("No data available");
                                smhWrong()
                            }
                            }).catch((error:any) => {
                            console.error(error);
                            smhWrong()
                            });
                }
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
                updateDb()
            } catch (error: any) {
                // Закрытие Лоадера
                const closeAlarmLoading =() => {
                    alarm_loading.style.display = 'none'
                }
                setTimeout(closeAlarmLoading, 1000)
                // 
                smhWrong()
            }
    
             
        }, [publicKey, sendTransaction, connection, SolForWhat, BET, currentCard ]);

   

    
    
    return (
        <div>
            <button onClick={onClick} className={styles.card_timeAndBet_btn}>
                <span>BET</span>
            </button>

            
            <div id='alarm_loading' className={styles.alarm_loading}>
                <div className={styles.loader}>
                    <div className={styles.loader_inner}>
                        <div className={styles.loader_line_wrap} >
                        <div className={styles.loader_line} ></div>
                        
                        </div>
                        <div className={styles.loader_line_wrap} >
                        <div className={styles.loader_line} ></div>
                        </div>
                        <div className={styles.loader_line_wrap}>
                        <div className={styles.loader_line}></div>
                        </div>
                        <div className={styles.loader_line_wrap}>
                        <div className={styles.loader_line}></div>
                        </div>
                        <div className={styles.loader_line_wrap}>
                        <div className={styles.loader_line}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{position:'relative', zIndex: '9999'}}><Toaster position="top-right" /></div>
        </div>
        
        
    );

};

export default SendNCTRBtn;