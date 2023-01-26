import './IntroCard.css';

const HomeImage = require('../assets/home-img.svg').default;

function IntroCard() {

    const psLink = `https://github.com/sarkartanmay393/Portofolio-V2`;
    const psButton = () => {
        let text = document.getElementById('ps-btn').innerText;
        let permission = window.confirm(`Learn more about ${text}`);

        if (permission) {
            window.open(psLink, '_blank');
        }
    };

    return (
        <section role='banner' className='intro-card'>
            <div id='left'>
                <h3>Tanmay is a <span>web designer</span> and <span>front-end developer</span></h3>
                <p>He crafts ts responsive websites where technologie ts responsive websites where technologie ts responsive websites where technologie ts responsive websites where technologie responsive websites where technologies meet creativity</p>
                <button>Contact Me</button>
            </div>
            <div id='right'>
                <img src={HomeImage} alt='home-image' />
                <p>✅ Currently working on <span id="ps-btn" onClick={psButton}>Portfolio</span></p>
            </div>
        </section>
    );
}

export default IntroCard;