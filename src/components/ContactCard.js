import './ContactCard.css';

function ContactSection() {
    const MailSVG = require('../assets/mail.svg').default;
    const TwitterSVG = require('../assets/twitter.svg').default;
    const LinkedinSVG = require('../assets/linkedin.svg').default;
    return (
        <section id='contact'>
            <header>
                <h2><span id='hash'>#</span>contacts</h2>
            </header>
            <main>
                <section className='contact-description'>
                    <p id='desc-text'>I’m interested in any
                        opportunities. However, if you have other request
                        or question, don’t hesitate to contact me.
                    </p>
                </section>
                <section className='contact-links'>
                    <section id='contact-links-board'>
                        <p>Message me</p>
                        <div className='row'>
                            <a href='mailto:hello@tanmaysarkar.tech'>
                                <img src={MailSVG} alt='mail-ref' />
                            </a>
                            <a href='mailto:hello@tanmaysarkar.tech'>
                                <span>@hello</span>
                            </a>
                        </div>
                        <div className='row'>
                            <a href='https://twitter.com/sarkartanmay393'>
                                <img src={TwitterSVG} alt='twitter-ref' />
                            </a>
                            <a href='https://twitter.com/sarkartanmay393'>
                                <span>Twitter</span>
                            </a>
                        </div>
                        <div className='row'>
                            <a href='https://linkedin.com/in/tanmaysrkr'>
                                <img src={LinkedinSVG} alt='linkedin-ref' />
                            </a>
                            <a href='https://linkedin.com/in/tanmaysrkr'>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </section>
                </section>
            </main>
        </section>
    );

}

export default ContactSection;