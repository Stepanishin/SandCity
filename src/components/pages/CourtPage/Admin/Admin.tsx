import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC, useEffect, useState } from 'react';
import styles from './Admin.module.css'
import './Admin.css'
import { getDownloadURL, getStorage, ref as refStorage, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import { ICard } from '../../../../types/ICard';
import AddNewJudge from './AddNewJudge';



const Admin: FC<any> = ({data}) => {



    return (
        <div id='Admin' className='Admin' >
            <h2 style={{color: 'white'}} >ADMINPANEL</h2>
            <AddNewJudge data={data} />
        </div>
    );
};

export default Admin;