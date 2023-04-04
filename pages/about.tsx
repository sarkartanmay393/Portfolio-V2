import React from "react";
import Layout from "../components/Layout";
import FunfactSection from "../components/FunfactCard";

import webInfo from "../public/assets/WebsiteData.json";
import aboutImage from "../public/assets/tanmay-image.png";
import Image from "next/image";

function AboutPage() {
  const { funfacts } = webInfo;
  const { intro, p1, p2, p3 } = webInfo["about-me"];
  const funfact_highlights = webInfo["funfact-highlights"];

  return (
    <Layout title="About Me">
      <section className="flex flex-col items-flex-start py-0 lg:py-[2rem] px-[1rem] lg:px-[10rem] text-white">
        <header className="flex flex-col items-flex-start text-[20px]">
          <a href="/about">
            <h1 className="">
              <span className="">/</span>about-me
            </h1>
          </a>
        </header>
        <main className="flex flex-col items-center lg:items-flex-start p-[1rem]">
          <section className="flex justify-center items-center mb-[12px]">
            <section className="w-[100%] lg:w-[60%] flex flex-col text-start text-[13px] text-white">
              <h3>Who am I?</h3>
              <p className="mt-[22px] font-[600]">{intro}</p>
              {[p1, p2, p3].map((val) => (
                <p className="my-[6px] max-w-[80%] font-[500]">{val}</p>
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
