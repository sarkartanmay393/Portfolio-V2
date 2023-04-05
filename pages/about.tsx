import React from "react";
import Layout from "../components/Layout";
import FunfactSection from "../components/FunfactCard";

import webInfo from "../public/assets/WebsiteData.json";
import aboutImage from "../public/assets/tanmay-image.png";
import Image from "next/image";
import Link from "next/link";

function AboutPage() {
  const { funfacts } = webInfo;
  const { intro, p1, p2, p3 } = webInfo["about-me"];
  const funfact_highlights = webInfo["funfact-highlights"];

  return (
    <Layout title="About Me">
      <section className="gap-[12px] flex flex-col items-flex-start pl-[2rem] px-[1rem] md:px-[4rem] lg:px-[11rem] py-[2.2rem] md:py-[3rem] lg:py-[4rem] text-white">
        <header className="flex">
          <Link href="/about">
            <h2 className="text-[2rem] font-bold">
              <span>/</span>about-me
            </h2>
          </Link>
        </header>
        <main className="flex flex-col items-center lg:items-flex-start px-[8px] md:px-[1.2rem] gap-[1rem]">
          <section className="flex justify-center items-center">
            <section className="gap-[12px] w-[100%] lg:w-[60%] flex flex-col text-start text-[15px] text-white">
              <h3 className="text-[22px] italic ">Who am I?</h3>
              <p className="text-[18px] font-bold">{intro}</p>
              {[p1, p2, p3].map((val) => (
                <p className="max-w-[90%] text-[18px]">{val}</p>
              ))}
            </section>
            <div className="w-0 lg:w-[40%]">
              <Image className="w-[70%]" src={aboutImage} alt="tanmaysarkar" />
            </div>
          </section>
          <FunfactSection />
        </main>
      </section>
    </Layout>
  );
}

export default AboutPage;
