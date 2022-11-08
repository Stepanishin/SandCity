import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC, useEffect, useState } from 'react';
import styles from './Admin.module.css'
import './Admin.css'
import { getDownloadURL, getStorage, ref as refStorage, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import { ICard } from '../../../../types/ICard';



const AddNewJudge: FC<any> = ({data}) => {
    const { publicKey, sendTransaction } = useWallet();
    const [progress, setProgress] = useState(0);
    const [urlAvatar, setUrlAvatar] = useState('');
    const storage = getStorage();
    const [addNewEvent, setAddNewEvent] = useState<ICard>({
        result: '',
        state: 'test',
        walletForBet: 'A8grZ1aaL9Hm8sC7mtVyiAqdkFf4mB63aBpfq2WR9drt',
        BetNCTR: {
            SolForDraw: 0.001,
            SolForLess: 0.001,
            SolForMore: 0.001,
            wallets: {
                SolForDraw: {
                    1:1
                },
                SolForLess: {
                    1:1
                },
                SolForMore: {
                    1:1
                },
            },
        },
        BetSOL: {
            SolForDraw: 0.001,
            SolForLess: 0.001,
            SolForMore: 0.001,
            wallets: {
                SolForDraw: {
                    1:1
                },
                SolForLess: {
                    1:1
                },
                SolForMore: {
                    1:1
                },
            },
        },
        id: Date.now().toString()
    });

    const downloadAvatar = (e: any) => {
        e.preventDefault();
        const file: any = e.target[0].files[0];
        uploadFiles(file);
    };

    const uploadFiles = (file: any) => {
        if (!file) return;

        const storageRef = refStorage(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
              const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(prog);
            },
            (error) => console.log(error),
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrlAvatar(downloadURL)
                setAddNewEvent({...addNewEvent, avatar: downloadURL})
              });
            }
        );
    }

    const handleChange = (e:any) => {
        const fieldName = e.target.name
        setAddNewEvent({...addNewEvent, [fieldName]: e.target.value})
    }

    const handleChangeDraw = (e:any) => {
        const fieldName = e.target.name
        if (e.target.value === 'true') {
            setAddNewEvent({...addNewEvent, [fieldName]: true})
        } else if (e.target.value === 'false') {
            setAddNewEvent({...addNewEvent, [fieldName]: false})
        }

    }

    const sendData = (e:any) => {
        e.preventDefault()

        const db = getDatabase();
        let nameEvent = addNewEvent.name! + addNewEvent.id
        const updateDb = (nameEvent: string) => {
                const dbRef = ref(getDatabase());
                        get(child(dbRef,  `/Judges/`)).then((snapshot:any) => {
                        if (snapshot.exists()) {
                            
                            let arr = snapshot.val()
                            const updates:any = {};
                            set(ref(db, `/Judges/${nameEvent}/`), addNewEvent);
                            
                            return update(ref(db), updates);
        
                        } else {
                            console.log("No data available");
                        }
                        }).catch((error:any) => {
                        console.error(error);
                        });
        }
        updateDb(nameEvent)
    }


    return (
        <>  
            <h2 style={{marginTop:'50px'}}>ДОБАВЛЕНИЕ НОВГО СОБЫТИЯ</h2>
            <p style={{maxWidth: '700px'}}>
                            <ol>
                                <li>Выбери картинку на своём диске. Нажми UPLOAD. Ссылка на картинку должна сама появиться в форме.</li>
                                <li>Заполни все обязательные поля(***)</li>
                                <li>Проверь правильность заполнения!!!</li>
                                <li>Нажми кнопку отправить</li>
                            </ol>
            </p>
            <form  className='AddNewJudge_uploadAvatar_container' onSubmit={downloadAvatar}>
                            <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg"
                            />
                            <button type="submit">Upload</button>
                            <h3>Uploaded {progress} %</h3>
            </form>
                            
            <form className='AddNewJudge_container' onSubmit={sendData} >


                <label htmlFor="name">Имя карточки*** <input required type="text" name='name' id='name' onChange={handleChange} /></label>

                <label htmlFor="avatar"> Ссылка на аватарку заполнится сама, когда загрузишь картинку*** <input required type="text" name='avatar' id='avatar' onChange={handleChange} value={urlAvatar} /></label>

                <label htmlFor="cardDescr">Описание евента***  <input required type="text" name='cardDescr' id='cardDescr' onChange={handleChange} /></label>

                {/* <label htmlFor="cardDescrLess">Описание на кнопке Меньше***  <input required type="text" name='cardDescrLess' id='cardDescrLess' onChange={handleChange} /></label>

                <label htmlFor="cardDescrMore">Описание на кнопке Больше***  <input required type="text" name='cardDescrMore' id='cardDescrMore' onChange={handleChange} /></label> */}

                <label htmlFor="date">Дата, когда это событие произойдет***  <input required type='datetime-local' name='date' id='date' onChange={handleChange} /></label>

                <label htmlFor="dateToShot">Дата, когда приём ставок должен закрыться***  <input required type='datetime-local' name='dateToShot' id='dateToShot' onChange={handleChange} /></label>

                <label htmlFor="isDraw">Ничьи есть или нет (true , false) ***  <input required type='text' name='isDraw' id='isDraw' onChange={handleChangeDraw} /></label>

                {/* <label htmlFor="eventDescr">Описание события внутри карточки  <input type='text' name='eventDescr' id='eventDescr' onChange={handleChange} /></label> */}

                <label htmlFor="twitter">twitter Евента  <input type='text' name='twitter' id='twitter' onChange={handleChange} /></label>

                <label htmlFor="discord">discort Евента  <input type='text' name='discord' id='discord' onChange={handleChange} /></label>

                <label htmlFor="website">website Евента  <input type='text' name='website' id='website' onChange={handleChange} /></label>

                <input type="submit" value='ОТПРАВИТЬ. Проверь перед отправкой!' />

            </form>
            </>
    );
};

export default AddNewJudge;