import instaimag from './insta.png';
import './AccountAddFavRight.css';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

const AccountAddFav = ()=> {
    const [IGuser, setIguser] = useState('');

    const handleChange=(e)=> {
        if(e.target.type === 'text') {
            setIguser(e.target.value)
        }
    }
    const  submitConnectForm=(e)=> {
        e.preventDefault()
        console.log(IGuser)
    }
    return(
        <div className="col-12 col-md-12" >
        <div className="account-rightside">
            <div className="account-add-fav-area col-md-11 col-lg-10 ">
                <div className="row mb-5">
                    <div className="col-4 col-md-3 me-md-4 me-xl-0">
                        <img className="fav-image" src={instaimag} alt="insta-img" />
                    </div>
                    <div className="col-8 col-md-8 d-flex justify-content-start align-items-center">
                        <div>
                        <h2 className="fav-title">@insta_vuhu</h2>
                        <p className="fab-sub-title color-violet">14 days free trial</p>
                        {/* <Link className="fab-sub-title color-violet" to="register">14 days free trial</Link> */}
                        </div>
                    </div>
                </div>
                <h4 className="font-24 color-black-3 mb-3">Add your favourite IG followers</h4>
                <p className="font-18 color-black-3 col-12">To get started, we ask you to connect at 
                least 3 of your 'favourite accounts', your favourite accounts should be those who are a similar demographic and match to your profile. If you post content related to bands, then those interested
                    in music are more likely to follow and engage with you! </p>                               
                <div className="alert-box col-md-11 col-xl-5 mt-5">
                    <div className="row">
                        <div className="col-10 col-md-10">
                            <div className="row">
                                <div className="col-3">
                                    <img className="alert-imag" src={instaimag} alt="insta" />
                                </div>
                                <div className="col-9 d-flex flex-column justify-content-center  ">
                                    <h3 className="alert-title font-16">cristiano</h3>
                                    <p className="alert-sub-title font-14 mb-0">328m followers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 col-md-2 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon className="close-alert" icon={faTimes} />
                        </div>
                    </div>
                </div>
                <form className="account-add-form mt-4 col-md-9 col-xl-5" onSubmit={submitConnectForm}>
                    <div className="input-group">
                        <input type="text" 
                        id="username" 
                        name="username" 
                        value={IGuser}
                        onChange={handleChange}
                        placeholder="IG Username" />
                        <FontAwesomeIcon className="input-icon" icon={faUser} />
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
export default AccountAddFav;