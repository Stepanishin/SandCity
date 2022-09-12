import React, { FC,useEffect } from 'react';
import './MainHeader.css'
import logo from '../../../../assets/img/logo.png'
import { HashLink } from 'react-router-hash-link';


const MainHeader: FC = () => {

    let burgerMenu:HTMLElement
    let toggle:HTMLInputElement

    useEffect(() => {
        burgerMenu = document.querySelector('.Header_nav_List_mobile')!
        toggle = document.querySelector("#toggle")!
    }, [])  

    // Closing of Hamburger
    const deleteBurgerMenu = () => {
        burgerMenu.classList.add("dn")
        toggle.checked = false
        burgerMenu.classList.remove("dn")
    }

    return (
        <header className='Header'>
            <div className='Header_container'>
                <div>
                    <img className='Header_logo' src={logo} alt="logo" />
                </div>
                <nav>
                    <ul className='Header_nav_List' >
                        <HashLink smooth  to="/#CITY"><li>CITY</li></HashLink>
                        <HashLink smooth  to="/#STORY"><li>STORY</li></HashLink>
                        <HashLink smooth  to="/#ROADMAP"><li>ROADMAP</li></HashLink>
                        <HashLink smooth  to="/#TEAM"><li>TEAM</li></HashLink>
                        <HashLink smooth  to="/#FAQ"><li>FAQ</li></HashLink>
                    </ul>
                </nav>
                <div className='Header_Hamburger_container'>
                    <input id="toggle" type="checkbox"></input>
                    <label htmlFor="toggle" className="hamburger">
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>
                    </label>
                    <ul className='Header_nav_List_mobile'>
                        <HashLink onClick={deleteBurgerMenu} smooth  to="/#CITY"><li>CITY</li></HashLink>
                        <HashLink onClick={deleteBurgerMenu} smooth  to="/#STORY"><li>STORY</li></HashLink>
                        <HashLink onClick={deleteBurgerMenu} smooth  to="/#ROADMAP"><li>ROADMAP</li></HashLink>
                        <HashLink onClick={deleteBurgerMenu} smooth  to="/#TEAM"><li>TEAM</li></HashLink>
                        <HashLink onClick={deleteBurgerMenu} smooth  to="/#FAQ"><li>FAQ</li></HashLink>
                    </ul>
                </div>
            </div>
            
        </header>
    );
};

export default MainHeader;