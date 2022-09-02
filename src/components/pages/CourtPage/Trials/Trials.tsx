import React, { FC } from 'react';
import styles from './Trials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import './swiper.css'
import { useGetJudgesQuery } from '../../../../store/reducers/firebase.api';
import { useWallet } from '@solana/wallet-adapter-react';


const Trials: FC = () => {

    const { isLoading, data} = useGetJudgesQuery('')
    const { publicKey, sendTransaction } = useWallet();
    let i = 0

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
                                    console.log(card)
                                    i++
                                    return (
                                        <SwiperSlide key={card[1].id} >
                                            <div className={styles.card_container}>
                                                <div className={styles.card_info_container}>
                                                    <p className={styles.card_info_count}>{i}</p>
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
                                                    <button className={styles.card_timeAndJudge_btn}><span>Judge</span></button>
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

            </div>s
        </div>
    );
};

export default Trials;