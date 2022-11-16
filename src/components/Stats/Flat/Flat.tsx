import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import styles from './Flat.module.css'
import './Flat.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ShareRefLinkTwitter from '../../UI/ShareRefLinkTwitter/ShareRefLinkTwitter';
import avatar from './img/newAva.png'
import { child, get, getDatabase, ref, set, update } from 'firebase/database';




const FLAT:FC<any> = ({data, usersData}) => {

    const { publicKey, sendTransaction } = useWallet();

    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)
    let dataTest:any
    let dataUser:any

    if (publicKey) {
        if (data) {
            let userWallet = publicKey.toBase58()
            dataTest = data.filter((el:any) => {
                return (el[1]?.BetNCTR?.wallets?.SolForLess.hasOwnProperty(userWallet) || el[1]?.BetNCTR?.wallets?.SolForMore.hasOwnProperty(userWallet) || el[1]?.BetNCTR?.wallets?.SolForDraw.hasOwnProperty(userWallet))
            })
        }
    }

    if (publicKey) {
        if (usersData) {
            dataUser = usersData.filter((user:any) => {
                return user[1].userWallet === publicKey.toBase58()
            })
        }
    }


    const [value, setValue] = React.useState('some\ntext');
    const [copied, setCopied] = React.useState(false);
    const onChange = React.useCallback((e:any) => {
        setValue(e.target.value);
        setCopied(e.target.value);
    }, [])
    const onCopy = React.useCallback(() => {
        setCopied(true);
    }, [])

    // Функция для ввода никнейма
    const enterNickname = () => {
        let FlatModal = document.getElementById('Flat_modal_container')!
        FlatModal.classList.toggle('Flat_modal_container_visible')
    }

    // РОбработчик события инпута
    const [nick, setNick] = useState('')
    const handleChange = (e:any) => {
        setNick(e.target.value)
    }

    // Отправка никнейма в базу
    const handleSubmit = (e:any) => {
        e.preventDefault()
        const db: any = getDatabase();
        const updateDb = () => {
            const dbRef = ref(getDatabase());
            get(child(dbRef,  `/Users`)).then((snapshot:any) => {
                if (snapshot.exists()) {
                    let userWallet = publicKey.toBase58()
                    let arr = snapshot.val()
                    const updates:any = {};
                    if (arr.hasOwnProperty(`${userWallet}`)) {
                        set(ref(db, `/Users/${userWallet}/nickname`), nick );
                    } else {
                        return
                    }
                    return update(ref(db), updates);
                }
            }).catch((error:any) => {
                console.error(error);
            });
        }
        updateDb()
        enterNickname()
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
    
    return (
        <div id='FLAT' className={styles.Flat} >
            {
                isShowFlat && publicKey && 
                <div id='FLAT' className={styles.Flat_container} >
                    <div className={styles.Flat_title_container}>
                        <h2 className={styles.Flat_title_blur} >MY STATS</h2>
                        <h2 className={styles.Flat_title} >MY STATS</h2>
                    </div>
                    
                    <div className={styles.Flat_inner_container}>
                        <div className={styles.card_info_container}>
                            <img className={styles.card_info_avatar} src={avatar} alt="avatar" />
                            <div className={styles.card_info_description_container}>
                                <h3 className={styles.card_info_description_title}>STATS</h3>
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
                                                    <div key={card[1].userWallet} className={styles.ref_container} >
                                                        <textarea onChange={onChange} rows={2} cols={10} value={link} style={{visibility:'hidden', position:'absolute'}}/>
                                                        <p>Your referral link: </p>
                                                        <CopyToClipboard onCopy={onCopy} text={link}>
                                                            <span><button className={styles.Flat_btnToCopy}>Copy</button></span>
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
                                    dataUser && dataUser[0][1].nickname
                                    ?
                                    <div className='Flat_nick_wrapper' >
                                        <p className='Flat_fontSize' >Your Nickname: {dataUser[0][1].nickname}</p>
                                        <button className='Flat_fontSize Flat_btn' onClick={enterNickname} >Change</button>
                                    </div>
                                    :
                                    <div>
                                        <button className='Flat_btn  Flat_fontSize' onClick={enterNickname} >Enter Nickname</button>
                                    </div>
                                }
                                <div id='Flat_modal_container' className='Flat_modal_container'>
                                <form className='nickname_form'  onSubmit={handleSubmit}>
                                    <label className='nickname_label Flat_fontSize' htmlFor="nickname">If you want enter your nickname:</label>
                                    <input 
                                        className='Flat_nickname_text Flat_fontSize'
                                        maxLength={15}
                                        minLength={3}
                                        type="text" 
                                        name="nickname" 
                                        id="" 
                                        placeholder='Enter your nickname' 
                                        onChange={handleChange}
                                        />
                                    <div className='nickname_buttins_wrap'> 
                                        <input className='btn Flat_nickname_submit Flat_fontSize' type="submit" value="Submit" />
                                    </div>
                                </form>
                                <button className='Flat_btn_exit nickname_exit Flat_fontSize' onClick={enterNickname}>X</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_active_container}>
                            {
                                data && dataTest && dataTest?.filter((card:any) => card[1].state == 'test').length > 0
                                ?
                                <div>
                                    <h3 className={styles.card_info_description_title} style={{marginTop: '20px'}}>Active Trials:</h3>
                                    <ul>
                                        {
                                        dataTest?.map(( card : any) => {   
                                            if (card[1].state === 'test') {
                                                let userWallet = publicKey.toBase58()
                                                if (card[1].BetNCTR.wallets.SolForMore.hasOwnProperty(userWallet)) {
                                                    return (
                                                        <div key={card[1].name} className={styles.Flat_judge_wrap}>
                                                            <p className={styles.card_active_descr}>{card[1].name}</p>
                                                            <p className={styles.card_active_descr_bet}>Your bet: 1X (Above) - {(card[1]?.BetNCTR?.wallets?.SolForMore[userWallet]?.bet).toFixed(2)} NCTR</p> 
                                                        </div>
                                                    )
                                                } 
                                                else if (card[1].BetNCTR.wallets.SolForDraw.hasOwnProperty(userWallet)) {
                                                    return (
                                                        <div key={card[1].name} className={styles.Flat_judge_wrap}>
                                                            <p className={styles.card_active_descr}>{card[1].name}</p>
                                                            <p className={styles.card_active_descr_bet}>Your bet: X (Draw) -  {(card[1]?.BetNCTR?.wallets?.SolForDraw[userWallet]?.bet).toFixed(2)} NCTR</p>
                                                        </div>
                                                    )
                                                } 
                                                else if (card[1].BetNCTR.wallets.SolForLess.hasOwnProperty(userWallet)) {
                                                    return (
                                                        <div key={card[1].name} className={styles.Flat_judge_wrap}>
                                                            <p className={styles.card_active_descr}>{card[1].name}</p>
                                                            <p className={styles.card_active_descr_bet}>Your bet: 2X (Below) -  {(card[1]?.BetNCTR?.wallets?.SolForLess[userWallet]?.bet).toFixed(2)} NCTR</p>
                                                        </div>
                                                    )
                                                } 
                                            }
                                        })
                                        }
                                    </ul>
                                </div>
                                :
                                <p className={styles.card_active_descr}>You don`t have active Judges</p>
                            }
                        </div>




                    </div>
                </div>
            }
        </div>
    );

};

export default FLAT;