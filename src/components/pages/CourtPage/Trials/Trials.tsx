import React, { FC, useEffect, useState } from 'react';
import styles from './Trials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import './swiper.css'
import { useWallet } from '@solana/wallet-adapter-react';
import SendSolanaBtn from '../../../UI/SentSolanaBtn/SendSolanaBtn';
import accepted from './img/accepted.svg'
import forbidden from './img/forbidden.svg'
import { HashLink } from 'react-router-hash-link';
import Timer from '../../../UI/Timer/Timer';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { ARG, timerAndDisableBtnSlice } from '../../../../store/reducers/getTimerAndDisableBtnReducer';
import SendNCTRBtn from '../../../UI/SendNCTRBtn/SendNCTRBtn';
import { SolForWhatSlice } from '../../../../store/reducers/getSolForWhatReducer';
import ShareJudgeTwitter from '../../../UI/ShareJudgeTwitter/ShareJudgeTwitter';

import bg1 from './img/bg1.svg'

import toast from 'react-hot-toast';
import { Toaster, resolveValue } from 'react-hot-toast';


// import required modules
import { EffectCreative } from "swiper";
import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import { getConfigFileParsingDiagnostics } from 'typescript';


const Trials: FC<any> = ({data}) => {

    const { publicKey, sendTransaction } = useWallet();
    const [ currentCard, setCurrentCard ] = useState<any>([])
    const [show, setShow] = useState({
        isShow: false,
        isNCTR: false,
        isSOL: false,
    })
    let {isTimeToDisable} = useAppSelector(state => state.timerAndDisableBtnSlice)
    const {timerAndDisableBtn} = timerAndDisableBtnSlice.actions
    let {SolForWhat} = useAppSelector(state => state.SolForWhatSlice)
    const {changeSolForWhat} = SolForWhatSlice.actions
    const dispatch = useAppDispatch()
    let [ BET, setBET ] = useState(1)
    let count = 0

    // Показываем окно с коэффициентами
    const showJudge = (e:any) => {
        let SolForMoreBtn:any = document.querySelector('#SolForMore')!
        let SolForLessBtn:any = document.querySelector('#SolForLess')!
        let SolForDrawBtn:any = document.querySelector('#SolForDraw')!
        setShow({
            isShow: false,
            isNCTR: false,
            isSOL: false,
        })
        dispatch(changeSolForWhat('clear'))
        if(e.target.id === 'JudgeInSOL') {
            setShow({
                isShow: true,
                isNCTR: false,
                isSOL: true,
            })
        }
        if(e.target.id === 'JudgeInNCTR') {
            setShow({
                isShow: true,
                isNCTR: true,
                isSOL: false,
            }) 
        }
        const current = document.querySelector('.swiper-slide-active')
        setCurrentCard(data?.filter((card:any, index:any) => card[1].id === current?.id))
    }

    // Добавляем выбранному коэффициенту бэкграунд.
    // Переделать
    const chooseSolWorWhat = (e:any) => {
        let SolForMoreBtn:any = document.querySelector('#SolForMore')
        let SolForLessBtn:any = document.querySelector('#SolForLess')
        let SolForDrawBtn:any = document.querySelector('#SolForDraw')
        // dispatch(changeSolForWhat('clean'))

        // SolForWhat = false
        console.log(SolForWhat)
        if (SolForDrawBtn != null) {
            if (e.target.id === 'SolForMore') {
                SolForMoreBtn.style.background = 'rgba(225, 35, 10, 0.25)'
                SolForLessBtn.style.background = 'rgba(0, 0, 0, 0.35)'
                SolForDrawBtn.style.background = 'rgba(0, 0, 0, 0.35)'
            }else if (e.target.id === 'SolForLess') {
                SolForMoreBtn.style.background = 'rgba(0, 0, 0, 0.35)'
                SolForLessBtn.style.background = 'rgba(225, 35, 10, 0.25)'
                SolForDrawBtn.style.background = 'rgba(0, 0, 0, 0.35)'
            } else if (e.target.id === 'SolForDraw') {
                SolForMoreBtn.style.background = 'rgba(0, 0, 0, 0.35)'
                SolForLessBtn.style.background = 'rgba(0, 0, 0, 0.35)'
                SolForDrawBtn.style.background = 'rgba(225, 35, 10, 0.25)'
            }
        } else {
            if (e.target.id === 'SolForMore') {
                SolForMoreBtn.style.background = 'rgba(225, 35, 10, 0.25)'
                SolForLessBtn.style.background = 'rgba(0, 0, 0, 0.35)'
            }else if (e.target.id === 'SolForLess') {
                SolForMoreBtn.style.background = 'rgba(0, 0, 0, 0.35)'
                SolForLessBtn.style.background = 'rgba(225, 35, 10, 0.25)'
            }
        }
        dispatch(changeSolForWhat(`${e.target.id}`))
    }

    const deleteJudge = () => {
        console.log('delete')
        const db: any = getDatabase();
        const updateDb = () => {
            const dbRef = ref(getDatabase());
            const updates:any = {};
            updates[`/Judges/${currentCard[0][1].name}${currentCard[0][1].id}/state`] = 'delete';
            return update(ref(db), updates);
        }
        updateDb()
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }

    return (
        <div id='TRIALS' className={styles.Trials} >
            <img className={styles.Trials_decoration_bg1} src={bg1} alt="" />
            <div className={styles.Trials_container}>
            <div className={styles.Trials_title_container}>
                <h2 className={styles.Trials_title_blur} >COURT</h2>
                <h2 className={styles.Trials_title} >COURT</h2>
            </div>
                <div className={styles.Trials_slider_container}>
                    <>
                    <Swiper
                        navigation={true}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectCreative]}
                        className="mySwiper"
                        effect={"creative"}
                        grabCursor={true}
                        creativeEffect={{
                            prev: {
                              shadow: true,
                              translate: ["-120%", 0, -500],
                            },
                            next: {
                              shadow: true,
                              translate: ["120%", 0, -500],
                            },
                          }}
                        onSlideChange={() => {
                            setShow({
                                isShow: false,
                                isNCTR: false,
                                isSOL: false,
                            })
                            dispatch(changeSolForWhat('clear'))
                            dispatch(timerAndDisableBtn(ARG.false))
                        }}
                        // onSwiper={(swiper:any) => console.log(swiper)}
                    >
                        {
                            data?.map((card:any, id:any) => {
                                var nowDate:any = new Date();
                                var achiveDate:any = new Date(card[1].dateToShot as any);
                                if  (card[1].state === 'test' && ((achiveDate - nowDate)+1000) > 0) {
                                    count++
                                    return (
                                        <SwiperSlide id={card[1].id} key={card[1].id} >
                                            <div className={styles.card_container}>
                                                <div className={styles.card_info_container}>
                                                    <div className={styles.card_info_count_container}>
                                                        <p className={styles.card_info_count}>{count}</p>
                                                        <p className={styles.card_info_count_blur}>{count}</p>
                                                    </div>
                                                    <img className={styles.card_info_avatar} src={card[1].avatar} alt="avatar" />
                                                    <div className={styles.card_info_description_container}>
                                                        <h3 className={styles.card_info_description_title}>{card[1].name}</h3>
                                                        <div className={styles.card_info_description_data_container}>
                                                            {   
                                                                card[1].twitter && <a href={card[1].twitter} className={styles.card_info_description_data} target="_blank" rel="noreferrer">Twitter</a>
                                                            }
                                                            {
                                                                card[1].discord && <a href={card[1].discord} className={styles.card_info_description_data} target="_blank" rel="noreferrer">Discord</a>
                                                            }
                                                            {
                                                                card[1].website && <a href={card[1].website} className={styles.card_info_description_data} target="_blank" rel="noreferrer">Website</a>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.card_condition_container}>
                                                    <p className={styles.card_condition_description}>{card[1].cardDescr}</p>
                                                </div>
                                                <div className={styles.card_timeAndJudge_container}>
                                                    {/* <HashLink smooth  to="/Court#BETwrap" ><button id='JudgeInSOL' onClick={showJudge} className={styles.card_timeAndJudge_btn}>Judge in SOL</button></HashLink> */}
                                                    <HashLink smooth  to="/Court#BETwrap" ><button id='JudgeInNCTR' onClick={showJudge} className={styles.card_timeAndJudge_btn}>Judge in NCTR</button></HashLink>
                                                </div>
                                            </div>
                                            {/* <div className={styles.card_twitterBtn_container}>
                                                <button onClick={deleteJudge} >Delete</button>
                                            </div> */}
                                        </SwiperSlide>
                                    )
                                }
                            })
                        }

                    </Swiper>
                    </>
                </div>
    
                {
                    show.isShow
                    ?
                    <div id='BETwrap' className={styles.BetSlip_container}>
                        <h3 className={styles.BetSlip_container_title}>Bet Slip</h3>
                        <div className={styles.BetSlip_data_container} >
                            <p className={styles.BetSlip_data_title}>Trial: {currentCard[0][1].name}</p>
                            <p className={styles.BetSlip_data_info}>Odds are changing depending on the bets</p>

                            <div className={styles.BetSlip_ratio_container}>

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>1X (Above)</p>
                                    <button onClick={chooseSolWorWhat} id='SolForMore' className={styles.BetSlip_ratio_choice_btn}>
                                        {
                                            show.isSOL
                                            ?
                                            ((currentCard[0][1].BetSOL.SolForMore + (currentCard[0][1].BetSOL.SolForLess * 0.8) + (currentCard[0][1].BetSOL.SolForDraw * 0.8)) / currentCard[0][1].BetSOL.SolForMore).toFixed(1)
                                            :
                                            ((currentCard[0][1].BetNCTR.SolForMore + (currentCard[0][1].BetNCTR.SolForLess * 0.8) + (currentCard[0][1].BetNCTR.SolForDraw * 0.8)) / currentCard[0][1].BetNCTR.SolForMore).toFixed(1)
                                        }
                                    </button>
                                </div>

                                {
                                   currentCard[0][1].isDraw 
                                    ?
                                    <div className={styles.BetSlip_ratio_choice_container}>
                                        <p className={styles.BetSlip_ratio_choice}>X (Draw)</p>
                                        <button onClick={chooseSolWorWhat} id='SolForDraw' className={styles.BetSlip_ratio_choice_btn}>
                                        {
                                            ((currentCard[0][1].BetNCTR.SolForDraw + (currentCard[0][1].BetNCTR.SolForMore * 0.8) + (currentCard[0][1].BetNCTR.SolForLess * 0.8)) / currentCard[0][1].BetNCTR.SolForDraw).toFixed(1)
                                        }
                                        </button>
                                    </div>
                                    :
                                    <></>
                                }

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>2X (Below)</p>
                                    <button onClick={chooseSolWorWhat} id='SolForLess' className={styles.BetSlip_ratio_choice_btn}>
                                        {
                                            show.isSOL
                                            ?
                                            ((currentCard[0][1].BetSOL.SolForLess + (currentCard[0][1].BetSOL.SolForMore * 0.8) + (currentCard[0][1].BetSOL.SolForDraw * 0.8)) / currentCard[0][1].BetSOL.SolForLess).toFixed(1)
                                            :
                                            ((currentCard[0][1].BetNCTR.SolForLess + (currentCard[0][1].BetNCTR.SolForMore * 0.8) + (currentCard[0][1].BetNCTR.SolForDraw * 0.8)) / currentCard[0][1].BetNCTR.SolForLess).toFixed(1)
                                        }
                                    </button>
                                </div>

                            </div>

                            <div className={styles.BetSlip_ratio_amount_container}>
                                {
                                    show.isSOL
                                    ?
                                    <label className={styles.BetSlip_ratio_amount_label} htmlFor="name">
                                    Amount of bet: <input 
                                        value={BET} 
                                        className={styles.BetSlip_ratio_amount_input} 
                                        placeholder='1' 
                                        required 
                                        type="number" 
                                        name='name' 
                                        id='name'
                                        min={1} 
                                        onChange={(e: any) => {
                                            setBET(parseFloat(e.target.value))
                                            // if (e.target.value === '') {
                                            //     setBET(0)
                                            // }
                                            }
                                        }
                                    />
                                      SOL<span style={{fontSize:'min(20px, 2.5vw)'}}>(Min 0.1)</span>
                                    </label>
                                    :
                                    <label className={styles.BetSlip_ratio_amount_label} htmlFor="name">
                                    Amount of bet: <input 
                                        value={BET} 
                                        className={styles.BetSlip_ratio_amount_input} 
                                        placeholder='1' 
                                        required 
                                        type="number" 
                                        name='name' 
                                        id='name'
                                        min={1} 
                                        onChange={(e: any) => {
                                            setBET(parseFloat(e.target.value))
                                            // if (e.target.value === '') {
                                            //     setBET(0)
                                            // }
                                            }
                                        }
                                    />
                                        NCTR (Min 1)
                                    </label>
                                }
                            </div>
                        </div>

                        <div className={styles.card_timeAndBet_container}>
                            <p id='card_timeAndBet_timer' className={styles.card_timeAndBet_timer}>
                                <Timer dateToShot={currentCard[0][1].dateToShot} />
                            </p>
                                                      
                            {
                                !isTimeToDisable && show.isSOL
                                ?
                                <SendSolanaBtn
                                currentCard = {currentCard}
                                BET ={BET}
                                SolForWhat={SolForWhat}
                                />
                                :
                                <></>
                            }

                            {
                                !isTimeToDisable && show.isNCTR
                                ?
                                <SendNCTRBtn 
                                    currentCard = {currentCard}
                                    BET ={BET}
                                />
                                :
                                <></> 
                            }

                        </div>

                        <div style={{position: 'relative', zIndex: '1'}} >
                        {
                            data && currentCard && <ShareJudgeTwitter name={currentCard[0][1].name} />
                        }
                        
                        </div> 
                        {
                            publicKey && (publicKey.toBase58() === 'A8grZ1aaL9Hm8sC7mtVyiAqdkFf4mB63aBpfq2WR9drt' || publicKey.toBase58() === 'gfehnueiUxNr3RuboSeTdj9S5ttN7HpbxP23V3xoPMW') &&
                            <div className={styles.card_twitterBtn_container}>
                                <button className='Flat_btn' onClick={deleteJudge} >Delete</button>
                            </div>
                        }
                    </div>
                    :
                    <></>
                }

            </div>
        </div>
    );
};

export default Trials;