import { LineMdSunnyFilledLoopToMoonAltFilledLoopTransition } from '../icons/MoonIcon';
import "../style/_AboutPage.scss";


const MenuPage: React.FC = () => {
    return (

        <div className="about-container">    
            <div className='astronaut-image'>
                <h1> Awaken your inner astronaut – Culinary adventures that take you to the stars and back.</h1>
            </div>      
                <div className="about-wrapper">
                    <h1> Lunar Delights <LineMdSunnyFilledLoopToMoonAltFilledLoopTransition /> </h1><br/>
                    <h2> Our Story</h2><br/>
                    <br/><br/>
                    <p>From a dream to reality, Lunar Delights was born out of 
                    a passion for exploring the unknown. Founded by a group 
                    of developers, our goal was to create a
                    place where food and space meet. Every corner of 
                    Lunar Delights is designed to celebrate humanity's 
                    quest for knowledge and pleasure, while honoring the 
                    mysterious beauty of our solar system.</p><br/>
                    <h1> Sustainability and Ingredient Sourcing</h1><br/>
                    <br/><br/>
                    <p>At Lunar Delights, we are dedicated to sustainability 
                    and innovation. Our dishes are prepared with ingredients 
                    grown in our own hydroponic gardens, ensuring freshness 
                    and reducing our environmental impact. 
                    We also collaborate with local moon producers to ensure 
                    we support our local ecosystem.</p>
                    <h1> Customer Reviews and Awards</h1><br/><br/>
                    <br/><br/>
                    <p> With pride, Lunar Delights has received several interstellar 
                    awards for our outstanding dining experience. The joy and 
                    satisfaction of our guests shine brighter than the most 
                    distant stars, and their positive reviews are proof of our 
                    commitment to excellence.</p><br/>                  
                </div>
            <div className="background-moon"> </div>
        </div>                                 
    );

};

export default MenuPage;