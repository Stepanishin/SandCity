import React, { FC } from 'react';
import './CourtHeader.module.css'
import logo from '../../../../assets/img/logo.png'
import { HashLink } from 'react-router-hash-link';
import ConnectWallet from '../../../UI/ConnectWallet/ConnectWallet';


const CourtHeader: FC = () => {

    return (
        <header className='Header'>
            <div className='Header_container'>
                <div>
                    <img src={logo} alt="logo" height='184px' width='190px'  />
                </div>
                <nav>
                    <ul className='Header_nav_List' >
                        <HashLink smooth  to="/pathLink#CITY"><li>ABOUT</li></HashLink>
                        <HashLink smooth  to="/pathLink#STORY"><li>TRIALS</li></HashLink>
                        <HashLink smooth  to="/pathLink#ROADMAP"><li>ARCHIVE</li></HashLink>
                    </ul>
                </nav>
                <ConnectWallet />
            </div>           
        </header>
    );
};

export default CourtHeader;