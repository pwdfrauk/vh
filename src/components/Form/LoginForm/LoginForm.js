import React, { useEffect, useState } from "react";
import './LoginForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEyeSlash, faLock, } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import axios from "axios";

const eye =  <FontAwesomeIcon icon={faEyeSlash} />

const LoginForm =()=> {
    // const history = useHistory();
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const  handleChange = (e) => {
        if(e.target.type === 'email') {
            setEamil(e.target.value)
        } if(e.target.type === 'password') {
            setPassword(e.target.value)
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const formdata = {
            email,
            password,
        }
        axios.post('https://vuhu-d57c9-default-rtdb.firebaseio.com/id1.json', formdata)
        .then((res)=>{
           console.log(res)
        })
    }
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    //  const godashboard=()=> {
    //     history.push("/account");
    //   }
      useEffect(()=>{
          console.log('component mount and update')
      })

      useEffect(()=>{
        console.log('component updated')
    }, [])
    return(
        <form onSubmit={submitHandler}>
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
            <h5 className="forgot-pass-title  mb-4 color-black ">
                <Link className="color-black" to="forgotpassword">Forgotten Password?</Link>
            </h5>
            <div className="reg-submit-button text-center text-md-start">
                <input className="button-large from-submit-button" 
                type="submit" 
                value="Login" 
                />
            </div>
        </form>
    )
}
export default LoginForm;
