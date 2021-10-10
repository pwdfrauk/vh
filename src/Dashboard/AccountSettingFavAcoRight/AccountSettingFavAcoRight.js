import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AccountSettingFavAcoRight.css'
import instaimg from './insta.png'
import growimg from './graphincrease.png'
const AccountSettingFavAcoRight=()=> {
    return(
        <div className="account-setting-fav-aco-right-area">
        <div className="account-setting-fav-aco-area col-md-12 col-xl-12">
            <div className="row mb-4">
                <div className="grow-info col-md-7 col-xl-6 d-flex align-items-center">
                    <h4 className="fav-aco-title font-24" >Your favourite accounts</h4>
                </div>
                <div className="check-grow-info col-md-5 col-xl-4 ">
                    <select className="grow-between-select" name="grow-between" id="grow-between">
                        <option value="last-28days">Last 28 days</option>
                        <option value="last-15days">Last 15 days</option>
                        <option value="last-7days">Last 7 days</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="account-and-follower-card-are col-12">
            <div className="row account-and-follower-card my-3" >
                <div className="col-8 col-md-12 col-xl-6 px-0 px-md-2 mb-md-4 mb-xl-0">
                    <div className="alert-box col-12 ">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="col-10 px-0 px-md-2">
                                <div className="row">
                                    <div className="col-3 col-md-4 px-0 px-md-2">
                                        <img className="alert-imag alert-fav-aco-img" src={instaimg} alt="insta" />
                                    </div>
                                    <div className="col-9 col-md-8 d-flex flex-column justify-content-center px-0 px-md-2  ">
                                        <h3 className="alert-title font-16">cristiano</h3>
                                        <p className="alert-sub-title font-14 mb-0">328m followers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 col-md-2 px-0 px-md-2 d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon className="close-alert" icon={faTimes} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-12 col-xl-5">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="system-incress-icon-area d-md-flex justify-content-center align-items-center">
                                <img className="graph-increase-img" src={growimg} alt="incress-img" />
                            </div>
                        </div>
                        <div className=" col-12 col-md-7 d-md-flex flex-column  justify-content-center" >
                            <div className="gained-info">
                                <p className="gained-title color-black-3 font-18 mb-0">148 followers</p>
                                <span className="gained">Gained</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="color-violet"> Add your favourite accounts (4/5)</p>
        <div>
            <form className="account-add-form mt-4 col-md-9 col-xl-5" >
                <div className="input-group">
                    <input type="text" id="username" 
                    name="username" 
                    placeholder="IG Username" />
                    <i className="input-icon fas fa-user"></i>
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
    )
}
export default AccountSettingFavAcoRight;