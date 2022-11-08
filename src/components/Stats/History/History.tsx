import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import styles from './History.module.css'





const History:FC<any> = ({data, usersData}) => {

    const { publicKey, sendTransaction } = useWallet();

    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)
    
    return (
        <div id='History' className={styles.History} >
            
          

                        {   
                            data && data?.filter((card:any) => card[1].state === 'past').length > 0 || data?.filter((card:any) => card[1].state === 'wait').length > 0
                            ?
                            <div className={styles.history}>
                                <div className={styles.history_title_container}>
                                    <h2 className={styles.history_title_blur} >MY TRIALS</h2>
                                    <h2 className={styles.history_title} >MY TRIALS</h2>
                                </div>
                                <div className={styles.Archive_cards_container}>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.firstTitle}>Trial Name</th>
                                <th>Status</th>
                                <th>&nbsp;Verdict</th>
                            </tr>
                        </thead>
                    </table>	
                    <div className={styles.Archive_card_values}>
                        <table>
                            <tbody>
                            {
                                data?.map((card:any) => {
                                    if (card[1].state === 'past' || card[1].state === 'wait') {
                                        let userWallet = publicKey.toBase58()
                                        if (card[1]?.BetNCTR?.wallets?.SolForMore.hasOwnProperty(userWallet) ) {
                                            return (
                                                <tr key={card[1].id}>            
                                                    <td className={styles.firstTitle}>{card[1].name}</td>
                                                    <td>{card[1].state}</td>
                                                    <td>
                                                        {
                                                            card[1].result === 'More'
                                                            ?
                                                            <p style={{color:'green'}}>win</p>
                                                            :
                                                            card[1].result === 'Less'
                                                            ?
                                                            <p style={{color:'red'}}>lose</p>
                                                            :
                                                            card[1].result === 'Draw'
                                                            ?
                                                            <p style={{color:'red'}}>lose</p>
                                                            :
                                                            '-'
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }

                                        if (card[1]?.BetNCTR?.wallets?.SolForDraw.hasOwnProperty(userWallet) ) {
                                            return (
                                                <tr key={card[1].id}>            
                                                    <td className={styles.firstTitle}>{card[1].name}</td>
                                                    <td>{card[1].state}</td>
                                                    <td>
                                                        {
                                                            card[1].result === 'More'
                                                            ?
                                                            <p style={{color:'red'}}>lose</p>
                                                            :
                                                            card[1].result === 'Less'
                                                            ?
                                                            <p style={{color:'red'}}>lose</p>
                                                            :
                                                            card[1].result === 'Draw'
                                                            ?
                                                            <p style={{color:'green'}}>win</p>
                                                            :
                                                            '-'
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }

                                        if (card[1]?.BetNCTR?.wallets?.SolForLess.hasOwnProperty(userWallet) ) {
                                            return (
                                                <tr key={card[1].id}>            
                                                    <td className={styles.firstTitle}>{card[1].name}</td>
                                                    <td>{card[1].state}</td>
                                                    <td>
                                                        {
                                                            card[1].result === 'More'
                                                            ?
                                                            <p style={{color:'red'}}>lose</p>
                                                            :
                                                            card[1].result === 'Less'
                                                            ?
                                                            <p style={{color:'green'}}>win</p>
                                                            :
                                                            card[1].result === 'Draw'
                                                            ?
                                                            <p style={{color:'red'}}>lose</p>
                                                            :
                                                            '-'
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }



                                    }

                                })
                            }
                            </tbody>
                        </table>
                    </div>	
                </div>
                            </div>
                            :
                            <></>
                        }


        </div>
    );

};

export default History;