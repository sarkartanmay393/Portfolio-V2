import '../styles/AboutPage.css';
import FunfactSection from '../components/FunFactCard';

const aboutImage = require('../assets/tanmay-image.png');

function AboutPage({ intro, p1, p2, p3, funfacts, funfact_highlights }) {
    return (
        <section className='about-page'>
            <header>
                <a href='/about'><h1 id='page-header-text'><span id='page-slash-text'>/</span>about-me</h1></a>
            </header>
            <main>
                <section className='about-whoami-section'>
                    <section className='about-description'>
                        <h3>Who am I?</h3>
                        <p id='desc-intro'>{intro}</p>
                        <p id='desc-text'>{p1}</p>
                        <p id='desc-text'>{p2}</p>
                        <p id='desc-text'>{p3}</p>
                    </section>
                    <div id='about-image-div'>
                        <img id='about-image' src={aboutImage} alt='tanmay-profile' />
                    </div>
                </section>

                <FunfactSection funfacts={funfacts} funfact_highlights={funfact_highlights} />
            </main>
        </section>
    );

}

export default AboutPage;





