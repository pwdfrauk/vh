import RegisterNoCodeArea from "./RegisterNoCedeArea/RegisterNoCodeArea";
import Header from "../Header/Header";
import './RegisterNoCode.css'

const RegisterNoCode =()=> {
    return(
        <section className="register-page-hero-section bg-my-gradient">
            <Header />
            <RegisterNoCodeArea />
        </section>
    )
}
export default RegisterNoCode;