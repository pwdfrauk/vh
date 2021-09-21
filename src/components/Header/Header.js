import  './Header.css';
import logo from './logo.png';
import loginmobile from './loginmobile.png';
import loginicon from './loginicon.png'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header =()=> {
    const[mibileMenu, setMobileMenu] = useState(false);

    const showMobileMenu =()=> {
        setMobileMenu(true);
        document.body.style.overflow = 'hidden';
    }

    const hiddeMobileMenu =()=> {
        setMobileMenu(false);
        document.body.style.overflow = 'unset';
    }

    return(
        <header>
            <div className="container-fluid">
                <div className="navigation-area">
                    <Link className="logo-link" to="/">
                        <div className="vuhu-logo">
                                <div className="logo-image">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="logo-tile">
                                    <h2 >vuhu</h2>
                                </div>
                        </div>
                    </Link>
                        <div className="navigation">
                            <ul className="desktop-menu">
                                <li><NavLink exact activeClassName="active" to="/">home</NavLink > </li>
                                <li><NavLink exact activeClassName="active" to="support">support</NavLink></li>
                                <li><Link className="button-small" to="register">14-day free trial</Link></li>
                                <li> <NavLink exact activeClassName="active" to="login">
                                        <img className="login-icon" src={loginicon} alt="login-icon" />
                                        <span>Log in</span>
                                    </NavLink></li>
                            </ul>
                            <ul className="mobile-navigation">
                                <li><Link className="button-small" to="register">14-day free trial</Link></li>
                                <li onClick={showMobileMenu}>
                                    <FontAwesomeIcon className='mobile-toggle-icon' icon={faBars} />
                                </li>
                        </ul>
                        </div>
                        <div className= {`mobile-menu ${mibileMenu? 'left0' : 'left-800'}`}>
                            <div className="menu-close-button" onClick={hiddeMobileMenu}>
                             <FontAwesomeIcon className='mobile-slider-close' icon={faTimes} />
                            </div>
                            <div className="monile-menu-link">
                                <Link onClick={hiddeMobileMenu} to="/">Home</Link>
                                <Link onClick={hiddeMobileMenu} to="support">Support</Link>
                                <Link onClick={hiddeMobileMenu} to="login">
                                    <span>Log in</span>
                                    <img className="login-icon" src={loginmobile} alt='login mobile icon'/>
                                </Link>
                            </div>
                            <div className="mobile-menu-trial-button">
                                <Link onClick={hiddeMobileMenu} className="button-small" to="register">14-day free trial</Link>
                            </div>
                        </div>
                        
                </div>
            </div>
        </header>
    )
}
export default Header;