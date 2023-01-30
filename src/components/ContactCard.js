import "./ContactCard.css";

const LinkedinSVG = require("../assets/linkedin.svg").default;
const MailSVG = require("../assets/mail.svg").default;
const TwitterSVG = require("../assets/twitter.svg").default;

function ContactSection({ contacts, email }) {
  return (
    <section id="contact">
      <header>
        <h2>
          <span id="hash">#</span>contacts
        </h2>
      </header>
      <main>
        <section className="contact-description">
          <p id="desc-text">
            I’m interested in any opportunities. However, if you have other
            request or question, don’t hesitate to contact me.
          </p>
        </section>
        <section className="contact-links">
          <p id='msg-me-p'>Text me</p>
          {SocialRow({ username: email, title: '@hello', src: MailSVG })}
          {SocialRow({ username: contacts.twitter, title: 'Twitter', src: TwitterSVG })}
          {SocialRow({ username: contacts.linkedin, title: 'LinkedIn', src: LinkedinSVG })}
        </section>
      </main>
    </section>
  );
}

function SocialRow({ username, title, src }) {
  return (
    <>
      <div className="row">
        <a href={`https://twitter.com/${username}`}>
          <img src={src} alt="social-handles" />
          <span>{title}</span>
        </a>
      </div>
    </>
  );
}

export default ContactSection;
