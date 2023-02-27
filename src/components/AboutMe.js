import '../styles/AboutMe.css';

function AboutSection({ intro, p1, p2, p3 }) {

    return (
        <section id='about'>
            <header>
                <h2><span id='hash'>#</span>about-me</h2>
            </header>
            <main>
                <section className='about-description'>
                    <p id='desc-intro'>{intro}</p>
                    <p id='desc-text'>{p1}</p>
                    <p id='desc-text'>{p2}</p>
                    <p id='desc-text'>{p3}</p>
                    <a id='read-more-button' href='/about'><button>Read More</button></a>
                </section>
                <section className='white-space'></section>
            </main>
        </section>
    );

}

export default AboutSection;