import React, { FC,useEffect } from 'react';
import logo from './img/logo.svg'
import { HashLink } from 'react-router-hash-link';
import ConnectWallet from '../../../UI/ConnectWallet/ConnectWallet';
import './CourtHeader.css'
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';


const CourtHeader: FC = () => {

    let burgerMenu:HTMLElement
    let toggle:HTMLInputElement
    let {isShowFlat} = useAppSelector(state => state.accessToFlatSlice)

    // Closing of Hamburger
    const deleteBurgerMenu = () => {
        burgerMenu = document.getElementById('Court_Header_nav_List_mobile')!
        toggle = document.querySelector("#toggleCourt")!
        burgerMenu.classList.add("Court_dn")
        toggle.checked = false
        burgerMenu.classList.remove("Court_dn")
    }

    return (
        <header className='Court_Header'>
            <div className='Court_Header_container'>
                <div onClick={deleteBurgerMenu}>
                    <img className='Court_Header_logo' src={logo} alt="logo" />
                </div>
                <div className='Court_wrapper_decs' >
                    <nav>
                        <ul className='Court_Header_nav_List' >
                            <HashLink smooth  to="/"><li>COURT</li></HashLink>
                            {
                                isShowFlat && <HashLink smooth  to="/Stats/#FLAT"><li>PROFILE</li></HashLink>
                                // isShowFlat && <NavLink to="/Stats/#FLAT"><li>PROFILE</li></NavLink>
                            }
                            <HashLink smooth  to="/#ARCHIVE"><li>ARCHIVE</li></HashLink>
                            <a href='https://dustcity.world/'  target="_blank" rel="noreferrer"><li>BACK TO CITY</li></a>
                            <ConnectWallet />
                        </ul>
                    </nav>
                    
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
                            <HashLink onClick={deleteBurgerMenu} smooth  to="/"><li>COURT</li></HashLink>
                            {
                                // isShowFlat && <HashLink onClick={deleteBurgerMenu} smooth  to="/#FLAT"><li>PROFILE</li></HashLink>
                                isShowFlat && <NavLink to="/Stats"><li>PROFILE</li></NavLink>
                            }
                            <HashLink onClick={deleteBurgerMenu} smooth  to="/#ARCHIVE"><li>ARCHIVE</li></HashLink>
                            <a  onClick={deleteBurgerMenu} href='https://dustcity.world/'  target="_blank" rel="noreferrer" ><li>BACK TO CITY</li></a>
                            <li><ConnectWallet /></li>
                        </ul>
                        
                    </div>

                </div>
                

                
            </div>           
        </header>
    );
};

export default CourtHeader;