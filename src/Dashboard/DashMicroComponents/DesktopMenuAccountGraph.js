import { faPlusSquare, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import dashboardicon from './dashboarcon.png'
import instalogo from './desktop-menu-insta.png'
import './DesktopMenuAddAccount.css'
const DesktopMenuAccountGraph =()=> {
    return(
        <div className="dash-desktop-menu">
            <Link clasNames="dash-title color-grey-3 font-16" to="#">
                <img src={dashboardicon} alt="icon" /> Dashboard</Link>
            <p className="dash-subtitle color-grey-2 font-13 "> Accounts</p>
            <div className="desktop-menu-instalogo-text">
                <img src={instalogo} alt='insta logo' />
                <p className="font-16"> @insta_vuhu</p>
            </div>
            <p><NavLink className='desktop-graph-menu color-grey-3' to="/account-seeting-fav-aco">Favourite Accounts</NavLink></p>
            <p><NavLink className='desktop-graph-menu color-grey-3'  to="/b">Whitelist (2.1k)</NavLink></p>
            <p><NavLink className='desktop-graph-menu color-grey-3'  to="/c">Disconnect Account</NavLink></p>
            <Link className="dash-accout-link color-violet font-16" to="accountadd"> 
             <FontAwesomeIcon icon={faPlusSquare} /> Connect New Account</Link>
             <div className="desktop-menu-log-out">
                  <Link  className="color-grey-2" to="/" ><FontAwesomeIcon className="color-grey-2 me-2 font-18" icon={faPowerOff} /> Log Out</Link>
             </div>
             
        </div>
    )
}
export default DesktopMenuAccountGraph;