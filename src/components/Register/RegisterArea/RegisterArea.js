import RegisterForm from '../../Form/RegisterForm/RegisterForm';
import AnimationMobile from '../../Home/HeroArea/AnimationMobile/AnimationMobile';
import './RegisterArea.css';

const RegisterArea = ()=> {
    return(
        <div className="register-hero-area">
        <div className="container">
            <div className="row">
                <div className="col-md-7 hero-info">
                    <h2 className="reg-title color-black-3 text-center text-md-start mb-4 mb-md-3">
                        Register now for your free trial
                    </h2>
                    <p className="reg-desc color-black-3 text-center text-md-start mb-2">Simply register an account by selecting your 
                        email address and password below,
                         making sure to add your invitation code to gain access too.</p>
                         {/* <a className="terms-button-show color-violet" href="javascript:void(0)">By registering you agree to our terms of service.</a> */}
                    <RegisterForm />
                  
                </div>
               <AnimationMobile hideonmobile={'d-none d-md-block'}/>
            </div>
        </div>
    </div>
    )
}
export default RegisterArea;