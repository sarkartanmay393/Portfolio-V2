import '../styles/IntroCard.css';
import { useEffect, useState } from 'react';

const HomeImage = require('../assets/home-img.svg').default;

function IntroCard({ intro_text, term_first, term_second, ps_ref, ps_status, description }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.screen.width >= 600 ? setIsMobile(false) : setIsMobile(true);
    }, []);

    return (
        <section role='banner' className='intro-card'>
            <div id='left'>
                <h3>{intro_text} <span>{term_first}</span> & <span>{term_second}</span></h3>
                <p>{description}</p>
                {isMobile ? <></> : <a href='#contact'><button>Contact Me</button></a>}
            </div>
            <div id='right'>
                <img src={HomeImage} alt='home' />
                <p>✅ Currently working on <a href={ps_ref}><span id="ps-btn">{ps_status}</span></a></p>
            </div>
        </section>
    );
}

export default IntroCard;