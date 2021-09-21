
import { Link } from "react-router-dom";
const HeroLeft =() => {
    return(
        <div className="col-md-7 hero-info wow animate__animated animate__slideInLeft" data-wow-duration="2s">
            <h1 className="home-hero-title color-black-3">Grow your <span className="gradient-text">Instagram</span> <br/>
                following organically, using <br/>
                our automated platform
            </h1>
            <p className="home-hero-desc color-black-3">Simply let us know the demographic of followers you would like, 
                and we'll show you how we can grow your audience by a minimum of 500-1,000 real followers per month.</p>
            <p className="home-hero-desc color-black-3">In fact, we're so confident you'll
                sign up after your trial, that we only ask for payment details AFTER your trial. 
                Register today for a 100% free trial.</p>
            <div className="hero-button">
            <Link className="button-large home-hero-button" to="register">14-days free trial</Link>
            </div>
            <p className="home-hero-desc">*we will only ever ask for your payment details AFTER your trial has finished.</p>
        </div>
    )
}
export default HeroLeft;