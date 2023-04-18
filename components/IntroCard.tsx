import Image from "next/image";

import HomeImage from "../public/assets/home-img.svg";
import webInfo from "../public/assets/WebsiteData.json";

import { vt323 } from "../pages/_app";
import { CustomButtonShadowed } from "./Buttons";

function IntroCard() {

  return (
    <section className="gap-y-[1rem] flex flex-col lg:flex-row items-center justify-center px-[2.4rem] md:px-[5rem] lg:px-[12rem] py-[3.6rem] md:py-[3.8rem] lg:py-[2.6rem] text-white">
      <div className="text-start lg:w-[80%]">
        <h3
          className={`font-bold text-[2rem] lg:text-[2.2rem] leading-[32px] lg:leading-[36px] p-0 ${""}`}
        >
          {webInfo["intro-text"]}{" "}
          <span className="">{webInfo["intro-terms"].first}</span> &{" "}
          <span className="">{webInfo["intro-terms"].second}</span>
        </h3>
        <p className="font-[500] py-[12px] text-[15px] lg:text-[18px]">
          {webInfo["intro-description"]}
        </p>
        
          <CustomButtonShadowed
            className="hidden md:block mt-[2px] uppercase"
            name="Contact Me"
            url="#contacts"
          />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Image
          className="h-[280px] md:h-[420px] m-0"
          src={HomeImage}
          alt="home"
        />
        <div className="w-max border-[1px] px-[6px] mx-0 mt-0 md:mt-[-15px] lg:mt-[-2.7rem] backdrop-blur-[12px]">
          <p className={`text-[13px] md:text-[16px] font-[600] `}>
            ✅ Currently working on{" "}
            <a href={webInfo.ps.ref}>
              <span
                className={`text-[15px] md:text-[18px] border-b-[0.1px] hover:border-b-[1px] hover:border-green hover:text-green ${vt323.className}`}
              >
                {webInfo.ps.status}
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroCard;
