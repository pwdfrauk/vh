import mobile from './mobile.gif'
const AnimationMobile = ({hideonmobile}) => {
    return(
        <div className={`col-md-5 hero-home-img wow animate__animated animate__slideInRight ${hideonmobile}`} >
            <img className="hero-mobile-img" src={mobile} alt="mobile-img" />
        </div>
    )
}
export default AnimationMobile;