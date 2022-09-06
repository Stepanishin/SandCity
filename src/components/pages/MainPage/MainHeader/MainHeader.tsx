import React, { FC } from 'react';
import './MainHeader.css'
import logo from '../../../../assets/img/logo.png'
import { HashLink } from 'react-router-hash-link';


const MainHeader: FC = () => {

    return (
        <header className='Header'>
            <div className='Header_container'>
                <div>
                    <img src={logo} alt="logo" height='184px' width='190px'  />
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
            </div>
            
        </header>
    );
};

export default MainHeader;