import Image from "next/image";
import Link from "next/link";

import KakashiSVG from "../public/assets/kakashi.svg";
import GithubSVG from "../public/assets/github.svg";
import TwitterSVG from "../public/assets/twitter.svg";
import LinkedinSVG from "../public/assets/linkedin.svg";

import webInfo from "../public/assets/WebsiteData.json";
import { lato } from "../pages/_app";

function FooterCard() {
  return (
    <>
      <section
        className={`w-[100%] flex justify-around px-[1.8rem] 
        md:px-[4rem] lg:px-[11rem] pt-[1rem]`}
      >
        <div className="w-[80%] text-start grid lg:gap-[12px]">
          <div className="grid lg:flex items-center justify-between gap-[8px] font-[600]">
            {/* LOGO */}
            <Link className="flex" href="/">
              <Image src={KakashiSVG} alt="kakashi-face" width={26} />
              <span
                className={`ml-1 translate-y-[1px] text-white text-[1.1rem]
                lg:text-[1.4rem] hover:text-green ${lato.className} uppercase`}
              >
                Tanmay
              </span>
            </Link>
            <Link href="mailto:hello@tanmaysarkar.tech">
              <p className="hover:text-green">{webInfo.email}</p>
            </Link>
          </div>
          <p className="text-[14px] md:text-[16px] font-[500] ">
            {webInfo["footer-description"]}
          </p>
        </div>
        <div className="w-fit flex flex-col items-center lg:gap-[12px]">
          <h2 className="text-[1.2rem] lg:text-[1.4rem] font-bold">Socials</h2>
          <div className="mt-[4px] grid lg:flex lg:items-center">
            <Link href="https://github.com/sarkartanmay393">
              <Image
                width={32}
                className="hover:p-[1px] m-[6px]"
                src={GithubSVG}
                alt="github-ref"
              />
            </Link>
            <Link href="https://twitter.com/sarkartanmay393">
              <Image
                width={32}
                className="hover:p-[1px] m-[6px]"
                src={TwitterSVG}
                alt="twitter-ref"
              />
            </Link>
            <Link href="https://linkedin.com/in/tanmaysrkr">
              <Image
                width={32}
                className="hover:p-[1px] m-[6px]"
                src={LinkedinSVG}
                alt="linkedin-ref"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterCard;
