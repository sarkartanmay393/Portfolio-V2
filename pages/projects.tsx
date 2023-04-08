import Image from "next/image";
import { useEffect } from "react";

import Layout from "../components/Layout";
import { CustomButton } from "../components/Buttons";
import { Project } from "../utils/types";

import webInfo from "../public/assets/WebsiteData.json";
import Link from "next/link";
import { ProjectCard } from "../components/ProjectsCard";

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
      <section className="gap-[12px] flex flex-col items-flex-start pl-[2rem] px-[1rem] md:px-[4rem] lg:px-[11rem] py-[2.2rem] md:py-[3rem] lg:py-[4rem] text-white">
        <header className="flex flex-col items-flex-start text-[2rem] gap-[6px]">
          <Link href="/projects">
            <h2 className="text-[2rem] font-bold">
              <span>/</span>projects
            </h2>
          </Link>
          <p className="text-[1.2rem]">
            List of my projects [{webInfo.projects.length}]
          </p>
        </header>
        <main className="flex gap-[6px] ">
          <section className="flex flex-col gap-[22px] px-[1rem]">
            {wowSection(weeksOfWork)}
            {dowSection(daysOfWork)}
          </section>
        </main>
      </section>
    </Layout>
  );
}

const wowSection = (weeksOfWork: Project[]) => {
  return (
    <>
      <header className="flex items-flex-start">
        <h3 className="text-[1.6rem] font-bold text-start">
          <span>#</span>weeks-of-works
        </h3>
      </header>
      <section className="flex flex-wrap gap-[12px] justify-center lg:justify-start">
        {weeksOfWork.map((value) => {
          return (
            <ProjectCard
              key={value.title}
              value={value}
              hideImage={false}
              small={false}
            />
          );
        })}
      </section>
    </>
  );
};
const dowSection = (daysOfWork: Project[]) => {
  return (
    <>
      <header className="flex items-flex-start">
        <h3 className="text-[1.6rem] font-bold text-start">
          <span>#</span>days-of-works
        </h3>
      </header>
      <section className="flex flex-wrap gap-[12px] justify-center lg:justify-start">
        {daysOfWork.map((value) => {
          return (
            <ProjectCard
              key={value.title}
              value={value}
              hideImage={true}
              small
            />
          );
        })}
      </section>
    </>
  );
};

export default ProjectsPage;
