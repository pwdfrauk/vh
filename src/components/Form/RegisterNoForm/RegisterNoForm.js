import {useState} from 'react'
import { useHistory } from 'react-router';

const RegisterNoForm =()=> {
    const history = useHistory()
    const [email, setEamil]=useState('');
    const [reciveCode, setReciveCode]=useState(false);
    const [norecivedCode, setNoreciveCode]=useState(true);

    const  handleChange = (e) => {
        if(e.target.type === 'email') {
            setEamil(e.target.value);
        } if(e.target.name === 'inviteCodeNo') {
            setReciveCode(e.target.value);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, norecivedCode)

    }
    const  goRegisterYes =(e) => {
        if(e.target.name === 'inviteCodeYes') {
            setNoreciveCode(false)
        }
        history.push('/register')
        
    }
    return(
        <form className="col-md-9" onSubmit={submitHandler}>
            <div className="input-group">
                <input type="Email" id="email" name="email" 
                placeholder="Email address"
                value={email} 
                onChange={handleChange} />
                <i className="input-icon fas fa-envelope"></i>
                
            </div>
            <h2 className="invite-title color-balck-3 ">Have you received an invite?</h2>
            <div className="input-group checkbox-area col-12">
                <div className="row d-flex col-6 col-md-4 align-items-center">
                    <input className="col-4 col-md-2" type="checkbox" id="invite-yes" 
                    name="inviteCodeYes"
                    value={reciveCode} 
                    onChange={goRegisterYes}
                           />
                    <label className="col-4 col-md-3" htmlFor="invite-yes">Yes</label>
                  </div>
                  <div className="row d-flex col-6 col-md-4 align-items-center">
                    <input className="col-4 col-md-2" type="checkbox" id="invite-no" 
                    name="inviteCodeNo" 
                    checked={norecivedCode} 
                    value= {norecivedCode}
                    onChange={handleChange}
                    />
                    <label className=" col-4 col-md-3" htmlFor="invite-no">No</label>
                  </div>
            </div>
            <h2 className="invite-title color-balck-3 ">Sorry, registration is currently invitation only
            </h2>
            <p>However you can join our waiting list by submitting your email address, invitations are sent on a first come first served basis.</p>
            <div className="reg-submit-button text-center text-md-start">
                <input className="button-large from-submit-button" type="submit" value="Submit" />
            </div>
        </form>
    )
}
export default RegisterNoForm;