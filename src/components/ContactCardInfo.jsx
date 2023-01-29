const ContactCardInfo = ({ contacts, email }) => {
  const LinkedinSVG = require("../assets/linkedin.svg").default;
  const MailSVG = require("../assets/mail.svg").default;
  const TwitterSVG = require("../assets/twitter.svg").default;

  return (
    <>
      <div className="row">
        <a href={`mailto:${email}`}>
          <img src={MailSVG} alt="mail-ref" />
          <span>@hello</span>
        </a>
      </div>
      <div className="row">
        <a href={`https://twitter.com/${contacts.twitter}`}>
          <img src={TwitterSVG} alt="twitter-ref" />
          <span>Twitter</span>
        </a>
      </div>
      <div className="row">
        <a href={`https://linkedin.com/in/${contacts.linkedin}`}>
          <img src={LinkedinSVG} alt="linkedin-ref" />
          <span>LinkedIn</span>
        </a>
      </div>
    </>
  );
};

export default ContactCardInfo;
