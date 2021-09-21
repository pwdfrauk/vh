import Header from "../Header/Header";
import LoginForm from "../Form/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import './Login.css';

const Login =()=> {
    return(
        <section className="login-page-area bg-my-gradient">
            <Header />
            <div className="login-hero-area">
            <div className="container">
                <div className="login-section" >
                   <div className="log-in-area">
                        <h1 className="log-in-title color-black-3 text-center text-md-start mb-4 mb-md-2">Welcome to vuhu</h1>
                        <p className="login-sub-title color-black-3 text-center text-md-start mb-4">Please login below to reach your dashboard</p>
                        <LoginForm />
                        <div className="are-you-user mt-4 mb-4">
                            <span className="asking-user pe-2">Are you a new user?</span>
                            <Link className="free-trial-link color-violet" to="register">Register for your free trial here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
} 
export default Login;