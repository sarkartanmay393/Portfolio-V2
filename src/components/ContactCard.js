import "./ContactCard.css";
import ContactCardInfo from "./ContactCardInfo";

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
          <section id="contact-links-board">
            <p id='msg-me-p'>Text me</p>
            <ContactCardInfo contacts={contacts} email={email} />
          </section>
        </section>
      </main>
    </section>
  );
}

export default ContactSection;
