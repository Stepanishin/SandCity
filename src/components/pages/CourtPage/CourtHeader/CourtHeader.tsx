import React, { FC,useEffect } from 'react';
import logo from '../../../../assets/img/logo.png'
import { HashLink } from 'react-router-hash-link';
import ConnectWallet from '../../../UI/ConnectWallet/ConnectWallet';
import './CourtHeader.css'
import { Link } from 'react-router-dom';


const CourtHeader: FC = () => {

    let burgerMenu:HTMLElement
    let toggle:HTMLInputElement

    useEffect(() => {
        burgerMenu = document.getElementById('Court_Header_nav_List_mobile')!
        toggle = document.querySelector("#toggleCourt")!
    }, [])  

    // Closing of Hamburger
    const deleteBurgerMenu = () => {
        burgerMenu.classList.add("Court_dn")
        toggle.checked = false
        burgerMenu.classList.remove("Court_dn")
    }

    return (
        <header className='Court_Header'>
            <div className='Court_Header_container'>
                <div>
                    <img className='Court_Header_logo' src={logo} alt="logo" height='184px' width='190px'  />
                </div>
                <div className='Court_wrapper_decs' >
                    <nav>
                        <ul className='Court_Header_nav_List' >
                            <HashLink smooth  to="/Court#ABOUT"><li>ABOUT</li></HashLink>
                            <HashLink smooth  to="/Court#TRIALS"><li>TRIALS</li></HashLink>
                            <HashLink smooth  to="/Court#ARCHIVE"><li>ARCHIVE</li></HashLink>
                            <Link to={'/'} ><li>BACK TO CITY</li></Link>
                        </ul>
                    </nav>
                    <ConnectWallet />
                </div>
                

                <div className='Court_wrapper'>

                    <div className='Court_Header_Hamburger_container'>
                        <input id='toggleCourt' type="checkbox"></input>
                        <label htmlFor='toggleCourt' className='Court_hamburger'>
                            <div className='Court_top_bun'></div>
                            <div className='Court_meat'></div>
                            <div className='Court_bottom_bun'></div>
                        </label>
                        <ul id='Court_Header_nav_List_mobile' className='Court_Header_nav_List_mobile' >
                            <HashLink onClick={deleteBurgerMenu} smooth  to="/Court#ABOUT"><li>ABOUT</li></HashLink>
                            <HashLink onClick={deleteBurgerMenu} smooth  to="/Court#TRIALS"><li>TRIALS</li></HashLink>
                            <HashLink onClick={deleteBurgerMenu} smooth  to="/Court#ARCHIVE"><li>ARCHIVE</li></HashLink>
                            <Link to={'/'} ><li>BACK TO CITY</li></Link>
                        </ul>
                        <ConnectWallet />
                    </div>

                </div>
                

                
            </div>           
        </header>
    );
};

export default CourtHeader;