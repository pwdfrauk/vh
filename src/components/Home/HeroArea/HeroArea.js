import './HeroArea.css'
import HeroLeft from './HeroSectionLeft/HeroLeft'
import AnimationMobile from './AnimationMobile/AnimationMobile'
const HeroSection = ()=> {
    return(
        <div className="home-hero-area">
        <div className="container">
            <div className="row">
               <HeroLeft hideonmobile={''}/>
               <AnimationMobile />
            </div>
        </div>
    </div>
    )
}
export default HeroSection;