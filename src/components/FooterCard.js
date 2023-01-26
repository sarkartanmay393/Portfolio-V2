import './FooterCard.css';

const KakashiSVG = require('../assets/kakashi.svg').default;
const GithubSVG = require('../assets/github.svg').default;
const TwitterSVG = require('../assets/twitter.svg').default;
const LinkedinSVG = require('../assets/linkedin.svg').default;

function FooterCard() {
    const openUrl = (url) => {
        window.open(url, "_blank");
    }

    return (
        <>
        <section id='footer-section'>
            <div id='first'>
                <div className='left'>
                    <h2 href='#home'><img src={KakashiSVG} alt='kakashi-face' />Tanmay</h2>
                    <a href='mailto:hello@tanmaysarkar.tech'><p id='footer-email'>hello@tanmaysarkar.tech</p></a>
                </div>
                <p id='footer-desc'>Web designer websites where technologie ts responsive websites where technologie ts responsive websites where technologie ts responsive websites where technologie responsive websites where technologies meet creativity and front-end developer based in Ukraine</p>
            </div>
            <div id='second'>
                <h2>Socials</h2>
                <div className='right'>
                    <a href='https://github.com/sarkartanmay393'><img src={GithubSVG} alt='github-ref' /></a>
                    <a href='https://twitter.com/sarkartanmay393'><img src={TwitterSVG} alt='twitter-ref' /></a>
                    <a href='https://linkedin.com/in/tanmaysrkr'><img src={LinkedinSVG} alt='linkedin-ref' /></a>
                </div>
            </div>
        </section>
        </>
    );

}

export default FooterCard;