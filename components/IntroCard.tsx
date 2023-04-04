import Image from "next/image";
import { useEffect, useState } from "react";

import HomeImage from "../public/assets/home-img.svg";
import webInfo from "../public/assets/WebsiteData.json";

import { kalam } from "../pages/_app";

function IntroCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width >= 600 ? setIsMobile(false) : setIsMobile(true);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-[2rem] py-[2rem] lg:px-[10rem] lg:py-[2rem] text-white">
      <div className="text-start">
        <h3
          className={`font-bold text-[1.4rem] lg:text-[1.7rem] leading-[26px] p-0 ${""}`}
        >
          {webInfo["intro-text"]}{" "}
          <span className="">{webInfo["intro-terms"].first}</span> &{" "}
          <span className="">{webInfo["intro-terms"].second}</span>
        </h3>
        <p className="font-[500] py-[12px]">{webInfo["intro-description"]}</p>
        {isMobile ? (
          <></>
        ) : (
          <a href="#contact">
            <button className="py-[6px] px-[12px] font-[600] bg-none border-[1px] border-orange shadow-button rounded-[4px] hover:text-green hover:border-green hover:shadow-clickedButton">
              Contact Me
            </button>
          </a>
        )}
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Image className="h-[280px] m-0" src={HomeImage} alt="home" />
        <p className="w-max text-[12px] font-[600] outline outline-offset-[4px] outline-whitesmoke rounded-[0px] mt-[4.5px] mx-0">
          ✅ Currently working on{" "}
          <a href={webInfo.ps.ref}>
            <span className="border-b-[0.1px] hover:border-b-[1px] hover:border-green ">
              {webInfo.ps.status}
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}

export default IntroCard;
