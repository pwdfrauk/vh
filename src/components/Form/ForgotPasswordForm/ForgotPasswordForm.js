import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default  class ForgotPasswort extends React.Component {
    state ={
        email:'',
    }
    handleChange = (e)=> {
        this.setState({
            email:e.traget.value, 
        })
    }
    submitHandler =(e)=> {
        e.preventDefault();
        const {email} = this.state;
        console.log(email);
    }
    render() {
        const {email} = this.state;
        const {handleChange, submitHandler} =this;
        return(
            <form onSubmit={submitHandler}>
                <div className="input-group">
                    <input type="Email" id="email" name="email" 
                    placeholder="Email address"
                    value={email} 
                    onChange={handleChange} / >
                    <FontAwesomeIcon className='input-icon' icon={faEnvelope} />
                </div>
                <div className="reg-submit-button text-center text-md-start">
                    <input className="button-large from-submit-button" type="submit" value="Send Link" />
                </div>
            </form>
        )
    }
}
