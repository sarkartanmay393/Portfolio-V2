import webInfo from "../public/assets/WebsiteData.json";
import { CustomButtonShadowed } from "./Buttons";

function AboutCard() {
  return (
    <section className="flex flex-col px-[1.8rem] md:px-[4rem] lg:px-[11rem] text-white">
      <header className="flex items-center justify-between w-[100%]">
        <h2 className="text-[2rem] font-bold">
          <span>#</span>about-me
        </h2>
      </header>
      <main className="flex justify-eventy py-[1rem] px-[1rem] lg:px-[2rem] ">
        <section className="w-[100%] lg:w-[60%] flex flex-col text-start text-[15px] lg:text-[18px] text-white">
          <p className="my-[6px] font-[600]">{webInfo["about-me"].intro}</p>
          {[
            webInfo["about-me"].p1,
            webInfo["about-me"].p2,
            webInfo["about-me"].p3,
          ].map((val) => (
            <p
              key={val.slice(0, 6)}
              className="my-[6px] max-w-[90%] lg:max-w-[80%] font-[500]"
            >
              {val}
            </p>
          ))}
          <CustomButtonShadowed className="mt-[8px]" name="READ MORE" url="/about" />
        </section>
        <section className="w-0 lg:w-[40%]"></section>
      </main>
    </section>
  );
}

export default AboutCard;
