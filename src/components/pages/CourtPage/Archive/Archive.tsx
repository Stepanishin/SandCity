import React, { FC } from 'react';
import styles from './Archive.module.css'





const Archive:FC<any> = ({data}) => {
    
    return (
        <div className={styles.Archive} >
            <div className={styles.Archive_container} >
                <h2 className={styles.Archive_title} >ARCHIVE</h2>
                <div className={styles.Archive_cards_container}>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.firstTitle}>Trial Name</th>
                                <th>Status</th>
                                <th>Verdict</th>
                            </tr>
                        </thead>
                    </table>	
                    <div className={styles.Archive_card_values}>
                        <table>
                            <tbody>
                            {
                                data?.map((card:any) => {
                                    if (card[1].state === 'past' || card[1].state === 'wait') {
                                        return (
                                            <tr key={card[1].id}>
                                                <td   className={styles.firstTitle}>{card[1].name}</td>
                                                <td>{card[1].state}</td>
                                                <td>
                                                    {
                                                        card[1].result === 'more'
                                                        ?
                                                        <p style={{color:'green'}}>1x</p>
                                                        :
                                                        card[1].result === 'less'
                                                        ?
                                                        <p style={{color:'red'}}>2x</p>
                                                        :
                                                        card[1].result === 'drow'
                                                        ?
                                                        'x'
                                                        :
                                                        '-'
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            </tbody>
                        </table>
                    </div>	
                </div>
            </div>
        </div>
    );

};

export default Archive;