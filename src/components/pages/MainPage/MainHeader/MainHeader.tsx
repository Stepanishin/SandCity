import React, { FC,useEffect } from 'react';
import './MainHeader.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import border from './img/border.svg'
import borderMobile from './img/borderMobile.svg'
import borderMobileBlur from './img/borderMobileBlur.svg'


const MainHeader: FC = () => {

    let city:HTMLElement
    let cityMobile:HTMLElement
    let cityMenuMobile:HTMLElement
    let cityMenu:HTMLElement
    let burgerMenu:HTMLElement
    let toggle:HTMLInputElement
    let header:HTMLElement
    let societyMobile:HTMLElement

    useEffect(() => {
        city = document.querySelector('.Header_nav_list-city')!
        cityMenu = document.querySelector('.Header_nav_city_container')!
        cityMobile=document.querySelector('.Header_nav_list-city-mobile')!
        cityMenuMobile=document.querySelector('.Header_nav_city_container-mobile')!
        burgerMenu = document.querySelector('.Header_nav_mobile_List')!
        toggle = document.querySelector("#toggle")!
        header = document.querySelector('.Header_container')!
        societyMobile = document.querySelector('.Header_social-mobile')!
    }, [])  

    // Open and Close City menu
    const openCityMenu = () => {
        city.classList.toggle('Header_nav_list-city-db')
        cityMenu.classList.toggle('db')
    }

    // Open and Close City menu mobile version
    const openCityMenuMobile = () => {
        cityMobile.classList.toggle('Header_nav_list-city-db-mobile')
        burgerMenu.classList.toggle('pd147')
        cityMenuMobile.classList.toggle('db')
        societyMobile.classList.toggle('pd147')
    }

    // Closing of Hamburger
    const deleteBurgerMenu = () => {
        burgerMenu.classList.add("dn")
        toggle.checked = false
        burgerMenu.classList.remove("dn")
    }

    return (
        <header className='Header'>
            <div className='Header_container'>
                <p className='Header_logo' >Dust City</p>
                <nav>
                    <ul className='Header_nav_List' >
                        <HashLink smooth  to="/#CITYMENU"><li onClick={openCityMenu} className='Header_nav_list-city'>City</li></HashLink>
                        <HashLink smooth  to="/#STORY"><li>Story</li></HashLink>
                        <HashLink smooth  to="/#ROADMAP"><li>Roadmap</li></HashLink>
                        <HashLink smooth  to="/#TEAM"><li>Team</li></HashLink>
                        <HashLink smooth  to="/#FAQ"><li>FAQ</li></HashLink>

                        <div id='CITYMENU' className='Header_nav_city_container'>
                            <img src={border} alt="" />
                            <ul className='Header_nav_city_list'>
                                <Link to={'/'} ><li>Emporium</li></Link>
                                <Link to={'/'} ><li>Court</li></Link>
                                <Link to={'/'} ><li>Symbiosis Labs</li></Link>
                                <Link to={'/'} ><li>Outside</li></Link>
                            </ul>
                        </div>
                        
                    </ul>
                </nav>
                <div className='Header_social'>
                    <a href="#">
                        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.31702 18.8416C15.6704 18.8416 20.2412 11.9144 20.2412 5.91734C20.2412 5.72246 20.2412 5.52758 20.2324 5.33269C21.1182 4.6949 21.8889 3.8888 22.5001 2.9764C21.6851 3.33958 20.8082 3.57876 19.8869 3.69391C20.8259 3.13584 21.5434 2.24116 21.8889 1.17817C21.0119 1.7008 20.0375 2.07285 19.0011 2.27659C18.1684 1.39077 16.9903 0.841553 15.6881 0.841553C13.1812 0.841553 11.1438 2.87895 11.1438 5.38584C11.1438 5.74017 11.1881 6.08565 11.259 6.42226C7.48533 6.23624 4.1369 4.42029 1.89576 1.67423C1.506 2.34746 1.28454 3.12699 1.28454 3.95966C1.28454 5.53643 2.09064 6.92718 3.30423 7.74214C2.56013 7.71557 1.86033 7.51183 1.24911 7.17521C1.24911 7.19293 1.24911 7.21065 1.24911 7.23722C1.24911 9.43407 2.81702 11.2766 4.88986 11.6929C4.50895 11.7992 4.11033 11.8524 3.69399 11.8524C3.40167 11.8524 3.1182 11.8258 2.8436 11.7727C3.41938 13.5797 5.10246 14.8908 7.08671 14.9262C5.52765 16.1486 3.56997 16.875 1.44399 16.875C1.0808 16.875 0.717612 16.8573 0.363281 16.813C2.36525 18.0886 4.75698 18.8416 7.31702 18.8416Z" fill="url(#paint0_linear_873_83303)"/>
                            <defs>
                            <linearGradient id="paint0_linear_873_83303" x1="11.4317" y1="0.841553" x2="11.4317" y2="70.5806" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5AC1CD"/>
                            <stop offset="1" stopColor="#5AC1CD" stopOpacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0403 2.32916C20.4007 1.63335 18.6319 1.12948 16.7857 0.841553C16.747 0.841553 16.7212 0.85355 16.6954 0.877543C16.463 1.24945 16.2177 1.72932 16.0369 2.10122C14.0487 1.8253 12.0734 1.8253 10.1368 2.10122C9.96896 1.71732 9.71075 1.24945 9.47836 0.877543C9.46545 0.85355 9.42672 0.841553 9.4009 0.841553C7.55469 1.12948 5.78594 1.64534 4.1463 2.32916C4.13339 2.32916 4.12048 2.34116 4.10757 2.35316C0.76373 6.92396 -0.15292 11.3868 0.29895 15.7896C0.29895 15.8136 0.31186 15.8376 0.337681 15.8496C2.53248 17.3372 4.67563 18.237 6.76714 18.8368C6.80587 18.8488 6.83169 18.8368 6.85752 18.8129C7.34812 18.189 7.79999 17.5412 8.17439 16.8454C8.20021 16.8094 8.17439 16.7614 8.13566 16.7374C7.43849 16.4975 6.76714 16.1975 6.12161 15.8616C6.06997 15.8376 6.06997 15.7656 6.1087 15.7417C6.23781 15.6457 6.37983 15.5497 6.50893 15.4537C6.53475 15.4417 6.56057 15.4297 6.58639 15.4417C10.8081 17.2053 15.3914 17.2053 19.5615 15.4417C19.5873 15.4297 19.6261 15.4297 19.6519 15.4537C19.781 15.5497 19.9101 15.6457 20.0521 15.7417C20.1038 15.7776 20.0908 15.8376 20.0392 15.8616C19.3937 16.2095 18.7223 16.4975 18.0252 16.7374C17.9735 16.7494 17.9606 16.7974 17.9864 16.8454C18.3737 17.5292 18.8127 18.189 19.3033 18.8009C19.3291 18.8248 19.3549 18.8368 19.3937 18.8248C21.4981 18.225 23.6412 17.3252 25.849 15.8496C25.8619 15.8376 25.8748 15.8136 25.8877 15.7896C26.4299 10.691 24.9839 6.27613 22.0662 2.35316C22.0662 2.35316 22.0532 2.34116 22.0403 2.32916ZM8.80701 13.1143C7.52886 13.1143 6.48311 12.0466 6.48311 10.739C6.48311 9.4313 7.51595 8.36358 8.80701 8.36358C10.111 8.36358 11.1438 9.4433 11.1309 10.739C11.1309 12.0466 10.0981 13.1143 8.80701 13.1143ZM17.3925 13.1143C16.1144 13.1143 15.0686 12.0466 15.0686 10.739C15.0686 9.4313 16.1015 8.36358 17.3925 8.36358C18.6965 8.36358 19.7293 9.4433 19.7164 10.739C19.7164 12.0466 18.6965 13.1143 17.3925 13.1143Z" fill="url(#paint0_linear_873_83304)"/>
                            <defs>
                            <linearGradient id="paint0_linear_873_83304" x1="13.0957" y1="0.841553" x2="13.0957" y2="70.5806" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5AC1CD"/>
                            <stop offset="1" stopColor="#5AC1CD" stopOpacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7872 16.0722C31.406 15.3506 30.7867 15.0383 29.9904 15.0401C27.4877 15.0451 24.9846 15.0428 22.4819 15.0397C22.3709 15.0397 22.205 15.1087 22.1578 14.9761C22.1056 14.83 22.2844 14.7755 22.3736 14.6993C23.4994 13.7375 24.6297 12.7822 25.7573 11.8227C26.7101 11.0117 26.9388 9.60744 26.3115 8.51364C26.0337 8.02892 25.5959 7.71259 25.191 7.36175C24.1865 6.49035 23.1761 5.62575 22.168 4.75843C22.1885 4.6377 22.2666 4.62862 22.3499 4.62817C22.3691 4.62817 22.3887 4.62817 22.4079 4.62817C23.1365 4.61682 23.8655 4.65086 24.5936 4.61047C24.6154 4.61501 24.6368 4.62318 24.6587 4.62318C26.5268 4.62454 28.3955 4.63815 30.2637 4.61773C30.7844 4.61183 31.2334 4.36902 31.5558 3.92877C31.5647 3.92605 31.5732 3.92378 31.5821 3.92106C31.5794 3.91652 31.5768 3.91244 31.5741 3.90744C31.6053 3.87976 31.6329 3.8498 31.6579 3.81849C31.7328 3.72408 31.7827 3.61334 31.8233 3.4967C31.8273 3.49216 31.8318 3.48762 31.8358 3.48309C31.8478 3.46902 31.8581 3.45449 31.8652 3.43906C31.875 3.41818 31.8795 3.39458 31.875 3.36781C31.8884 3.31834 31.9022 3.26841 31.9161 3.21849C31.921 3.21077 31.9259 3.20306 31.9303 3.19534C31.9486 3.16448 31.9647 3.13271 31.9705 3.09867C31.9749 3.07325 31.974 3.04602 31.9651 3.01697C31.9762 2.97749 31.9847 2.93755 31.9905 2.89806C32.0048 2.79867 32.0021 2.69927 31.9834 2.59942C31.9798 2.57945 31.9754 2.55948 31.9705 2.53952C31.9691 2.25903 31.8835 2.00669 31.7248 1.77885C31.6989 1.71667 31.669 1.65722 31.6311 1.60502C31.6124 1.57915 31.5915 1.5551 31.5683 1.53286C31.5683 1.53286 31.5678 1.53195 31.5674 1.53195C31.5438 1.50926 31.5175 1.48883 31.488 1.47113C31.4934 1.45616 31.4934 1.44617 31.4885 1.44163C31.4836 1.43664 31.4738 1.43664 31.4595 1.44163C31.4354 1.39715 31.4055 1.35903 31.3708 1.32726C31.3355 1.29504 31.2954 1.26871 31.2499 1.24829C31.2495 1.2442 31.2486 1.24012 31.2477 1.23649C31.2446 1.2256 31.2401 1.21652 31.2334 1.21062C31.2245 1.2029 31.2111 1.20018 31.1929 1.20472C31.1674 1.18929 31.142 1.17386 31.1166 1.15843C31.1139 1.14073 31.1081 1.12802 31.0988 1.12076C31.0894 1.11349 31.0756 1.11168 31.0578 1.11712C31.0297 1.10215 31.0011 1.08762 30.973 1.07265C30.973 1.06902 30.9726 1.06538 30.9722 1.06221C30.9704 1.04905 30.9664 1.03997 30.9579 1.03679C30.9516 1.03452 30.9427 1.03679 30.9302 1.04315C30.8536 1.02272 30.7769 1.0023 30.7006 0.981875C30.6114 0.899727 30.5107 0.865234 30.4063 0.851164C30.3934 0.849349 30.3805 0.847987 30.3676 0.847079C30.2886 0.840271 30.2079 0.842995 30.1281 0.843902C30.1147 0.843902 30.1018 0.843902 30.0884 0.843902C28.2653 0.840725 26.4421 0.842087 24.619 0.842087C21.7815 0.842087 18.9444 0.842087 16.1069 0.842087C14.9507 0.842087 14.08 1.43483 13.6484 2.51728C13.1637 3.73361 12.6835 4.95177 12.1993 6.16856C11.4565 8.03437 10.7119 9.89973 9.96638 11.7646C9.93161 11.8513 9.91333 11.9643 9.78759 11.9693C9.64759 11.9748 9.62886 11.8527 9.59096 11.7592C9.46344 11.4465 9.34083 11.1315 9.21554 10.8174C8.17132 8.19504 7.12575 5.57355 6.08331 2.95026C5.59955 1.738 4.72832 1.0082 3.45313 0.863872C1.5845 0.652374 0.00701381 2.12605 0.0056762 4.03906C0.00344686 7.66039 0.00478447 11.2822 0.0043386 14.9035C0.0043386 15.5462 -0.00725399 16.1893 0.00745968 16.8315C0.0400081 18.2598 1.54972 19.2474 2.83516 18.6773C3.67161 18.3065 4.11659 17.643 4.11882 16.709C4.1255 13.8056 4.1206 10.9023 4.12283 7.99897C4.12283 7.91728 4.07512 7.79337 4.19773 7.76932C4.29627 7.7498 4.31946 7.86009 4.34799 7.93452C5.06629 9.81168 5.78369 11.6897 6.50109 13.5674C6.99779 14.8677 7.48646 16.1711 7.99297 17.4674C8.29259 18.2344 8.87088 18.6565 9.67523 18.7127C10.2018 18.7495 10.6878 18.6029 11.0637 18.1903C11.1221 18.1745 11.16 18.1377 11.1734 18.0769C11.1818 18.0728 11.1898 18.0687 11.1979 18.0646C11.238 18.0433 11.2728 18.0165 11.2928 17.9766C11.3009 17.9607 11.3062 17.9425 11.3089 17.9212C11.333 17.899 11.3575 17.8772 11.3753 17.8509C11.3776 17.8472 11.3802 17.8441 11.3825 17.8404C11.3936 17.8218 11.4012 17.8009 11.403 17.776C11.4507 17.7324 11.4859 17.6811 11.5144 17.6267C11.5523 17.554 11.5782 17.4751 11.6058 17.3979C11.6125 17.3788 11.6197 17.3593 11.6268 17.3407C12.6657 14.6421 13.693 11.9385 14.7385 9.24209C15.1657 8.14057 15.55 7.02499 15.921 5.90351C15.982 5.71879 16.0329 5.68883 16.1858 5.82545C16.7258 6.30835 17.2706 6.78535 17.823 7.25328C18.1289 7.51243 18.408 7.80472 18.7438 8.02666C18.7558 8.03846 18.7683 8.0498 18.7803 8.0616C18.8133 8.10245 18.8454 8.14511 18.882 8.18187C18.919 8.21864 18.9609 8.24905 19.014 8.26675C19.0211 8.28717 19.0309 8.30305 19.0447 8.31486C19.0585 8.3262 19.0759 8.33301 19.0978 8.33437C19.1143 8.36069 19.1321 8.38566 19.1513 8.4088C19.1606 8.4206 19.1709 8.43195 19.1807 8.44239C19.1807 8.44239 19.1816 8.4433 19.182 8.4433C19.203 8.46508 19.2253 8.48551 19.2494 8.50366C19.2841 8.52998 19.3225 8.55222 19.3649 8.56947C19.3885 8.60033 19.4117 8.63165 19.4375 8.66024C19.4442 8.66796 19.4513 8.67476 19.4589 8.68203C19.4781 8.70018 19.4986 8.71652 19.5227 8.72877C19.5325 8.73377 19.5428 8.7383 19.5539 8.74194C19.5557 8.74647 19.557 8.75101 19.5588 8.7551C19.5646 8.76871 19.5713 8.78051 19.5811 8.78959C19.5927 8.80048 19.6078 8.80729 19.6292 8.80638C19.6573 8.8377 19.6832 8.87174 19.7126 8.90169C19.7144 8.90351 19.7162 8.90487 19.7175 8.90623C19.7336 8.92212 19.751 8.93619 19.7701 8.94844C19.7849 8.95752 19.8 8.96569 19.8174 8.97159C19.8205 8.9784 19.8241 8.9852 19.8281 8.99201C19.8335 9.00109 19.8393 9.00926 19.8455 9.01697C19.8526 9.02605 19.8607 9.03422 19.8696 9.04148C19.8905 9.05873 19.9159 9.06962 19.9467 9.07416C19.981 9.13134 20.0212 9.18172 20.0702 9.22257C20.0751 9.22666 20.08 9.23029 20.0849 9.23437C20.1032 9.24799 20.1219 9.26115 20.1429 9.27204C20.1549 9.27839 20.1674 9.2843 20.1803 9.28974C20.1906 9.30653 20.2009 9.32242 20.2124 9.3374C20.2182 9.34511 20.2245 9.35237 20.2307 9.35964C20.2615 9.39413 20.2985 9.42136 20.3453 9.43679C20.3921 9.48308 20.4372 9.53165 20.4862 9.57476C20.7328 9.79262 20.7314 9.88702 20.4795 10.1053C20.2789 10.2792 20.0658 10.4389 19.8883 10.6395C19.87 10.6363 19.8571 10.64 19.8482 10.6486C19.8393 10.6572 19.8344 10.6704 19.8321 10.6872C19.8089 10.6962 19.7884 10.7076 19.7688 10.7208C19.7207 10.7539 19.6823 10.7993 19.6435 10.8442C19.6359 10.8533 19.6284 10.8624 19.6203 10.871C19.5882 10.8728 19.565 10.8869 19.5477 10.9077C19.537 10.92 19.528 10.935 19.5205 10.9513C18.7032 11.6634 17.8814 12.3696 17.07 13.0885C15.8902 14.1338 15.6468 15.986 16.518 17.3144C17.1694 18.307 18.0941 18.8267 19.2654 18.8303C22.8676 18.8412 26.4693 18.8344 30.0715 18.8344C30.1308 18.8344 30.1905 18.8344 30.2498 18.8307C31.5776 18.7577 32.415 17.2627 31.7854 16.0713L31.7872 16.0722Z" fill="url(#paint0_linear_873_83305)"/>
                            <defs>
                            <linearGradient id="paint0_linear_873_83305" x1="15.9998" y1="0.841797" x2="15.9998" y2="70.5794" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5AC1CD"/>
                            <stop offset="1" stopColor="#5AC1CD" stopOpacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </div>



                <div className='Header_Hamburger_container'>
                    <input id="toggle" type="checkbox"></input>
                    <label htmlFor="toggle" className="hamburger">
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>  
                    </label>
                    <div  className='Header_nav_mobile'>                        
                        <div  className='Header_nav_mobile_wrapper'>
                            <img className='Header_nav_mobile_borderMobileBlur' src={borderMobileBlur} alt="" />
                            <div className='Header_nav_mobile_borderMobile'>
                                <ul className='Header_nav_mobile_List' >
                                    <HashLink smooth  to="/#CITYMENU"><li onClick={openCityMenuMobile} className='Header_nav_list-city-mobile'>City</li></HashLink>
                                    <div id='CITYMENU' className='Header_nav_city_container-mobile'>
                                        <img src={border} alt="" />
                                        <ul className='Header_nav_city_list-mobile'>
                                            <Link to={'/'} ><li>Emporium</li></Link>
                                            <Link to={'/'} ><li>Court</li></Link>
                                            <Link to={'/'} ><li>Symbiosis Labs</li></Link>
                                            <Link to={'/'} ><li>Outside</li></Link>
                                        </ul>
                                    </div>
                                    <HashLink smooth  to="/#STORY"><li>Story</li></HashLink>
                                    <HashLink smooth  to="/#ROADMAP"><li>Roadmap</li></HashLink>
                                    <HashLink smooth  to="/#TEAM"><li>Team</li></HashLink>
                                    <HashLink smooth  to="/#FAQ"><li>FAQ</li></HashLink>
                                </ul>

                                <div className='Header_social-mobile'>
                                    <a href="#">
                                    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7249 26.5277C22.8318 26.5277 29.4565 16.4878 29.4565 7.79603C29.4565 7.51357 29.4565 7.23112 29.4437 6.94867C30.7276 6.02429 31.8445 4.85596 32.7304 3.53358C31.5492 4.05997 30.2782 4.40661 28.943 4.57351C30.3039 3.76468 31.3438 2.46797 31.8445 0.927324C30.5735 1.68481 29.1612 2.22403 27.6591 2.51932C26.4523 1.23545 24.7447 0.439453 22.8574 0.439453C19.2241 0.439453 16.2712 3.39235 16.2712 7.0257C16.2712 7.53925 16.3354 8.03996 16.4381 8.52783C10.9688 8.25822 6.11577 5.62629 2.86758 1.64629C2.30268 2.62203 1.98171 3.75184 1.98171 4.95867C1.98171 7.24396 3.15003 9.25964 4.90893 10.4408C3.83048 10.4023 2.81622 10.107 1.93035 9.61912C1.93035 9.6448 1.93035 9.67048 1.93035 9.70899C1.93035 12.893 4.2028 15.5634 7.20706 16.1669C6.65499 16.3209 6.07725 16.398 5.47383 16.398C5.05016 16.398 4.63932 16.3594 4.24132 16.2824C5.07583 18.9015 7.51519 20.8016 10.3911 20.853C8.13144 22.6247 5.29409 23.6775 2.21281 23.6775C1.68642 23.6775 1.16003 23.6518 0.646484 23.5876C3.54803 25.4364 7.01448 26.5277 10.7249 26.5277Z" fill="url(#paint0_linear_873_91101)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_873_91101" x1="16.6884" y1="0.439454" x2="16.6884" y2="101.516" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#5AC1CD"/>
                                        <stop offset="1" stopColor="#5AC1CD" stop-opacity="0"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>

                                    </a>
                                    <a href="#">
                                        <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.1657 2.59552C29.7893 1.58704 27.2258 0.856756 24.55 0.439453C24.4938 0.439453 24.4564 0.456841 24.419 0.491616C24.0822 1.03063 23.7266 1.72614 23.4647 2.26515C20.583 1.86524 17.7201 1.86524 14.9133 2.26515C14.6701 1.70875 14.2958 1.03063 13.959 0.491616C13.9403 0.456841 13.8842 0.439453 13.8468 0.439453C11.171 0.856756 8.60744 1.60442 6.23103 2.59552C6.21232 2.59552 6.19361 2.6129 6.17489 2.63029C1.32852 9.25497 -2.46465e-05 15.7232 0.654891 22.1044C0.654891 22.1392 0.673603 22.174 0.711027 22.1913C3.89205 24.3474 6.99822 25.6515 10.0295 26.5209C10.0857 26.5382 10.1231 26.5209 10.1605 26.4861C10.8716 25.5819 11.5265 24.643 12.0691 23.6345C12.1066 23.5824 12.0691 23.5128 12.013 23.478C11.0026 23.1303 10.0295 22.6956 9.09395 22.2087C9.0191 22.174 9.0191 22.0696 9.07524 22.0349C9.26235 21.8958 9.46818 21.7567 9.6553 21.6176C9.69273 21.6002 9.73015 21.5828 9.76757 21.6002C15.8864 24.1561 22.5291 24.1561 28.573 21.6002C28.6104 21.5828 28.6666 21.5828 28.704 21.6176C28.8911 21.7567 29.0782 21.8958 29.2841 22.0349C29.3589 22.087 29.3402 22.174 29.2653 22.2087C28.3298 22.713 27.3567 23.1303 26.3463 23.478C26.2714 23.4954 26.2527 23.565 26.2902 23.6345C26.8515 24.6256 27.4877 25.5819 28.1988 26.4687C28.2362 26.5035 28.2736 26.5209 28.3298 26.5035C31.3798 25.6341 34.486 24.33 37.6857 22.1913C37.7044 22.174 37.7231 22.1392 37.7418 22.1044C38.5277 14.7147 36.432 8.31604 32.2031 2.63029C32.2031 2.63029 32.1844 2.6129 32.1657 2.59552ZM12.986 18.227C11.1335 18.227 9.61788 16.6795 9.61788 14.7842C9.61788 12.889 11.1148 11.3415 12.986 11.3415C14.8759 11.3415 16.3729 12.9064 16.3542 14.7842C16.3542 16.6795 14.8572 18.227 12.986 18.227ZM25.4294 18.227C23.5769 18.227 22.0613 16.6795 22.0613 14.7842C22.0613 12.889 23.5582 11.3415 25.4294 11.3415C27.3193 11.3415 28.8163 12.9064 28.7976 14.7842C28.7976 16.6795 27.3193 18.227 25.4294 18.227Z" fill="url(#paint0_linear_873_91102)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_873_91102" x1="19.2018" y1="0.439454" x2="19.2018" y2="101.516" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#5AC1CD"/>
                                        <stop offset="1" stopColor="#5AC1CD" stop-opacity="0"/>
                                        </linearGradient>
                                        </defs>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg width="48" height="27" viewBox="0 0 48 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.0462 22.5139C46.4937 21.468 45.5961 21.0155 44.442 21.0181C40.8148 21.0253 37.1869 21.0221 33.5597 21.0174C33.3988 21.0174 33.1584 21.1174 33.0899 20.9254C33.0143 20.7135 33.2734 20.6346 33.4026 20.5241C35.0343 19.1302 36.6725 17.7456 38.3068 16.355C39.6878 15.1795 40.0193 13.1443 39.11 11.559C38.7074 10.8565 38.0729 10.398 37.4861 9.88949C36.0302 8.62652 34.5658 7.37342 33.1047 6.11637C33.1345 5.9414 33.2475 5.92824 33.3684 5.92758C33.3962 5.92758 33.4246 5.92758 33.4524 5.92758C34.5083 5.91114 35.5649 5.96047 36.6202 5.90193C36.6518 5.90851 36.6828 5.92035 36.7145 5.92035C39.4222 5.92232 42.1305 5.94205 44.8381 5.91245C45.5929 5.9039 46.2436 5.55198 46.7109 4.91392C46.7238 4.90997 46.7361 4.90668 46.749 4.90273C46.7451 4.89616 46.7412 4.89024 46.7374 4.883C46.7826 4.84288 46.8227 4.79946 46.8588 4.75407C46.9674 4.61725 47.0398 4.45675 47.0986 4.28769C47.1044 4.28112 47.1109 4.27454 47.1167 4.26796C47.1341 4.24757 47.149 4.22652 47.1593 4.20415C47.1735 4.1739 47.18 4.13969 47.1735 4.10088C47.1929 4.02918 47.213 3.95682 47.233 3.88446C47.2401 3.87328 47.2472 3.8621 47.2537 3.85092C47.2802 3.80619 47.3034 3.76014 47.3118 3.71081C47.3183 3.67397 47.317 3.6345 47.3041 3.5924C47.3202 3.53517 47.3325 3.47729 47.3409 3.42006C47.3616 3.276 47.3577 3.13195 47.3306 2.98723C47.3254 2.95829 47.3189 2.92934 47.3118 2.9004C47.3099 2.49388 47.1858 2.12815 46.9558 1.79793C46.9183 1.70781 46.875 1.62164 46.8201 1.546C46.7929 1.5085 46.7626 1.47364 46.729 1.44141C46.729 1.44141 46.7283 1.44009 46.7277 1.44009C46.6934 1.4072 46.6553 1.3776 46.6126 1.35195C46.6204 1.33024 46.6204 1.31577 46.6133 1.30919C46.6062 1.30195 46.592 1.30195 46.5713 1.30919C46.5364 1.24473 46.4931 1.18947 46.4427 1.14342C46.3916 1.09672 46.3335 1.05857 46.2675 1.02897C46.2669 1.02305 46.2656 1.01713 46.2643 1.01187C46.2598 0.996078 46.2533 0.982922 46.2436 0.974371C46.2307 0.963188 46.2113 0.959242 46.1848 0.965819C46.148 0.943454 46.1112 0.921089 46.0743 0.898724C46.0705 0.87307 46.062 0.854652 46.0485 0.844127C46.0349 0.833602 46.0149 0.830971 45.989 0.838865C45.9483 0.817157 45.907 0.796108 45.8662 0.774401C45.8662 0.769138 45.8656 0.763876 45.865 0.759271C45.8624 0.740195 45.8566 0.727039 45.8443 0.722435C45.8352 0.719146 45.8223 0.722435 45.8042 0.731644C45.6931 0.702043 45.5819 0.672442 45.4714 0.642841C45.3422 0.52378 45.1961 0.473787 45.0449 0.453396C45.0262 0.450764 45.0074 0.448791 44.9887 0.447475C44.8743 0.437609 44.7573 0.441555 44.6417 0.442871C44.6223 0.442871 44.6035 0.442871 44.5842 0.442871C41.9418 0.438266 39.2994 0.44024 36.657 0.44024C32.5445 0.44024 28.4326 0.44024 24.32 0.44024C22.6444 0.44024 21.3823 1.29932 20.7568 2.86817C20.0544 4.63106 19.3584 6.39659 18.6566 8.16015C17.58 10.8643 16.5008 13.5679 15.4203 16.2708C15.3699 16.3964 15.3434 16.5602 15.1612 16.5674C14.9583 16.5753 14.9311 16.3984 14.8762 16.2629C14.6914 15.8097 14.5137 15.3532 14.3321 14.898C12.8187 11.0972 11.3033 7.29777 9.79241 3.49571C9.09126 1.73873 7.82856 0.680993 5.98037 0.471814C3.27207 0.165281 0.985751 2.30115 0.983813 5.07376C0.980582 10.3223 0.98252 15.5715 0.981874 20.8201C0.981874 21.7515 0.965072 22.6836 0.986398 23.6144C1.03357 25.6845 3.22167 27.1159 5.08471 26.2897C6.29702 25.7523 6.94194 24.7906 6.94518 23.4368C6.95487 19.2289 6.94776 15.021 6.95099 10.813C6.95099 10.6946 6.88185 10.5151 7.05956 10.4802C7.20237 10.4519 7.23597 10.6118 7.27733 10.7196C8.31839 13.4403 9.35815 16.1622 10.3979 18.8836C11.1178 20.7681 11.8261 22.6573 12.5602 24.536C12.9944 25.6477 13.8326 26.2594 14.9983 26.341C15.7615 26.3943 16.4659 26.1818 17.0107 25.5839C17.0953 25.5609 17.1503 25.5076 17.1696 25.4194C17.1819 25.4135 17.1935 25.4076 17.2052 25.4017C17.2633 25.3707 17.3137 25.3319 17.3428 25.2741C17.3545 25.251 17.3622 25.2247 17.3661 25.1938C17.401 25.1616 17.4365 25.13 17.4624 25.0918C17.4656 25.0866 17.4695 25.082 17.4727 25.0767C17.4889 25.0497 17.4999 25.0195 17.5024 24.9833C17.5716 24.9202 17.6226 24.8458 17.664 24.7669C17.7189 24.6616 17.7564 24.5472 17.7965 24.4354C17.8062 24.4077 17.8165 24.3794 17.8268 24.3525C19.3325 20.4412 20.8214 16.5227 22.3368 12.6147C22.9559 11.0183 23.5129 9.40141 24.0506 7.77599C24.1391 7.50827 24.2128 7.46485 24.4344 7.66285C25.217 8.36275 26.0067 9.05409 26.8073 9.73228C27.2506 10.1079 27.6552 10.5315 28.1418 10.8532C28.1592 10.8703 28.1773 10.8867 28.1948 10.9038C28.2426 10.963 28.2891 11.0249 28.3421 11.0781C28.3957 11.1314 28.4565 11.1755 28.5334 11.2011C28.5437 11.2307 28.5579 11.2538 28.578 11.2709C28.598 11.2873 28.6232 11.2972 28.6549 11.2992C28.6788 11.3373 28.7046 11.3735 28.7324 11.407C28.746 11.4241 28.7609 11.4406 28.7751 11.4557C28.7751 11.4557 28.7764 11.457 28.777 11.457C28.8074 11.4886 28.8397 11.5182 28.8746 11.5445C28.925 11.5827 28.9806 11.6149 29.042 11.6399C29.0762 11.6846 29.1098 11.73 29.1473 11.7715C29.157 11.7826 29.1673 11.7925 29.1783 11.803C29.2061 11.8293 29.2358 11.853 29.2707 11.8708C29.2849 11.878 29.2998 11.8846 29.316 11.8899C29.3185 11.8964 29.3205 11.903 29.3231 11.9089C29.3315 11.9287 29.3412 11.9458 29.3554 11.9589C29.3722 11.9747 29.3941 11.9846 29.4252 11.9833C29.4659 12.0286 29.5034 12.078 29.546 12.1214C29.5486 12.124 29.5512 12.126 29.5531 12.128C29.5764 12.151 29.6016 12.1714 29.6294 12.1892C29.6507 12.2023 29.6727 12.2141 29.6979 12.2227C29.7024 12.2326 29.7076 12.2424 29.7134 12.2523C29.7211 12.2655 29.7295 12.2773 29.7386 12.2885C29.7489 12.3016 29.7606 12.3135 29.7735 12.324C29.8038 12.349 29.8407 12.3648 29.8853 12.3714C29.935 12.4542 29.9932 12.5273 30.0643 12.5865C30.0714 12.5924 30.0785 12.5976 30.0856 12.6036C30.1121 12.6233 30.1392 12.6424 30.1696 12.6582C30.1871 12.6674 30.2052 12.6759 30.2239 12.6838C30.2388 12.7082 30.2536 12.7312 30.2704 12.7529C30.2788 12.7641 30.2879 12.7746 30.2969 12.7851C30.3415 12.8351 30.3951 12.8746 30.463 12.8969C30.5308 12.964 30.5961 13.0344 30.6672 13.0969C31.0246 13.4127 31.0226 13.5495 30.6575 13.8659C30.3667 14.1178 30.0578 14.3494 29.8006 14.6401C29.7741 14.6355 29.7554 14.6408 29.7425 14.6533C29.7295 14.6658 29.7224 14.6848 29.7192 14.7092C29.6856 14.7223 29.6559 14.7388 29.6274 14.7578C29.5576 14.8059 29.5021 14.8716 29.4458 14.9368C29.4349 14.9499 29.4239 14.9631 29.4122 14.9756C29.3657 14.9782 29.3321 14.9986 29.3069 15.0289C29.2914 15.0466 29.2785 15.0683 29.2675 15.092C28.083 16.1241 26.892 17.1476 25.7159 18.1896C24.006 19.7045 23.6531 22.389 24.9159 24.3143C25.86 25.7529 27.2002 26.5061 28.8979 26.5114C34.1186 26.5272 39.3388 26.5173 44.5596 26.5173C44.6455 26.5173 44.7321 26.5173 44.8181 26.512C46.7425 26.4061 47.9561 24.2393 47.0437 22.5126L47.0462 22.5139Z" fill="url(#paint0_linear_873_91103)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_873_91103" x1="24.1648" y1="0.43982" x2="24.1648" y2="101.514" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#5AC1CD"/>
                                        <stop offset="1" stopColor="#5AC1CD" stop-opacity="0"/>
                                        </linearGradient>
                                        </defs>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                
                        </div>
                    </div>
                </div>
                
            </div>
            
        </header>
    );
};

export default MainHeader;








