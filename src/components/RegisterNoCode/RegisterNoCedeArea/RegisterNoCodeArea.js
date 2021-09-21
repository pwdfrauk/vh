import RegisterNoForm from '../../Form/RegisterNoForm/RegisterNoForm'
import AnimationMobile from '../../Home/HeroArea/AnimationMobile/AnimationMobile';
import './RegisterNoCodeArea.css'
const RegisterNoCodeArea =()=> {
    return(
        <div className="register-hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 hero-info">
                        <h2 className="reg-title color-black-3 text-center text-md-start mb-4 mb-md-3">
                            Register now for your free trial
                        </h2>
                        <p className="reg-desc color-black-3 text-center text-md-start mb-4">Simply register an account by selecting your 
                            email address and password below,
                            making sure to add your invitation code to gain access too.</p>
                    <RegisterNoForm />
                    </div>
                    <AnimationMobile hideonmobile={'d-none d-md-block'} />
                </div>
            </div>
        </div>
    )
}
export default RegisterNoCodeArea;