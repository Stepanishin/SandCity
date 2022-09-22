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


const Trials: FC<any> = ({data}) => {

    const { publicKey, sendTransaction } = useWallet();
    const [ currentCard, setCurrentCard ] = useState<any>([])
    const [show, setShow] = useState(false)
    const [SolForWhat, setSolForWhat] = useState('')
    let [ BET, setBET ] = useState(0.1)
    let count = 0

    useEffect(() => {
        // Убираю окно с коэффициентами при прокручивании слайдера.
        // Переделать
        let swiperBtnNext = document.querySelector('.swiper-button-next')!
        let swiperBtnPrev = document.querySelector('.swiper-button-prev')!
        swiperBtnNext?.addEventListener('click', function() {
            setShow(false)
        });
        swiperBtnPrev?.addEventListener('click', function() {
            setShow(false)
        });
    }, [])


    // Показываем окно с коэффициентами
    const showJudge = () => {
        setShow(true)
        const current = document.querySelector('.swiper-slide-active')
        setCurrentCard(data?.filter((card:any) => card[1].id === current?.id))
    }

    // Добавляем выбранному коэффициенту бэкграунд.
    // Переделать
    const chooseSolWorWhat = (e:any) => {
        let SolForMoreBtn:any = document.querySelector('#SolForMore')
        let SolForLessBtn:any = document.querySelector('#SolForLess')
        let SolForDrawBtn:any = document.querySelector('#SolForDraw')
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
        setSolForWhat(e.target.id)
    }

    return (
        <div id='TRIALS' className={styles.Trials} >
            <div className={styles.Trials_container}>
                <h2 className={styles.Trials_title} >Trials</h2>
                <div className={styles.Trials_slider_container}>
                    <>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {
                            data?.map((card:any, id:any) => {
                                
                                if  (card[1].state === 'test') {
                                    count++
                                    return (
                                        <SwiperSlide id={card[1].id} key={card[1].id} >
                                            <div className={styles.card_container}>
                                                <div className={styles.card_info_container}>
                                                    <p className={styles.card_info_count}>{count}</p>
                                                    <img className={styles.card_info_avatar} src={card[1].avatar} alt="avatar" />
                                                    <div className={styles.card_info_description_container}>
                                                        <h3 className={styles.card_info_description_title}>{card[1].name}</h3>
                                                        <p className={styles.card_info_description_data}>Supply 666</p>
                                                        <p className={styles.card_info_description_data}>twitter</p>
                                                        <p className={styles.card_info_description_data}>discord</p>
                                                    </div>
                                                </div>
                                                <div className={styles.card_condition_container}>
                                                    <p className={styles.card_condition_description}>{card[1].cardDescr}</p>
                                                </div>
                                                <div className={styles.card_timeAndJudge_container}>
                                                    {/* <p className={styles.card_timeAndJudge_timer}><Timer dateToShot={card[1].dateToShot} /></p> */}
                                                    <button onClick={showJudge} className={styles.card_timeAndJudge_btn}><HashLink  smooth  to="/Court#BETwrap" >Judge</HashLink></button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            })
                        }
                        
                    </Swiper>
                    </>
                </div>
    
                {
                    show
                    ?
                    <div id='BETwrap' className={styles.BetSlip_container}>
                        <h3 className={styles.BetSlip_container_title}>Bet Slip</h3>
                        <div className={styles.BetSlip_data_container} >
                            <p className={styles.BetSlip_data_title}>Trial: {currentCard[0][1].name}</p>
                            <p className={styles.BetSlip_data_info}>Odds are changing depending on the bets</p>

                            <div className={styles.BetSlip_ratio_container}>

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>1x(Above)</p>
                                    <button onClick={chooseSolWorWhat} id='SolForMore' className={styles.BetSlip_ratio_choice_btn}>5.95</button>
                                </div>

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>x(Draw)</p>
                                    <button onClick={chooseSolWorWhat} id='SolForDraw' className={styles.BetSlip_ratio_choice_btn}>4.25</button>
                                </div>

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>2x(Below)</p>
                                    <button onClick={chooseSolWorWhat} id='SolForLess' className={styles.BetSlip_ratio_choice_btn}>1.19</button>
                                </div>

                            </div>

                            <div className={styles.BetSlip_ratio_amount_container}>
                                <label className={styles.BetSlip_ratio_amount_label} htmlFor="name">
                                    Amount of bet: <input 
                                        value={BET} 
                                        className={styles.BetSlip_ratio_amount_input} 
                                        placeholder='0.1' 
                                        required 
                                        type="number" 
                                        name='name' 
                                        id='name'
                                        min={0} 
                                        onChange={(e: any) => {
                                            setBET(parseFloat(e.target.value))
                                            if (e.target.value === '') {
                                                setBET(0)
                                            }
                                            }
                                        }
                                    />
                                </label>
                            </div>
                        </div>

                        <div className={styles.card_timeAndBet_container}>
                            <p id='card_timeAndBet_timer' className={styles.card_timeAndBet_timer}>
                                <Timer dateToShot={currentCard[0][1].dateToShot} />
                            </p>
                            <div id='alarm_sendSucces'  className={styles.alarm_sendSucces}>
                                <img className={styles.card_timeAndBet_img} src={accepted} alt="accepted" />
                                <p>Your bid has been accepted!</p>
                            </div>
                            <div id='alarm_sendError_chooseBET'  className={styles.alarm_sendError_chooseBET}>
                                <img className={styles.card_timeAndBet_img} src={forbidden} alt="forbidden" width='50px' height='50px' />
                                <p>Bid not selected!</p>
                            </div>
                            <div id='alarm_sendError_something'  className={styles.alarm_sendError_something}>
                                <img className={styles.card_timeAndBet_img} src={forbidden} alt="forbidden" width='50px' height='50px' />
                                <p>Something went wrong!</p>
                            </div>
                            
                            <SendSolanaBtn
                                currentCard = {currentCard}
                                BET ={BET}
                                SolForWhat={SolForWhat}
                            />
                        </div>
                    </div>
                    :
                    <></>
                }

            </div>
        </div>
    );
};

export default Trials;