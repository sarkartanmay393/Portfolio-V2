import Image from "next/image";

import MailSVG from "../public/assets/mail.svg";
import TwitterSVG from "../public/assets/twitter.svg";
import LinkedinSVG from "../public/assets/linkedin.svg";

import webInfo from "../public/assets/WebsiteData.json";

const SocialLinks = [
  {
    username: webInfo.email,
    title: "@hello",
    src: MailSVG,
  },
  {
    username: webInfo.contacts.twitter,
    title: "Twitter",
    src: TwitterSVG,
  },
  {
    username: webInfo.contacts.linkedin,
    title: "LinkedIn",
    src: LinkedinSVG,
  },
];

function ContactCard() {
  return (
    <section className="flex flex-col pb-[12px] px-[1.8rem] md:px-[4rem] lg:px-[11rem] text-white">
      <header className="flex items-center justify-between w-[100%]">
        <h2 className="text-[2rem] font-bold">
          <span>#</span>
          contacts
        </h2>
      </header>
      <main
        className={`flex justify-between lg:justify-start lg:gap-[30%] 
      px-[8px] md:px-[1.2rem] py-[1rem] md:py-[1.2rem] `}
      >
        <section className="w-[50%]">
          <p className="text-[15px] md:text-[18px] font-[500]">
            I’m interested in any opportunities. However, if you have other
            request or question, don’t hesitate to contact me.
          </p>
        </section>
        <section
          className={`w-[40%] md:w-[24%] lg:w-[14%] h-fit flex flex-col items-center
          border-[1px] py-[6px] backdrop-blur-[4px] `}
        >
          <p className="border-b-[0.1px] text-[16px] lg:text-[18px] font-bold">
            Connect (at)
          </p>
          {SocialLinks.map((val) => (
            <SocialRow
              key={val.title + "-key"}
              username={val.username}
              title={val.title}
              src={val.src}
            />
          ))}
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
  src: string;
}): JSX.Element {
  let baseUrl = "https://www.";
  switch (title) {
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
      <div
        className={`w-fit flex justify-center py-[4px] mt-[4px] text-[12px] 
      md:text-[15px] hover:text-green hover:font-bold `}
      >
        <a className="flex gap-[8px]" href={baseUrl}>
          <Image className="h-[16px] md:h-[20px]" src={src} alt={title} />
          <span className="text-white">{title}</span>
        </a>
      </div>
    </>
  );
}

export default ContactCard;
