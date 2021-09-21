import Header from "../Header/Header";
import ForgotPasswordForm from '../Form/ForgotPasswordForm/ForgotPasswordForm';
import './ForgotPassword.css';
const ForgotPasswort = () => {
    return(
        <section className="forgot-password-page-area bg-my-gradient">
            <Header />
            <div>
            <div className="container">
                <div className="forgotpassword-section">
                   <div className="forgotpass-area">
                        <h1 className="forgotpass-title color-black-3 text-center text-md-start mb-4 mb-md-2">Forgot Password</h1>
                        <p className="forgotpass-sub-title color-black-3 text-center text-md-start mb-4">Enter your e-mail address below to reset your password</p>
                        <ForgotPasswordForm />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ForgotPasswort;