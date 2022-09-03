import React, { FC, useEffect, useState } from 'react';
import styles from './Trials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import './swiper.css'
import { useWallet } from '@solana/wallet-adapter-react';


const Trials: FC<any> = ({data}) => {

    const { publicKey, sendTransaction } = useWallet();
    const [ currentCard, setCurrentCard ] = useState<any>([])
    const [show, setShow] = useState(false)
    let count = 0

    const showJudge = () => {
        setShow(true)
        const current = document.querySelector('.swiper-slide-active')
        setCurrentCard(data?.filter((card:any) => card[1].id === current?.id))
    }

    return (
        <div className={styles.Trials} >
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
                                                    <p className={styles.card_timeAndJudge_timer}>Trial ends in 3 hours and 5 minutes</p>
                                                    <button onClick={showJudge} className={styles.card_timeAndJudge_btn}><span>Judge</span></button>
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
                    <div className={styles.BetSlip_container}>
                        <h3 className={styles.BetSlip_container_title}>Bet Slip</h3>
                        <div className={styles.BetSlip_data_container} >
                            <p className={styles.BetSlip_data_title}>Trial: {currentCard[0][1].name}</p>
                            <p className={styles.BetSlip_data_info}>Odds are changing depending on the bets</p>

                            <div className={styles.BetSlip_ratio_container}>

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>1x(Above)</p>
                                    <button className={styles.BetSlip_ratio_choice_btn}>5.95</button>
                                </div>

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>x(Draw)</p>
                                    <button className={styles.BetSlip_ratio_choice_btn}>4.25</button>
                                </div>

                                <div className={styles.BetSlip_ratio_choice_container}>
                                    <p className={styles.BetSlip_ratio_choice}>2x(Below)</p>
                                    <button className={styles.BetSlip_ratio_choice_btn}>1.19</button>
                                </div>

                            </div>

                            <div className={styles.BetSlip_ratio_amount_container}>
                                <label className={styles.BetSlip_ratio_amount_label} htmlFor="name">Amount of bet: <input className={styles.BetSlip_ratio_amount_input} placeholder='0.1' required type="text" name='name' id='name' /></label>
                            </div>
                        </div>

                        <div className={styles.card_timeAndBet_container}>
                            <p className={styles.card_timeAndBet_timer}>Trial ends in 3 hours and 5 minutes</p>
                            <button className={styles.card_timeAndBet_btn}><span>BET</span></button>
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