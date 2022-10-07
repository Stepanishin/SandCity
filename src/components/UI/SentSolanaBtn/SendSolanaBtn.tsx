import React from 'react';
import styles from './SendSolanaBtn.module.css'
import { useEffect } from 'react';
import { FC, ReactNode, useMemo, useCallback, useState } from 'react';

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getDatabase, ref, get, child, push, update, set } from "firebase/database";


export interface ISendSolanaBtnProps {
    // borderPrice?: number,
    // descr?: string,
    wallet?: string,
    // classN?: string,
    // descr2?: number,
    // judgePrice?: number, 
    // name?: string,
    SolForWhat?: string,
    // currency?: string,
    // cardDescrMore?: string,
    // cardDescrLess?: string,
    // SolForMore?: number,
    // SolForLess?: number,
    // id?: number,
    currentCard?: any,
    BET?: number
}

const SendSolanaBtn:FC<ISendSolanaBtnProps> = ({currentCard, BET, SolForWhat}) => {

    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();
    const db = getDatabase();
    let alarm_loading : any
    let card_timeAndBet_timer:any
    let alarm_sendSucces:any
    let alarm_sendError_chooseBET:any
    let alarm_sendError_something:any

    // Здесь назначаем кошелек, куда будут идти все ставки
    let theWallet:any = currentCard[0][1].walletForLess

    const onClick = useCallback( async (e:any) => {

        alarm_loading = document.querySelector('#alarm_loading')!
        card_timeAndBet_timer = document.querySelector('#card_timeAndBet_timer')
        alarm_sendSucces = document.querySelector('#alarm_sendSucces')
        alarm_sendError_chooseBET = document.querySelector('#alarm_sendError_chooseBET')
        alarm_sendError_something = document.querySelector('#alarm_sendError_something')
        
        // Если не выбрали на какое событие ставить
        if (SolForWhat === '') {
            card_timeAndBet_timer.style.display = 'none'
            alarm_sendError_chooseBET.style.display = 'flex'
            const closeAlarmSucces =() => {
                card_timeAndBet_timer.style.display = 'block'
                alarm_sendError_chooseBET.style.display = 'none'
            }
            setTimeout(closeAlarmSucces, 5000)
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

        try {
        
        ////////////////////////SOLANA///////////////////////////////////////////////////////////////////////////////////////////////////////////////   

        if (!publicKey) throw new WalletNotConnectedError('connect wallet123');

        alarm_loading.style.display = 'block'
        

        connection.getBalance(publicKey).then((bal) => {
        });

        let lamportsI = LAMPORTS_PER_SOL*BET!;
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(theWallet),
                lamports: lamportsI,
            })
        );

        const signature = await sendTransaction(transaction, connection);
        
        await connection.confirmTransaction(signature, 'processed');

        /////////////////////////DATA BASE///////////////////////////////////////////////////////////////////////////////////////////////////////////
        const updateDb = () => {

            const dbRef = ref(getDatabase());
                    get(child(dbRef,  `/Judges/${currentCard[0][1].name}${currentCard[0][1].id}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        let arr = snapshot.val()
                        const updates:any = {};
                        let solQuantity:any = 0;

                        // Определяем, куда и сколько будет приплюсовывать ставку в базе данных, draw, less or more
                        if (SolForWhat === 'SolForMore') {
                            solQuantity = arr.SolForMore
                        } else if (SolForWhat === 'SolForLess') {
                            solQuantity = arr.SolForLess
                        } else if (SolForWhat === 'SolForDraw') {
                            solQuantity = arr.SolForDraw
                        }
                        // Делаем запись в базу данных
                        updates[`/Judges/${currentCard[0][1].name}${currentCard[0][1].id}` + `/${SolForWhat}/`] = BET + solQuantity;

                        // создаём и Добавляем в базу кошелек и сумму ставки этого кошелька
                        let userWallet = publicKey.toBase58()
                        if (arr.wallets[`${SolForWhat}`].hasOwnProperty(`${userWallet}`)) {
                            let currentBet = arr.wallets[`${SolForWhat}`][userWallet].bet
                            updates[`/Judges/${currentCard[0][1].name}${currentCard[0][1].id}/wallets/${SolForWhat}/${userWallet}/bet/`] = currentBet + BET
                        } else {
                                set(ref(db, `/Judges/${currentCard[0][1].name}${currentCard[0][1].id}/wallets/${SolForWhat}/${userWallet}`), {
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
                        card_timeAndBet_timer.style.display = 'none'
                        alarm_sendSucces.style.display = 'flex'
                        const closeAlarmSucces =() => {
                            card_timeAndBet_timer.style.display = 'block'
                            alarm_sendSucces.style.display = 'none'
                        }
                        setTimeout(closeAlarmSucces, 5000)
                        // 

                        return update(ref(db), updates);
    
                    } else {
                        console.log("No data available");
                    }
                    }).catch((error) => {
                    console.error(error);
                    });
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        updateDb()
        } catch (err) {
            // Закрытие Лоадера
            const closeAlarmLoading =() => {
                alarm_loading.style.display = 'none'
            }
            setTimeout(closeAlarmLoading, 1000)
            //
            // сообщение при любой другой ошибке
            card_timeAndBet_timer.style.display = 'none'
            alarm_sendError_something.style.display = 'flex'
            const closeAlarmSucces =() => {
                card_timeAndBet_timer.style.display = 'block'
                alarm_sendError_something.style.display = 'none'
            }
            setTimeout(closeAlarmSucces, 5000)
            // 
        }

        

         
    }, [publicKey, sendTransaction, connection ]);

    
    
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


        </div>
        
        
    );

};

export default SendSolanaBtn;