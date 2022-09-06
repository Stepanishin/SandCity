import React, { FC } from 'react';
import './CourtHeader.module.css'
import logo from '../../../../assets/img/logo.png'
import { HashLink } from 'react-router-hash-link';
import ConnectWallet from '../../../UI/ConnectWallet/ConnectWallet';
import styles from './CourtHeader.module.css'


const CourtHeader: FC = () => {

    return (
        <header className={styles.Court_Header}>
            <div className={styles.Court_Header_container}>
                <div>
                    <img src={logo} alt="logo" height='184px' width='190px'  />
                </div>
                <nav>
                    <ul className={styles.Court_Header_nav_List} >
                        <HashLink smooth  to="/Court#ABOUT"><li>ABOUT</li></HashLink>
                        <HashLink smooth  to="/Court#TRIALS"><li>TRIALS</li></HashLink>
                        <HashLink smooth  to="/Court#ARCHIVE"><li>ARCHIVE</li></HashLink>
                    </ul>
                </nav>
                <ConnectWallet />
            </div>           
        </header>
    );
};

export default CourtHeader;