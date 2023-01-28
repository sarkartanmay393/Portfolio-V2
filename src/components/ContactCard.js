import "./ContactCard.css";
import ContactCardInfo from "./ContactCardInfo";

function ContactSection() {
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
          <section id="contact-links-board">
            <p>Message me</p>
            <ContactCardInfo
              twitterId="sarkartanmay393"
              emailId="hello@tanmaysarkar.tech"
              linkedInId="tanmaysrkr"
            />
          </section>
        </section>
      </main>
    </section>
  );
}

export default ContactSection;
