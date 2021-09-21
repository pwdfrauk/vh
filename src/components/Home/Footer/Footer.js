import { Link } from "react-router-dom";
import footerimg from './footer-logo.png';
import './Footer.css';
const Footer =()=> {
    return(
        <footer className="bg-grey-2">
        <div className="container">
            <div className="row footer-info">
                <div className="col-sm-8 col-md-10 wow animate__animated animate__slideInLeft" data-wow-duration="2s">
                    <div className="row footer-logo-area">
                        <div className="col-3 col-md-2 col-xl-1 footer-logo">
                            <img  src={footerimg} alt="logo" />
                        </div>
                        <div className="col-3 col-md-2 footer-logo-title">
                            <h2>vuhu</h2>
                        </div>
                    </div>
                    <p className="footer-desc">We love sharing our automated Instagram growth platform with you, 
                        we hope you enjoy it too.
                        </p>
                    <p className="footer-desc"> For anything you might need, please contact support here.</p>
                    <p className="footer-desc"> Or contact us on directly on support@vuhu.io </p>
                </div>
                <div className="col-sm-4 col-md-2 footer-nav wow animate__animated animate__slideInRight" data-wow-duration="2s">
                    <h5>Useful Links:</h5>
                        <Link to="/">Home </Link>
                        <Link to="register">Free trial</Link>
                        <Link to="/">Affiliate</Link>
                        <Link to="support">Support</Link>
                        <Link to="login">Log in </Link>
                        <Link to="/">Updates</Link>
                </div>
            </div>
            <div className="copyright-text">
                <p className="text-center">Copyright &copy; 2021 vuhu. All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}
export default Footer;