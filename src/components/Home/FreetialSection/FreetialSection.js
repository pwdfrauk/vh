import { Link } from "react-router-dom";
import comment from './commenticon.png';
import adduserimg from './adduserimg.png';
import gool from './gool.png';
import './FreetialSection.css';
const FreeTialSection = () => {
    return(
        <section className="free-trial-section">
        <div className="container">
            <div className="tree-trial-info">
                <h2 className="free-trial-title text-center wow animate__animated animate__slideInLeft" data-wow-duration="2s">A free trial on an invite only scheme,
                     then just 
                     <span className="trial-title-amount color-violet">£14.99</span> per month</h2>
                <p className="free-trial-desc color-grey-2 text-center wow animate__animated animate__slideInRight" data-wow-duration="2s">We love providing this platform, 
                    and we will ensure you there will never be any price hikes during your subscription. Growing your following automatically has never been easier, using our specialist formula created over the past 5 years. </p>
                <p className="free-trial-desc color-grey-2 text-center wow animate__animated animate__slideInRight" data-wow-duration="2s">Simply connect your Instagram account, 
                    add your favourite accounts that match your demographic, and our system will do the rest! 
                    <br/><br/>
                    Leaving you to relax and enjoy as you refresh your dashboard to view your incremental growth in realtime. 
                </p>
            </div>
            <div className="free-trial-option">
                <div className="option ">
                    <div className="row justify-content-md-center ">
                        <div className="option-icon col-md-3 wow animate__animated animate__slideInLeft" data-wow-duration="2s">
                            <img src={comment} alt="coment-icon" />
                        </div>
                        <div className="option-info col-md-5 wow animate__animated animate__slideInRight" data-wow-duration="2s">
                            <h2 className="option-title">Over 10,000 users</h2>
                            <p className="option-desc color-grey-2">Join over 10,000 users, growing their followings organically.
                                 If you've received an invitation to sign up, 
                                 you can make the most of a 100% free trial.
                            </p>
                            <Link className="option-link-button color-violet" to="register">
                                Try 14-day free trial
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="free-trial-option">
                <div className="option ">
                    <div className="row justify-content-md-center">
                        <div className="option-icon col-md-3 wow animate__animated animate__slideInLeft" data-wow-duration="2s">
                            <img src={adduserimg} alt="coment-icon" />
                        </div>
                        <div className="option-info col-md-5 wow animate__animated animate__slideInRight" data-wow-duration="2s">
                            <h2 className="option-title">Organic growth only</h2>
                            <p className="option-desc color-grey-2">
                                Our platform delivers only real users, 
                                meaning your engagement improves on an ongoing basis,
                                 with no fake followers harming your accounts engagement.
                            </p>
                            <Link className="option-link-button color-violet" to="register">
                                Try 14-day free trial
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="free-trial-option">
                <div className="option ">
                    <div className="row justify-content-md-center">
                        <div className="option-icon col-md-3 wow animate__animated animate__slideInLeft" data-wow-duration="2s">
                            <img src={gool} alt="coment-icon"/>
                        </div>
                        <div className="option-info col-md-5 wow animate__animated animate__slideInRight" data-wow-duration="2s">
                            <h2 className="option-title">Completely free to try</h2>
                            <p className="option-desc color-grey-2">
                                During your 14-day free trial we will not ask for payment details. 
                                We will only ever ask for them after your trial,
                                 when you’re completely satisfied. No fixed contracts,
                                  no hassle. Cancel anytime.
                            </p>
                            <Link className="option-link-button color-violet" to="register">
                                Try 14-day free trial
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default FreeTialSection;