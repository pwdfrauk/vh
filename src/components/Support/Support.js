import Header from "../Header/Header";
import SupportForm from '../Form/SupportForm/SupportForm';
import './Support.css';

const Support =()=> {
    return(
        <section className="support-page-area bg-my-gradient">
            <Header />
            <div className="login-hero-area">
                <div className="container">
                    <div className="support-section">
                    <div className="support-area">
                            <h1 className="support-title color-black-3 text-center text-md-start mb-4 mb-md-2">Support</h1>
                            <p className="support-sub-title color-black-3 text-center text-md-start mb-4">Simply register an account by selecting your email </p>
                            <SupportForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Support;