import React, { FC,useEffect } from 'react';
import styles from './Archive.module.css'
import bg3 from './img/bg3.svg'


const Archive:FC<any> = ({data}) => {
    
    let sortData =  data?.filter((el:any) => el[1].state === 'past' || el[1].state === 'wait').sort(((a: any,b: any) => parseInt(a[1].id) > parseInt(b[1].id) ? -1 : parseInt(a[1].id) < parseInt(b[1].id) ? 1 : 0))

    return (
        <div id='ARCHIVE' className={styles.Archive} >
            <img className={styles.Archive_decoration_bg3} src={bg3} alt="" />
            <div className={styles.Archive_container} >
                <div className={styles.Archive_title_container}>
                    <h2 className={styles.Archive_title_blur} >ARCHIVE</h2>
                    <h2 className={styles.Archive_title} >ARCHIVE</h2>
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
                                sortData?.map((card:any) => {
                                    if (card[1].state === 'past' || card[1].state === 'wait') {
                                        return (
                                            <tr key={card[1].id}>
                                                <td className={styles.firstTitle}>{card[1].name}</td>
                                                <td>{card[1].state}</td>
                                                <td>
                                                    {
                                                        card[1].result === 'More' || card[1].result === 'more'
                                                        ?
                                                        <p style={{color:'green'}}>1x</p>
                                                        :
                                                        card[1].result === 'Less' || card[1].result === 'less'
                                                        ?
                                                        <p style={{color:'red'}}>2x</p>
                                                        :
                                                        card[1].result === 'Draw' || card[1].result === 'draw'
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