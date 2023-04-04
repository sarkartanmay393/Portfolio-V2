import Image from "next/image";

import GithubSVG from "../public/assets/github.svg";
import TwitterSVG from "../public/assets/twitter.svg";
import LinkedinSVG from "../public/assets/linkedin.svg";

export default function Socials() {
  return (
    <section className="hidden lg:inline-flex flex-col items-center space-y-1 py-[1rem] px-[2rem] h-fit w-fit fixed top-[8%]">
      <hr className="h-[160px] p-0 text-white border-0 border-r-[2px] opacity-[50%]" />
      <a
        href={socialLinks("github", "sarkartanmay393")}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          className="h-[24px] mt-[8px] hover:p-[1px]"
          src={GithubSVG}
          alt="github-ref"
        />
      </a>
      <a
        href={socialLinks("twitter", "sarkartanmay393")}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          className="h-[24px] mt-[8px] hover:p-[1px]"
          src={TwitterSVG}
          alt="twitter-ref"
        />
      </a>
      <a
        href={socialLinks("linkedin", "in/tanmaysrkr")}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          className="h-[24px] mt-[8px] hover:p-[1px]"
          src={LinkedinSVG}
          alt="linkedin-ref"
        />
      </a>
    </section>
  );
}

const socialLinks = (domain: string, handle: string): string => {
  let baseUrl = "https://www.";
  switch (domain) {
    default: {
      return "";
    }
    case "github": {
      baseUrl += "github.com/";
      break;
    }
    case "linkedin": {
      baseUrl += "linkedin.com/";
      break;
    }
    case "twitter": {
      baseUrl += "twitter.com/";
      break;
    }
  }
  return baseUrl + handle;
};
