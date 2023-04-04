import Image from "next/image";
import Link from "next/link";

import KakashiSVG from "../public/assets/kakashi.svg";
import GithubSVG from "../public/assets/github.svg";
import TwitterSVG from "../public/assets/twitter.svg";
import LinkedinSVG from "../public/assets/linkedin.svg";

function FooterCard({ desc = "", email = "" }) {
  return (
    <>
      <section className="w-[100%] p-[1rem] pb-0 lg:p-[2rem] lg:py-0 flex justify-between bg-none text-white text-center">
        <div className="w-[80%] text-start mx-[12px]">
          <div className="grid lg:flex items-center justify-between font-[600]">
            <Link className="flex" href={"/"}>
              <Image width={22} src={KakashiSVG} alt="kakashi-face" />
              <h2 className="ml-[2px] font-sans text-[14px] mb-[1px]">Tanmay</h2>
            </Link>
            <a href="mailto:hello@tanmaysarkar.tech">
              <p className="hover:text-green">{email}</p>
            </a>
          </div>
          <p className="my-[12px] text-[12px] lg:text-[14px] font-[500] ">
            {desc}
          </p>
        </div>
        <div className="w-fit flex flex-col items-center">
          <h2>Socials</h2>
          <div className="mt-[4px] grid">
            <a href="https://github.com/sarkartanmay393">
              <Image
                className="hover:p-[1px] m-[6px]"
                src={GithubSVG}
                alt="github-ref"
              />
            </a>
            <a href="https://twitter.com/sarkartanmay393">
              <Image
                className="hover:p-[1px] m-[6px]"
                src={TwitterSVG}
                alt="twitter-ref"
              />
            </a>
            <a href="https://linkedin.com/in/tanmaysrkr">
              <Image
                className="hover:p-[1px] m-[6px]"
                src={LinkedinSVG}
                alt="linkedin-ref"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterCard;
