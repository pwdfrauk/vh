import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default  class LoginForm extends React.Component {

    state= {
        email: '',
        subject: '',
        text: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {email, subject, text } =this.state;
        console.log(email, subject, text);
    }

    render() {
        const {email, subject, text } =this.state;
        const {handleChange, submitHandler} = this;
        return(
            <form onSubmit={submitHandler}>
            <div className="input-group">
                <input type="Email" id="email" name="email"
                 placeholder="Email address"
                 value={email} onChange={handleChange} />
                <FontAwesomeIcon className='input-icon' icon={faEnvelope} />
            </div>
            <div className="input-group">
                <input className="support-subject" type="text" id="subject" name="subject" 
                placeholder="What is your query about" 
                value={subject } onChange={handleChange}/>
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
