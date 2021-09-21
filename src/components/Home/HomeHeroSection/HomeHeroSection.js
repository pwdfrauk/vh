import './HomeHeroSection.css';
import Header from '../../Header/Header'
import HeroArea from '../HeroArea/HeroArea'

const HomeHeroSection =()=> {
    return(
        <section className="vuhu-homehero-section bg-my-gradient">
            <Header />
            <HeroArea />
        </section>
    )
}
export default HomeHeroSection;