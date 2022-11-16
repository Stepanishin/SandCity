import React, { FC, useCallback, useEffect, useState } from 'react';
import './Admin.css'
import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { TOKEN_PROGRAM_ID, createTransferInstruction } from "@solana/spl-token";
import { getOrCreateAssociatedTokenAccount } from '@solana/spl-token';


const WaitingJudge: FC<any> = ({data, usersData}) => {

    const [result, setResult] = useState('');
    const db = getDatabase();
    const { connection } = useConnection();
    const { publicKey, signTransaction, sendTransaction } = useWallet();

    let mintNCTRAdress = 'AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC'

    const handleChange = (e:any) => {
        const fieldName = e.target.name
        setResult(e.target.value)
    }

    let t = 5000

    const setBets = (e:any) => {
        e.preventDefault()
        if (result === 'More') {
            data.map((card:any) => {
                if (card[1].name + card[1].id  === e.target.name) {
                    Object.entries(card[1].BetNCTR.wallets.SolForMore).forEach(async (user:any) => {
                        console.log('Start....')
                        t += 5000
                        // let plusScore:number = parseFloat((user[1].bet).toFixed(2))
                        let a = async () => {
                            let BETMoreAll:number = card[1].BetNCTR.SolForMore
                            let AmountNCTR = card[1].BetNCTR.SolForMore + card[1].BetNCTR.SolForDraw + card[1].BetNCTR.SolForLess
                            let SolForAll:number = card[1].BetNCTR.SolForMore + 0.8 * card[1].BetNCTR.SolForDraw + 0.8 * card[1].BetNCTR.SolForLess
                            let yourBET:number = user[1].bet
                            console.log('BETMoreAll', BETMoreAll )
                            console.log('SolForAll', SolForAll )
                            console.log('yourBET', yourBET )
                            if (user[0] != '1') {
                                let BET:any = parseFloat((SolForAll * (yourBET / BETMoreAll)).toFixed(2))
                                let score:number = parseFloat((yourBET * (1 - (BETMoreAll / AmountNCTR))).toFixed(2))
                                console.log('BET:' , BET)
                                console.log('score:' , score)
                                await onClick(user[1].userWallet, BET , score)
                                console.log(user)
                                console.log(user[1].userWallet)
                            }
                        }
                        setTimeout(a, t)
                    })
                }
            })
            
        }
        if (result === 'Draw') {
            data.map((card:any) => {
                if (card[1].name + card[1].id  === e.target.name) {
                    Object.entries(card[1].BetNCTR.wallets.SolForDraw).forEach(async (user:any) => {
                        console.log('Start....')
                        t += 5000
                        let a = async () => {
                            let BETDrawAll:number = card[1].BetNCTR.SolForDraw
                            let AmountNCTR = card[1].BetNCTR.SolForMore + card[1].BetNCTR.SolForDraw + card[1].BetNCTR.SolForLess
                            let SolForAll:number = 0.8 * card[1].BetNCTR.SolForMore + card[1].BetNCTR.SolForDraw + 0.8 * card[1].BetNCTR.SolForLess
                            let yourBET:number = user[1].bet
                            console.log('BETDrawAll', BETDrawAll )
                            console.log('SolForAll', SolForAll )
                            console.log('yourBET', yourBET )
                            if (user[0] != '1') {
                                let BET:any = parseFloat((SolForAll * (yourBET / BETDrawAll)).toFixed(2))
                                let score:number = parseFloat((yourBET * (1 - (BETDrawAll / AmountNCTR))).toFixed(2))
                                console.log('BET:' , BET)
                                console.log('score:' , score)
                                await onClick(user[1].userWallet, BET , score)
                                console.log(user)
                                console.log(user[1].userWallet)
                            }
                        }
                        setTimeout(a, t)
                    })
                }
            })
            
        }
        if (result === 'Less') {
            data.map((card:any) => {
                if (card[1].name + card[1].id  === e.target.name) {
                    Object.entries(card[1].BetNCTR.wallets.SolForLess).forEach(async (user:any) => {
                        console.log('Start....')
                        t += 5000
                        let a = async () => {
                            let BETLessAll:number = card[1].BetNCTR.SolForLess
                            let AmountNCTR = card[1].BetNCTR.SolForMore + card[1].BetNCTR.SolForDraw + card[1].BetNCTR.SolForLess
                            let SolForAll:number = 0.8 * card[1].BetNCTR.SolForMore + 0.8 * card[1].BetNCTR.SolForDraw + card[1].BetNCTR.SolForLess
                            let yourBET:number = user[1].bet
                            console.log('BETLessAll', BETLessAll )
                            console.log('SolForAll', SolForAll )
                            console.log('yourBET', yourBET )
                            if (user[0] != '1') {
                                let BET:any = parseFloat((SolForAll * (yourBET / BETLessAll)).toFixed(2))
                                let score:number = parseFloat((yourBET * (1 - (BETLessAll / AmountNCTR))).toFixed(2))
                                console.log('BET:' , BET)
                                console.log('score:' , score)
                                await onClick(user[1].userWallet, BET , score)
                                console.log(user)
                                console.log(user[1].userWallet)
                            }
                        }
                        setTimeout(a, t)
                    })
                }
            })
            
        }
    }
                    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    const onClick = useCallback( async (theWallet:any, BET:number, score: number) => {    
                        // Если не присоединили кошелек
                        if (!publicKey) {
                            let wl: HTMLElement = document.querySelector('.wallet-adapter-button')!
                            if (wl instanceof HTMLElement) {
                                    wl.click()         
                            }  
                        }
                        // 
                        try {
                            ////////////////////////SOLANA///////////////////////////////////////////////////////////////////////////////////////////////////////////////   
                            if (!publicKey || !signTransaction) throw new WalletNotConnectedError()
                            const toPublicKey = new PublicKey(theWallet) //Кошелек, куда пересылать
                            const mint = new PublicKey(mintNCTRAdress) //Адрес токена ,который нужно переслать
            
                            const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
                                connection,
                                publicKey,
                                mint,
                                publicKey,
                                signTransaction
                            )
            
                            const toTokenAccount = await getOrCreateAssociatedTokenAccount(
                                connection,
                                publicKey,
                                mint,
                                toPublicKey,
                                signTransaction
                            )
                            let lamportsI = LAMPORTS_PER_SOL*BET!;
                            const transaction = new Transaction().add(
                                createTransferInstruction(
                                    fromTokenAccount.address, // source
                                    toTokenAccount.address, // dest
                                    publicKey,
                                    lamportsI,
                                    [],
                                    TOKEN_PROGRAM_ID
                                )
                            )
            
                            const blockHash = await connection.getRecentBlockhash()
                            transaction.feePayer = await publicKey
                            transaction.recentBlockhash = await blockHash.blockhash
                            const signed = await signTransaction(transaction)
                            await connection.sendRawTransaction(signed.serialize())
                            ///////////////////////DATA BASE///////////////////////////////////////////////////////////////////////////////////////////////////////////
                            const updateDb = (userWallet:any, score: number) => {
                                console.log('updateDb of score', score)
                                const dbRef = ref(getDatabase());
                                        get(child(dbRef,  `/Users/${userWallet}`)).then((snapshot:any) => {
                                        if (snapshot.exists()) {
                                            let arr = snapshot.val()
                                            console.log(arr)
                                            const updates:any = {};
                                            let prevScore:number = arr.score;
        
                                            // Делаем запись в базу данных
                                            updates[`/Users/${userWallet}/score`] = prevScore + score;
                               
                                            return update(ref(db), updates);
                        
                                        } else {
                                            console.log("No data available");
                                        }
                                        }).catch((error:any) => {
                                        console.error(error);
                                        });
                            }
                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                            updateDb(theWallet, score)
                            console.log('done')
                        } catch (error: any) {
                        }
                
                         
                    }, [publicKey, sendTransaction, connection ]);

    const updateMinusScore = (userWallet:any, score: number) => {
        const dbRef = ref(getDatabase());
        get(child(dbRef,  `/Users/${userWallet}`)).then((snapshot:any) => {
        if (snapshot.exists()) {
            let arr = snapshot.val()
            console.log(arr)
            const updates:any = {};
            let prevScore:number = arr.score;

            // Делаем запись в базу данных
            updates[`/Users/${userWallet}/score`] = prevScore - score;

            return update(ref(db), updates);

        } else {
            console.log("No data available");
        }
        }).catch((error:any) => {
        console.error(error);
        });
    }

    const setMinusScore = (e:any) => {
        e.preventDefault()
        console.log('Start Minus Score....')
        if (result === 'More') {
            data.map((card:any) => {
                if (card[1].name + card[1].id  === e.target.name) {
                    Object.entries(card[1].BetNCTR.wallets.SolForLess).forEach(async (user:any) => {
                        let yourBET:number = user[1].bet
                        let score = yourBET / 2
                        let userWallet = user[1].userWallet
                        updateMinusScore(userWallet, score)
                        console.log('done minusScore')
                    })
                    Object.entries(card[1].BetNCTR.wallets.SolForDraw).forEach(async (user:any) => {
                        let yourBET:number = user[1].bet
                        let score = yourBET / 2
                        let userWallet = user[1].userWallet
                        updateMinusScore(userWallet, score)
                        console.log('done minusScore')
                    })
                }
            })
            
        }
        if (result === 'Draw') {
            data.map((card:any) => {
                if (card[1].name + card[1].id  === e.target.name) {
                    Object.entries(card[1].BetNCTR.wallets.SolForMore).forEach(async (user:any) => {
                        let yourBET:number = user[1].bet
                        let score = yourBET / 2
                        let userWallet = user[1].userWallet
                        updateMinusScore(userWallet, score)
                        console.log('done minusScore')
                    })
                    Object.entries(card[1].BetNCTR.wallets.SolForLess).forEach(async (user:any) => {
                        let yourBET:number = user[1].bet
                        let score = yourBET / 2
                        let userWallet = user[1].userWallet
                        updateMinusScore(userWallet, score)
                        console.log('done minusScore')
                    })
                }
            })
            
        }
        if (result === 'Less') {
            data.map((card:any) => {
                if (card[1].name + card[1].id  === e.target.name) {
                    Object.entries(card[1].BetNCTR.wallets.SolForMore).forEach(async (user:any) => {
                        let yourBET:number = user[1].bet
                        let score = yourBET / 2
                        let userWallet = user[1].userWallet
                        updateMinusScore(userWallet, score)
                        console.log('done minusScore')
                    })
                    Object.entries(card[1].BetNCTR.wallets.SolForDraw).forEach(async (user:any) => {
                        let yourBET:number = user[1].bet
                        let score = yourBET / 2
                        let userWallet = user[1].userWallet
                        updateMinusScore(userWallet, score)
                        console.log('done minusScore')
                    })
                }
            })
            
        }
    }
    return (
        <div className='WaitingJudge_container' style={{marginTop: '200px'}} >  
        <h2>WAITING CARDS</h2>
           {
            data && data.map((card:any) => {
                var nowDate:any = new Date();
                var achiveDate:any = new Date(card[1].dateToShot as any);
                if (card[1].state === 'wait' || (card[1].state === 'test' && ((achiveDate - nowDate)+1000) < 0 )  ) {
                    return (
                        <div key={card[1].id} style={{border: '2px solid #5AC1CD'}}>
                            <form name={card[1].name + card[1].id} onSubmit={setBets}>
                                <h3>{card[1].name}</h3>
                                <label htmlFor="cardResult">Result (More , Draw , Less )***  <input required type="text" name='cardResult' id='cardResult' onChange={handleChange}/></label>
                                <br />
                                <button type="submit">SET RESULTS</button>
                            </form>
                            <br />
                            <form name={card[1].name + card[1].id} onSubmit={setMinusScore}>
                                <h3>{card[1].name}</h3>
                                <button type="submit">SET MinusScore</button>
                            </form>
                        </div>
                    )
                }
            })
           }
        </div>
    );
};

export default WaitingJudge;