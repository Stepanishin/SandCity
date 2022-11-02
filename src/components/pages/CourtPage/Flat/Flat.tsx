import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import styles from './Flat.module.css'





const FLAT:FC<any> = ({data}) => {

    const { publicKey, sendTransaction } = useWallet();

    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)

    if (publicKey) {
        if (data) {
            let userWallet = publicKey.toBase58()
            data = data.filter((el:any) => {
                return (el[1]?.wallets?.SolForLess.hasOwnProperty(userWallet) || el[1]?.wallets?.SolForMore.hasOwnProperty(userWallet))
            })
        }
    }

    // console.log(data)
    // console.log(data?.filter((card:any) => card[1].state === 'test'))
    
    return (
        <div id='FLAT' className={styles.Flat} >
            {
                isShowFlat && publicKey &&
                <div id='FLAT' className={styles.Flat_container} >
                    <div className={styles.Flat_title_container}>
                        <h2 className={styles.Flat_title_blur} >FLAT</h2>
                        <h2 className={styles.Flat_title} >FLAT</h2>
                    </div>
                    <div className={styles.Flat_inner_container}>
                        <p className={styles.Flat_wallet}>
                           Your wallet:  {"" + publicKey.toBase58().slice(0, 3) +"..."+ publicKey.toBase58().slice(publicKey.toBase58().length - 3, publicKey.toBase58().length)}
                        </p>

                            {
                            data && data?.filter((card:any) => card[1].state === 'test').length > 0
                            ?
                            <div className='Flat_judges_container'>
                                <h3 className='Flat_judges_title'>Active Judges</h3>
                                <ul className='Flat_judges_list'>
                                    {
                                    data?.map(( card : any) => {   
                                        if (card[1].state === 'test') {
                                            let userWallet = publicKey.toBase58()
                                            if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                                return (
                                                    <div key={card[1].name} className='Flat_judge_wrap' style={{border:' 3px solid #ff65bd'}}>
                                                        {/* <Link style={{color:"#ff65bd"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link> */}
                                                        <p>{card[1].name}</p>
                                                        <p>Your bet {card[1].wallets.SolForLess[userWallet].bet} SOL</p> 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={card[1].name} className='Flat_judge_wrap' style={{border:'3px solid #00FFFF'}}>
                                                        {/* <Link style={{color:"#00FFFF"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link> */}
                                                        <p>{card[1].name}</p>
                                                        <p>Your bet {card[1].wallets.SolForMore[userWallet].bet} SOL</p>
                                                    </div>
                                                )
                                            } 
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                            :
                            <p style={{marginTop: '20px', textAlign:'center'}}>You don`t have active bets -  BET </p>
                        }




                        {
                            data && data?.filter((card:any) => card[1].state === 'wait').length > 0
                            ?
                            <div className='Flat_judges_container'>
                                <h3 className='Flat_judges_title'>Waiting result</h3>
                                <ul className='Flat_judges_list'>
                                    {
                                    data?.map(( card : any) => {   
                                        if (card[1].state === 'wait') {
                                            let userWallet = publicKey.toBase58()
                                            if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                                return (
                                                    <div key={card[1].name} className='Flat_judge_wrap' style={{border:' 3px solid #ff65bd'}}>
                                                        {/* <Link style={{color:"#ff65bd"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link> */}
                                                        <p>{card[1].name}</p>
                                                        <p>Your bet: {card[1].wallets.SolForLess[userWallet].bet} SOL</p> 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={card[1].name} className='Flat_judge_wrap' style={{border:'3px solid #00FFFF'}}>
                                                        {/* <Link style={{color:"#00FFFF"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link> */}
                                                        <p>{card[1].name}</p>
                                                        <p>Your bet {card[1].wallets.SolForMore[userWallet].bet} SOL</p>
                                                    </div>
                                                )
                                            } 
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                            :
                            <></>
                        }



                        {   
                            data && data?.filter((card:any) => card[1].state === 'past').length > 0
                            ?
                            <div className='Flat_judges_container'>
                                <h3 className='Flat_judges_title'>Past Judges</h3>
                                <ul className='Flat_judges_list'>
                                    {
                                    data?.map(( card : any) => {   
                                        if (card[1].state === 'past') {
                                            let userWallet = publicKey.toBase58()
                                            if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                                return (
                                                    <div key={card[1].name} className='Flat_judge_wrap' style={{border:' 3px solid #ff65bd'}}>
                                                        {/* <Link style={{color:"#ff65bd"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link> */}
                                                        <p>{card[1].name}</p>
                                                        <p>Your bet {card[1].wallets.SolForLess[userWallet].bet} SOL</p>
                                                        {
                                                            card[1].result === 'less'
                                                            ?
                                                            <p>Your result <span style={{color:'green'}}>Win</span></p>
                                                            :
                                                            <p>Your result <span style={{color:'red'}}>Lose</span></p>
                                                        } 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={card[1].name} className='Flat_judge_wrap' style={{border:'3px solid #00FFFF'}}>
                                                        {/* <Link style={{color:"#00FFFF"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link> */}
                                                        <p>{card[1].name}</p>
                                                        <p>Your bet {card[1].wallets.SolForMore[userWallet].bet} SOL</p>
                                                        {
                                                            card[1].result === 'more'
                                                            ?
                                                            <p>Your result <span style={{color:'green'}}>Win</span></p>
                                                            :
                                                            <p>Your result <span style={{color:'red'}}>Lose</span></p>
                                                        } 
                                                    </div>
                                                )
                                            } 
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                            :
                            <></>
                        }


                    </div>
                </div>
            }
        </div>
    );

};

export default FLAT;