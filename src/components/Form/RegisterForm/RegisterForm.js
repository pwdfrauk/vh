import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEyeSlash, faLock, } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
const eye =  <FontAwesomeIcon icon={faEyeSlash} />


const RegisterForm =()=> {
    const history = useHistory();
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [reciveCode, setReciveCode] = useState(true);
    const [noreciveCode, setNoreciveCode] = useState(false);
    const [inviteCode, setInviteCode] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const handleChange = (e) => {
        if(e.target.type === 'email') {
            setEamil(e.target.value)
        } if(e.target.type === 'password') {
            setPassword(e.target.value)
        } if(e.target.name === "couponCode") {
            setInviteCode(e.target.value)
        } if(e.target.name === 'inviteCodeYes') {
            setReciveCode(e.target.checked)
        }
    }

    const   submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password, reciveCode,inviteCode )

    }
    const   goRegisterNo =(e) => {
        if(e.target.name === 'inviteCodeNo') {
            setReciveCode(false)
         }
         setNoreciveCode(e.target.checked);
         history.push("/registernocode");
     }

     const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    return(
        <form className="col-md-9 mt-3" onSubmit={submitHandler}>
        <div className="input-group">
            <input type="Email" id="email" name="email" 
            placeholder="Email address"
            value={email} 
            onChange={handleChange} / >
         <FontAwesomeIcon className='input-icon' icon={faEnvelope} />
            
        </div>
        <div className="input-group">
            <input 
                id="password" 
                name="password"
                placeholder="Password"
                type={passwordShown ? "text" : "password"}
                value={password} onChange={handleChange} 
                />
                <FontAwesomeIcon className='input-icon' icon={faLock} />
                <i className='show-pass-icon' onClick={togglePasswordVisiblity} >{eye}</i>
        </div>
        <h2 className="invite-title color-balck-3 ">Have you received an invite?</h2>
        <div className="input-group checkbox-area col-12">
            <div className="row d-flex col-6 col-md-4 align-items-center">
                <input className="col-4 col-md-2" type="checkbox" id="invite-yes" 
                name="inviteCodeYes"
                checked={reciveCode} 
                onChange={handleChange}  />
                <label className="col-4 col-md-3" htmlFor="invite-yes">Yes</label>
                </div>
                <div className="row d-flex col-6 col-md-4 align-items-center">
                <input className="col-4 col-md-2" type="checkbox" id="invite-no"
                 name="inviteCodeNo"
                 value={noreciveCode} 
                 onChange={goRegisterNo} />
                <label className=" col-4 col-md-3" htmlFor="invite-no">No</label>
                </div>
        </div>
        <h2 className="invite-title color-balck-3 ">Your Coupon Number </h2>
        <div className="coupon-code">
            <input className="coupon-code-input" type="text" name="couponCode"
            value={inviteCode} onChange={handleChange} maxLength="4" />
            <div className="coupon-placeholder-bar">
                <span className="coupon-code-number"></span>
                <span className="coupon-code-number"></span>
                <span className="coupon-code-number"></span>
                <span className="coupon-code-number"></span>
            </div>
        </div> 
        <div className="reg-submit-button text-center text-md-start">
            <input className="button-large from-submit-button" type="submit" value="Submit" />
        </div>
    </form>
    )
}

export default RegisterForm;