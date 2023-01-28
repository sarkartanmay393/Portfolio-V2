const ContactCardInfo = (props) => {
  const { twitterId, emailId, linkedInId } = props;
  const LinkedinSVG = require("../assets/linkedin.svg").default;
  const MailSVG = require("../assets/mail.svg").default;
  const TwitterSVG = require("../assets/twitter.svg").default;

  return (
    <>
      <div className="row">
        <a href={`mailto:${emailId}`}>
          <img src={MailSVG} alt="mail-ref" />
          <span>@hello</span>
        </a>
      </div>
      <div className="row">
        <a href={`https://twitter.com/${twitterId}`}>
          <img src={TwitterSVG} alt="twitter-ref" />
          <span>Twitter</span>
        </a>
      </div>
      <div className="row">
        <a href={`https://linkedin.com/in/${linkedInId}`}>
          <img src={LinkedinSVG} alt="linkedin-ref" />
          <span>LinkedIn</span>
        </a>
      </div>
    </>
  );
};

export default ContactCardInfo;
