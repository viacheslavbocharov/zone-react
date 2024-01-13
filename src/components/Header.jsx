import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';



export default function Header() {

    const [isNavActive, setIsNavActive] = useState(false);
    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    }


    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <Link to={'/'} className="header__left">
                        <div className="header__logo"><img src={logo} alt="Zone" /></div>
                        <div className="header__text">Zone.</div>
                    </Link>
                    <div className="header__right">
                        <nav className={`header__nav ${isNavActive ? 'header__nav_active' : ''}`}>
                            <div className="header__menu">
                                <div className="header__close" onClick={toggleNav}><span class="material-icons">
                                    close
                                </span></div>
                                <Link to={'/'} className="header__link">Home</Link>
                                <Link to={'/'} className="header__link">About Us</Link>
                                <Link to={'/'} className="header__link">Service</Link>
                                <Link to={'/'} className="header__link">Pricing</Link>
                                <Link to={'/'} className="header__link">Blog</Link>
                            </div>
                            <div className="header__backdrop" onClick={toggleNav}></div>
                        </nav>
                        <div className="header__btns-wrapper">
                            <button className="header__btn btn">Contact Us</button>
                            <div className="header__burger" onClick={toggleNav}><span class="material-icons">
                                menu
                            </span></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


