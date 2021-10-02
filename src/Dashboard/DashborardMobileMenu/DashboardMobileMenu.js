import  './DashboardMobileMenu.css';
import logo from './logo.png';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlusSquare, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import dashicon from './dashiconwhite.png'
import { useState } from 'react';

const DashboardMobileMenu =()=> {
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
        <header className="dashboardmobilemenu">
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
                            <ul className="mobile-navigation">
                                <li onClick={showMobileMenu}>
                                    <FontAwesomeIcon className='mobile-toggle-icon' icon={faBars} />
                                </li>
                        </ul> 
                        </div>
                        <div className= {`mobile-menu ${mibileMenu? 'left0' : 'left-800'}`}>
                            <div className="menu-close-button" onClick={hiddeMobileMenu}>
                             <FontAwesomeIcon className='mobile-slider-close' icon={faTimes} />
                            </div>
                            <div className="dashboard-mobile-menu-link">
                                <Link className="dashboar-mobile-title" onClick={hiddeMobileMenu} to="account">
                                    <img src={dashicon} alt="icon"/> Dashboard
                                </Link>
                                <p className="dash-mobile-menu-acc-title">Accounts</p>
                                <div className="mobile-dash-inner-link">
                                    <Link onClick={hiddeMobileMenu} to="support"><span className="spacer"></span> Connect New Account</Link>
                                </div>
                                <Link className="dash-mobile-add-account-link" onClick={hiddeMobileMenu} to="support">
                                    <FontAwesomeIcon icon={faPlusSquare}/> Connect New Account</Link>
                            </div>
                            <div className="mobileMenu-logout-btn">
                               <Link to="/"> <FontAwesomeIcon  icon={faPowerOff} /> Log Out </Link>
                            </div>
                        </div>
                        
                </div>
            </div>
        </header>
    )
}
export default DashboardMobileMenu;