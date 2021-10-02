import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import dashboardicon from './dashboarcon.png'
import './DesktopMenuAddAccount.css'
const DesktopMenuAddAccount =()=> {
    return(
        <div className="dash-desktop-menu">
            <Link clasNames="dash-title color-grey-3 font-16" to="#">
                <img src={dashboardicon} alt="icon" /> Dashboard</Link>
            <p className="dash-subtitle color-grey-2 font-13 "> Accounts</p>
            <Link className="dash-accout-link color-violet font-16" to="#"> 
             <FontAwesomeIcon icon={faPlusSquare} /> Connect New Account</Link>
        </div>
    )
}
export default DesktopMenuAddAccount;