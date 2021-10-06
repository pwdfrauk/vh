import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import usericon from './usericon.png'
import './AddAccountCard.css'

const AddAccountCard = ()=> {
    return(
        <div className="dash-add-accout-card">
            <div className="dash-add-account-icon">
                <img src={usericon} alt="user-icon" />
            </div>
            <div className="dash-add-accout-card-info">
                <h3>Let's get your account set up!</h3>
                <p className="color-grey-2">The first step is to connect your Instagram account and get your account set up on the dashboard.</p>
                <Link className="color-violet font-16" to="accountadd"><FontAwesomeIcon icon={faPlusSquare} /> Connect New Account</Link>
            </div>
        </div>
    )
}
export default AddAccountCard;