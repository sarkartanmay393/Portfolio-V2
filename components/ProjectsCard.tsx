import Link from "next/link";
import Image from "next/image";
import { DemoButton, CodeButton } from "./Buttons";

import webInfo from "../public/assets/WebsiteData.json";

function ProjectSection() {
  const viewAll = `View All ⇢`;

  return (
    <section className="flex flex-col py-0 px-[1rem] lg:px-[10rem] text-white hover:txt-green">
      <header className="flex justify-between items-center w-[100%]">
        <h2 className="text-[2rem]">
          <span>#</span>projects
        </h2>
        <Link href="/projects">
          <button className="text-white border-0 bg-transparent hover:text-green">
            {viewAll}
          </button>
        </Link>
      </header>
      <main className="flex flex-col lg:flex-row justify-eventy items-center lg:items-baseline py-[2rem] px-[1rem] gap-[6px]">
        {webInfo.projects.map((value, index) => {
          if (index >= 3) {
            return <></>;
          }
          return (
            <section
              className="flex flex-col w-[240px] h-[250px] lg:h-[260px] border-[1px] border-white px-[8px] py-[6px] mb-[6px] lg:m-0 text-white hover:border-green"
              key={`${value}-${index}`}
            >
              <p className="text-[12px] text-center max-h-[18px] max-w-[100%] overflow-hidden text-ellipsis pb-[6px] border-b-[0.1px]">
                {value.madeby.slice(0, 31)}
              </p>
              <div className="row flex flex-col my-[8px] items-center justify-center">
                <Image
                  height={60}
                  width={60}
                  src={value.image!}
                  alt={`${value.title}-${index}`}
                  className="m-[6px] rounded-[12px]"
                />
                <h3 className="font-[600] lg:font-bold text-[21px] lg:text-[22px]">
                  {value.title}
                </h3>
              </div>
              <p className="text-[12px] font-[500] max-w-[100%] overflow-clip text-ellipsis mb-[16px] text-center">
                {value.description.slice(0, 120).trim().concat("...")}
              </p>
              <div className="flex justify-center mt-auto mb-4px gap-4px">
                <DemoButton url={value.demo} />
                <CodeButton url={value.url} />
              </div>
            </section>
          );
        })}
      </main>
    </section>
  );
}

export default ProjectSection;
