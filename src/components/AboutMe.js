import './AboutMe.css';

function AboutSection() {

    return (
        <section id='about'>
            <header>
                <h2><span id='hash'>#</span>about-me</h2>
            </header>
            <main>
                <section className='about-description'>
                    <p id='desc-intro'>Hello, i’m Elias!</p>
                    <p id='desc-text'>I’m a self-taught front-end developer
                        based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web
                        experiences.
                    </p>
                    <p id='desc-text'>Transforming my creativity and knowledge into
                        a websites has been my passion for over a year. I have been
                        helping various clients to establish their presence online. I
                        always strive to learn about the newest technologies and
                        frameworks.
                    </p>
                    <p id='desc-text'>Transforming my creativity and knowledge into
                        a websites has been my passion for over a year. I have been
                        helping various clients to establish their presence online. I
                        always strive to learn about the newest technologies and
                        frameworks.
                    </p>
                    <a href='#about-me'><button>Read More</button></a>
                </section>
                <section className='white-space'></section>
            </main>
        </section>
    );

}

export default AboutSection;