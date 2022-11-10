import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import styles from './Records.module.css'





const Records:FC<any> = ({data, usersData}) => {

    const { publicKey, sendTransaction } = useWallet();
    let newUsersData

    if (usersData) {
        let arr = [...usersData]
        newUsersData = arr.sort((a:any,b:any) => b[1].score - a[1].score)
        
    }

    return (
        <div id='RECORDS' className={styles.RECORDS} >
            <div className={styles.Records_container} >
                    <div className={styles.Records_title_container}>
                        <h2 className={styles.Records_title_blur} >RECORDS</h2>
                        <h2 className={styles.Records_title} >RECORDS</h2>
                    </div>
                    <div className={styles.Records_inner_container}>
                        <h2 className={styles.Records_inner_title}>Top of the WEEK</h2>
                        <div className={styles.Records_item_titles_container}>
                            <p>Wallets</p>
                            <p>Score</p>
                        </div>
                        <div className={styles.Records_item_container}>
                        {
                            usersData && newUsersData && newUsersData.length > 0 &&
                            newUsersData.sort((a:any, b:any) => b[1].score - a[1].score).map((user:any) => {
                                return (
                                    <div key={user[1].userWallet}  className={styles.Records_item}>
                                        <p  className={styles.Records_item_wallet}>
                                        {user[1].userWallet.slice(0, 3) + "..." + user[1].userWallet.slice(user[1].userWallet.length - 3, user[1].userWallet.length)}
                                        </p>
                                        <p  className={styles.Records_item_score}>
                                            {user[1].score}
                                        </p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
            </div>
        </div>
    );

};

export default Records;