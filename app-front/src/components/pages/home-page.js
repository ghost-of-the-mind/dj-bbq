
import AboutSection from '../jsx/about-section.js';
import VideoSection from '../jsx/intro-video-section.js';
import RecipeSection from '../jsx/recipe-section.js';

const MainPage = () => {
    return ( 
        <section>
            <AboutSection />
            
            <VideoSection />

            <RecipeSection />
        </section>
    )
};

export default MainPage;