import React from 'react';
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import FreeTialSection from "./FreetialSection/FreetialSection";
import Footer from "./Footer/Footer";
import FaqSection from "./FaqSection/FaqSection";
import './Home.css';
import WOW from 'wowjs'

class Home extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
      
    }
    render() {
        return(
            <div>
                <HomeHeroSection />
                <FreeTialSection />
                <FaqSection />
                <Footer />
            </div>
        ) 
    }
}
export default Home;