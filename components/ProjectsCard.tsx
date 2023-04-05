import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "./Buttons";

import webInfo from "../public/assets/WebsiteData.json";
import { Project } from "../utils/types";

function ProjectSection() {
  const viewAll = `View All ⇢`;

  return (
    <section className="flex flex-col px-[1.8rem] md:px-[4rem] lg:px-[11rem] text-white">
      <header className="flex justify-between items-center w-[100%]">
        <h2 className="text-[2rem] font-bold">
          <span>#</span>projects
        </h2>
        <Link className="p-0 m-0 translate-y-[4px]" href="/projects">
          <button className="underline decoration-[1px] underline-offset-[4px] font-bold text-[1rem] md:text-[1.2rem] hover:text-green">
            VIEW ALL
          </button>
        </Link>
      </header>
      <main className="w-[100%] flex flex-col lg:flex-row items-center justify-center py-[18px] md:py-[32px] gap-[12px]">
        {webInfo.projects.map((value, index) => {
          if (index >= 4) {
            return;
          }
          return <ProjectCard key={value.title} value={value} hideImage={false} small={false} />;
        })}
      </main>
    </section>
  );
}

export default ProjectSection;

export const ProjectCard = ({
  value,
  hideImage,
  small,
}: {
  value: Project;
  hideImage: boolean;
  small: boolean;
}) => {
  return (
    <section
      key={value.title}
      className={`flex flex-col ${
        small ? "w-[240px] h-[180px]" : "w-[240px] h-[250px] lg:h-[260px]"
        } border-[1px] px-[8px] py-[6px] text-white hover:border-green 
        backdrop-blur-[4px] hover:backdrop-blur-[8px]
      `}
    >
      <p className="truncate text-center text-[12px] max-h-[18px] max-w-[100%] overflow-hidden text-ellipsis pb-[6px] border-b-[0.1px]">
        {value.madeby}
      </p>
      <div className="row flex flex-col my-[8px] items-center justify-center">
        {!hideImage ? (
          <Image
            height={60}
            width={60}
            alt={value.title}
            src={value.image!}
            className={`m-[6px] rounded-[50%]`}
          />
        ) : (
          <></>
        )}
        <h3 className="text-[21px] lg:text-[22px] font-bold [word-spacing:-5px] uppercase">
          {value.title}
        </h3>
      </div>
      <p className="text-stretch text-[12px] text-center overflow-hidden leading-[14px]">
        {value.description.slice(0, 130)}
      </p>
      <div className="flex justify-center mt-auto gap-[8px] pb-[6px]">
        <CustomButton name="DEMO" url={value.demo} />
        <CustomButton name="CODE" url={value.url} />
      </div>
    </section>
  );
};
