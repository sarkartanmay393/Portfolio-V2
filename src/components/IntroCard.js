import './IntroCard.css';

const HomeImage = require('../assets/home-img.svg').default;

function IntroCard() {
    return (
        <section role='banner'>
            <div id='left'>
                <h3>Tanmay is a <span>web designer</span> and <span>front-end developer</span></h3>
                <p>He crafts responsive websites where technologies meet creativity</p>
                <button>Contact Me</button>
            </div>
            <div id='right'>
                <img src={HomeImage} alt='home-image' />
                <p>✅ Currently working on <span>Portfolio</span></p>
            </div>
        </section>
    );
}

export default IntroCard;