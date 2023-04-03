import Image from "next/image";
import LinkedinSVG from "../public/assets/linkedin.svg";
import MailSVG from "../public/assets/mail.svg";
import TwitterSVG from "../public/assets/twitter.svg";
import { Contacts } from "../utils/types";

function ContactCard({
  contacts,
  email,
}: {
  contacts: Contacts;
  email: string;
}) {
  return (
    <section className="text-white flex flex-col px-[1rem] lg:px-[10rem] my-[1rem]">
      <header>
        <h2 className="text-[2rem]">
          <span className="text-orange">#</span>
          contacts
        </h2>
      </header>
      <main className="flex justify-eventy py-[1rem] px-[2rem]">
        <section className="w-[60%] lg:w-[88%] flex flex-col justify-start lg:justify-center text-start text-[14px]">
          <p className="text-lg my-[6px] text-[13px] font-[500] max-w-[90%] lg:max-w-[60%]">
            I’m interested in any opportunities. However, if you have other
            request or question, don’t hesitate to contact me.
          </p>
        </section>
        <section className="w-[40%] lg:w-[12%] border-[1px] flex flex-col items-center py-[8px] px-0 lg:py-[12px]">
          <p className="pb-[4px] border-b-[0.1px] mb-[8px] text-[16px] lg:text-[18px] font-[700] lg:font-[600]">
            Text me
          </p>
          {SocialRow({ username: email, title: "@hello", src: MailSVG })}
          {SocialRow({
            username: contacts.twitter,
            title: "Twitter",
            src: TwitterSVG,
          })}
          {SocialRow({
            username: contacts.linkedin,
            title: "LinkedIn",
            src: LinkedinSVG,
          })}
        </section>
      </main>
    </section>
  );
}

function SocialRow({
  username,
  title,
  src,
}: {
  username: string;
  title: string;
  src: any;
}) {
  let baseUrl = "https://www.";
  switch (title) {
    default:
      return;
    case "@hello":
      baseUrl = `mailto:${username}`;
      break;
    case "Twitter":
      baseUrl += `twitter.com/${username}`;
      break;
    case "LinkedIn":
      baseUrl += `linkedin.com/in/${username}`;
      break;
  }
  return (
    <>
      <div className="w-fit flex justify-center py-[4px] mt-[4px] text-[12px] hover:text-green hover:font-bold">
        <a className="flex" href={baseUrl}>
          <Image className="h-[16px]" src={src} alt="social-handles" />
          <span className="text-white ml-[8px]">{title}</span>
        </a>
      </div>
    </>
  );
}

export default ContactCard;
