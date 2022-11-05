import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import styles from './Flat.module.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ShareRefLinkTwitter from '../../../UI/ShareRefLinkTwitter/ShareRefLinkTwitter';




const FLAT:FC<any> = ({data, usersData}) => {

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


    const [value, setValue] = React.useState('some\ntext');
    const [copied, setCopied] = React.useState(false);
    const onChange = React.useCallback((e:any) => {
        setValue(e.target.value);
        setCopied(e.target.value);
    }, [])
    // const onClick = React.useCallback(({target: {innerText}}) => {
    //     console.log(`Clicked on "${innerText}"!`);
    // }, [])
    const onCopy = React.useCallback(() => {
        setCopied(true);
    }, [])

  
    
    return (
        <div id='FLAT' className={styles.Flat} >
            {
                isShowFlat && publicKey && 
                <div id='FLAT' className={styles.Flat_container} >
                    <div className={styles.Flat_title_container}>
                        <h2 className={styles.Flat_title_blur} >PROFILE</h2>
                        <h2 className={styles.Flat_title} >PROFILE</h2>
                    </div>
                    <div className={styles.Flat_inner_container}>
                        <p className={styles.Flat_wallet}>
                           Your wallet:  {"" + publicKey.toBase58().slice(0, 3) +"..."+ publicKey.toBase58().slice(publicKey.toBase58().length - 3, publicKey.toBase58().length)}
                        </p>
                        {
                        usersData && 
                        <>
                            {
                                usersData.map((card:any) => {
                                    if (card[1].userWallet === publicKey.toBase58()) {
                                        let link = 'https://court-fawn.vercel.app/?' + card[1].refCode
                                        return (
                                            <div>
                                            <textarea onChange={onChange} rows={2} cols={10} value={link} style={{visibility:'hidden', position:'absolute'}}/>
                                            <p style={{marginTop:'30px'}} >Your referral link: </p>
                                            <CopyToClipboard onCopy={onCopy} text={link}>
                                                <span>{link} <button className={styles.Flat_btnToCopy}>Copy</button></span>
                                            </CopyToClipboard>
                                            <ShareRefLinkTwitter name={link} />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </>
                        }
                            {
                            data && data?.filter((card:any) => card[1].state === 'test').length > 0
                            ?
                            <div className='Flat_judges_container'>
                                <h3 className='Flat_judges_title'>Active Judges:</h3>
                                <ul className='Flat_judges_list'>
                                    {
                                    data?.map(( card : any) => {   
                                        if (card[1].state === 'test') {
                                            let userWallet = publicKey.toBase58()
                                            if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                                return (
                                                    <div key={card[1].name} className={styles.Flat_judge_wrap}>
                                                        <p className={styles.Flat_judge_title}>{card[1].name}</p>
                                                        <p>Your bet {card[1].wallets.SolForLess[userWallet].bet} SOL</p> 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={card[1].name} className={styles.Flat_judge_wrap}>
                                                        <p className={styles.Flat_judge_title}>{card[1].name}</p>
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
                            <p style={{margin: '20px 0px', textAlign:'start'}}>You don`t have active Judges</p>
                        }




                        {/* {
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
                                                        <p>{card[1].name}</p>
                                                        <p>Your bet: {card[1].wallets.SolForLess[userWallet].bet} SOL</p> 
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={card[1].name} className='Flat_judge_wrap' style={{border:'3px solid #00FFFF'}}>
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
                        } */}



                        {   
                            data && data?.filter((card:any) => card[1].state === 'past').length > 0 || data?.filter((card:any) => card[1].state === 'wait').length > 0
                            ?
                            <div className='Flat_judges_container'>
                                <h3 className='Flat_judges_title'>Past Judges:</h3>
                                <ul className='Flat_judges_list'>
                                    {
                                    data?.map(( card : any) => {   
                                        if (card[1].state === 'past' || card[1].state === 'wait' ) {
                                            let userWallet = publicKey.toBase58()
                                            if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                                return (
                                                    <div key={card[1].name} className={styles.Flat_judge_wrap}>
                                                        <p className={styles.Flat_judge_title}>{card[1].name}</p>
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
                                                    <div key={card[1].name} className={styles.Flat_judge_wrap}>
                                                        <p className={styles.Flat_judge_title}>{card[1].name}</p>
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