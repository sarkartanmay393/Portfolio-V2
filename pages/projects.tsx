import Image from "next/image";
import { useEffect } from "react";

import Layout from "../components/Layout";
import { DemoButton, CodeButton } from "../components/Buttons";
import { Project } from "../utils/types";

import webInfo from "../public/assets/WebsiteData.json";

function ProjectsPage() {
  const weeksOfWork: Project[] = webInfo.projects.filter(
    (val) => val.workType === "big"
  );
  const daysOfWork: Project[] = webInfo.projects.filter(
    (val) => val.workType === "small"
  );

  useEffect(() => {
    window.document.documentElement.scrollTop = 0;
  }, []);

  return (
    <Layout title="Projects">
      <section className="flex flex-col items-flex-start py-0 px-[1rem] lg:px-[10rem] lg:py-[2rem] text-white">
        <header className="flex flex-col items-flex-start text-[2rem]">
          <h1 className="">
            <span>/</span>projects
          </h1>
          <p className="text-[1rem]">List of my projects</p>
        </header>
        <main className="flex flex-col items-center lg:items-flex-start lg:py-[2rem] lg:py-[1rem] gap-[6px] ">
          {wowSection(weeksOfWork)}
          {dowSection(daysOfWork)}
        </main>
      </section>
    </Layout>
  );
}

const wowSection = (weeksOfWork: Project[]) => {
  return (
    <>
      <h3 className="mb-[12px]">#weeks-of-works</h3>
      <section className="flex flex-wrap gap-[12px] justify-center">
        {weeksOfWork.map((value, index) => {
          return (
            <section
              className="flex flex-col w-[240px] h-[260px] border-[1px] border-white m-0 py-[6p] px-[8px] text-white hover:border-green"
              key={`${value}-${index}`}
            >
              <p className="text-[12px] text-center max-h-[18px] overflow-hidden text-ellipsis pb-[6px] border-b-[0.1px] border-white">
                {value.madeby.slice(0, 31)}
              </p>
              <div className="flex flex-col my-[8px] items-center justify-center ">
                <Image
                  width={64}
                  height={-1}
                  src={value.image!}
                  alt={`${value.title}-${index}`}
                  className="rounded-[12px] m-[2px]"
                />
                <h3 className="font-bold text-[22px]">{value.title}</h3>
              </div>
              <p className="text-[12px] font-[500] max-w-[100%] overflow-clip text-ellipsis mb-[16px] text-center">
                {value.description.slice(0, 120).trim().concat("...")}
              </p>
              <div className="flex justify-center mt-auto mb-[4px] gap-[4px]">
                <DemoButton url={value.demo} />
                <CodeButton url={value.url} />
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};
const dowSection = (daysOfWork: Project[]) => {
  return (
    <>
      <h3 className="mt-[24px] mb-[12px] lg:mt-[64px] lg:mb-[12px]">
        #days-of-works
      </h3>
      <section className="flex flex-wrap gap-[12px] justify-center">
        {daysOfWork.map((value, index) => {
          return (
            <section
              className="flex flex-col justify-evenly w-[240px] h-[170px] border-[1px] border-whtie py-[6px] px-[8px] m-0 text-white hover:border-greeen"
              key={`${value}-${index}`}
            >
              <p className="text-[12px] text-center max-h-[18px] overflow-hidden text-ellipsis pb-[6px] border-b-[0.1px] border-white">
                {value.madeby.slice(0, 31)}
              </p>
              <div className="m-auto text-center">
                <h3 className="font-bold text-[20px] my-[2px] lg:my-[4px]">
                  {value.title}
                </h3>
                <p className="text-[12px] font-[500] max-w-[100%] overflow-clip text-ellipsis text-center">
                  {value.description.slice(0, 100).trim().concat("...")}
                </p>
              </div>
              <div className="flex justify-center mb-[4px] gap-[4px]">
                {value.demo ? <DemoButton url={value.demo} /> : <></>}
                <CodeButton url={value.url} />
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default ProjectsPage;
