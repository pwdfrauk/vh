import { faEyeSlash, faGlobe, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./AccountAddForm.css" 

const AccountAddForm = ()=> {
    const history = useHistory();
    const [IGuserName, setIGuserName] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [location, setLocation] = useState('');

    const handleChange =(e)=> {
        if(e.target.type === 'text') {
            setIGuserName(e.target.value)
        } if (e.target.type === 'password') {
            setUserpassword(e.target.value)
        } if(e.target.type === "select-one") {
            setLocation(e.target.value)
        }
    }

    const submitAddccountForm=(e)=> {
        e.preventDefault()
        console.log(IGuserName, userpassword, location);
        history.push("/account-add-fav");

    }

    return (
        <div className="col-md-12" >
        <div className="account-rightside">
            <div className="account-setting-card account-add-card col-md-10 col-xl-6">
                <h4 className="colo-black-3 mb-4 mb-md-4 text-center text-md-start">Connect your IG account securely</h4>
                <form className="account-add-form" onSubmit={submitAddccountForm} >
                    <div className="input-group">
                        <input type="text" 
                        id="username" 
                        name="username" 
                        value={IGuserName}
                        onChange={handleChange}
                        placeholder="IG Username" />
                        <FontAwesomeIcon className='input-icon' icon={faUser} />
                    </div>
                    <div className="input-group">
                        <input className="add-account-pass" 
                        type="password" 
                        id="password" 
                        name="pass" 
                        value={userpassword}
                        onChange={handleChange}
                        placeholder="Confirm New Password" />
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <FontAwesomeIcon icon={faEyeSlash} className="show-pass-icon" />
                    </div>
                    <p className="status  text-start">Warning status</p>
                    <h6 className="color-black-3 my-4 text-start">Where are you located?</h6>
                    <div className="input-group">
                        <FontAwesomeIcon className='input-icon' icon={faGlobe} />
                        <select name="location" id="location"
                        value={location}
                        onChange={handleChange} >
                            <option value="uk">UK (United Kingdom)</option>
                            <option value="us">US (United States of America)</option>
                        </select>
                    </div>
                    <div className="reg-submit-button text-center text-md-start mt-3 mt-md-5">
                        <input className="button-large from-submit-button" 
                        type="submit" 
                        value="Connect" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default AccountAddForm;