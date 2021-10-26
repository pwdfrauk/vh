import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons'
import './SupportForm.css'

export default  class LoginForm extends React.Component {

    state= {
        email: '',
        registerType: '',
        text: '',
    }

    handleChange = (e) => {
        if(e.target.type === 'email') {
            this.setState({
                email:e.target.value,
            })
        } else if(e.target.type === 'select-one') {
            this.setState({
                registerType:e.target.value,
            })
        } else if(e.target.type === "textarea") {
            this.setState({
                text:e.target.value,
            })
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {email, registerType, text } =this.state;
        console.log(email, registerType, text);
    }

    render() {
        const {email, registerType, text } =this.state;
        const {handleChange, submitHandler} = this;
        return(
            <form onSubmit={submitHandler}>
            <div className="input-group">
                <input type="email" id="email" name="email"
                 placeholder="Email address"
                 value={email} onChange={handleChange} />
                <FontAwesomeIcon className='input-icon' icon={faEnvelope} />
            </div>
            <div className="input-group"> 
            <select value={registerType} onChange={handleChange}>
                  <option value="" disabled selected>Select register type</option>
                   <option>Membership</option>
                   <option>Subscription</option>
                   <option>Free-trial</option>    
            </select>
            <FontAwesomeIcon className='input-icon' icon={faUsers} />
            </div>
            <div className="input-group">
              <textarea className="text-area" name="text" type="textarea" id="" cols="50" rows="5" 
              placeholder="Write here"
              value={text}
              onChange={handleChange}></textarea>
            </div>
            <div className="reg-submit-button text-center text-md-start">
                <input className="button-large from-submit-button" type="submit" value="Submit" />
            </div>
        </form>
        )
    }
}
