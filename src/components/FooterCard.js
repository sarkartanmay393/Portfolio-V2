import './FooterCard.css';

const KakashiSVG = require('../assets/kakashi.svg').default;
const GithubSVG = require('../assets/github.svg').default;
const TwitterSVG = require('../assets/twitter.svg').default;
const LinkedinSVG = require('../assets/linkedin.svg').default;

function FooterCard() {
    return (
        <section id='footer-section'>
            <div id='first'>
                <div className='row'>
                    <h2 href='#home'><img src={KakashiSVG} alt='kakashi-face' />Tanmay</h2>
                    <p>hello@tanmaysarkar.tech</p>
                </div>
                <p>Web designer and front-end developer based in Ukraine</p>
            </div>
            <div id='second'>
                <h2>Socials</h2>
                <div className='row'>
                    <img src={GithubSVG} alt='github-ref' />
                    <img src={TwitterSVG} alt='twitter-ref' />
                    <img src={LinkedinSVG} alt='linkedin-ref' />
                </div>
            </div>
            <p>© Copyright 2022. Made by Elias</p>
        </section>
    );

}

export default FooterCard;