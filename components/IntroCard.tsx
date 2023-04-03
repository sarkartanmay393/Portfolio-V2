import Image from "next/image";
import { useEffect, useState } from "react";

import HomeImage from "../public/assets/home-img.svg";

function IntroCard({
  intro_text,
  term_first,
  term_second,
  ps_ref,
  ps_status,
  description,
}: {
  intro_text: string;
  term_first: string;
  term_second: string;
  ps_ref: string;
  ps_status: string;
  description: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width >= 600 ? setIsMobile(false) : setIsMobile(true);
  }, []);

  return (
    <section
      role="banner"
      className="flex flex-col lg:flex-row items-center justify-center px-[2rem] py-[2rem] lg:px-[10rem] lg:py-[2rem] text-white bg-gray-mid"
    >
      <div className="text-start">
        <h3 className="font-bold text-[1.4rem] lg:text-[1.7rem] leading-[26px] p-0">
          {intro_text}
          <span className="">{term_first}</span> &{" "}
          <span className="">{term_second}</span>
        </h3>
        <p className="font-[500] py-[12px]">{description}</p>
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
          <a href={ps_ref}>
            <span className="border-b-[0.1px] hover:border-b-[1px] hover:border-green ">
              {ps_status}
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}

export default IntroCard;
