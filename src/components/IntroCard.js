import './IntroCard.css';
import { useEffect, useState } from 'react';

const HomeImage = require('../assets/home-img.svg').default;

function IntroCard() {
    const [isMobile, setIsMobile] = useState(false);
    const psLink = `https://github.com/sarkartanmay393/Portfolio-V2`;

    useEffect(() => {
        window.screen.width >= 600 ? setIsMobile(false) : setIsMobile(true);
    }, []);

    return (
        <section role='banner' className='intro-card'>
            <div id='left'>
                <h3>Tanmay is a <span>web designer</span> and <span>front-end developer</span></h3>
                <p>He crafts ts responsive websites where technologie ts responsive websites where technologie ts responsive websites where technologie ts responsive websites where technologie responsive websites where technologies meet creativity</p>
                {isMobile ? <></> : <a href='#contact'><button>Contact Me</button></a>}
            </div>
            <div id='right'>
                <img src={HomeImage} alt='home' />
                <p>✅ Currently working on <a href={psLink}><span id="ps-btn">Portfolio</span></a></p>
            </div>
        </section>
    );
}

export default IntroCard;