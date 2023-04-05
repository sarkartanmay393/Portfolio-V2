import { useEffect, useState } from "react";

import webInfo from "../public/assets/WebsiteData.json";
import Image from "next/image";

function SkillSection() {
  const [skills, setSkills] = useState<string[][]>([]);

  useEffect(() => {
    setSkills([
      webInfo.skills.languages,
      webInfo.skills.frameworks,
      webInfo.skills.cloud,
      webInfo.skills.others,
      webInfo.skills.databases,
      webInfo.skills.tools,
    ]);
  }, [webInfo]);

  return (
    <section className="flex flex-col px-[1.8rem] md:px-[4rem] lg:px-[11rem] text-white">
      <header className="">
        <h2 className="text-[2rem] font-bold">
          <span className="">#</span>
          skills
        </h2>
      </header>
      <main
        className={`md:space-x-[8px] grid lg:flex grid-cols-2 items-center m-auto 
        gap-[12px] lg:items-baseline px-[8px] md:px-[1.2rem] py-[1rem] md:py-[2rem]`}
      >
        {skills.map((valueArray, indexArray) => {
          valueArray.sort((a, b) => {
            if (a.length > b.length) {
              return 1;
            } else if (a.length === b.length) {
              return 0;
            }
            return -1;
          });

          return (
            <section
              className={`flex flex-col w-[140px] h-min border-[1px] lg:py-[8px] 
              lg:px-[12px] m-0 hover:border-green backdrop-blur-[4px] hover:backdrop-blur-[8px]`}
              key={`${indexArray}-skills`}
            >
              <p className="text-[13px] font-[500] h-fit pb-[4px] m-0 text-center max-w-[100%] overflow-clip text-ellipsis border-b-[0.1px]">
                {swForHeader(indexArray)}
              </p>
              <p className="text-[14px] max-w-[100%] overflow-clip text-ellipsis flex flex-col items-center py-[8px] lg:py-[6px]">
                {valueArray.map((value, index) => {
                  return (
                    <a
                      key={`${index}-skillNames`}
                      className="m-auto rounded-0 border-gray-light py-[1px]"
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.confirm(`Visit ${swForLinks(value)}`)) {
                          window.open(swForLinks(value), "_blank");
                        }
                      }}
                      href={swForLinks(value)}
                    >
                      <Image
                        className="rounded-[2px]"
                        width={-1}
                        height={24}
                        alt={`skill-in-${value}`}
                        src={`https://img.shields.io/badge/
                                                    ${value}-white?style=for-the-badge&logo=${value}&logoColor=black`}
                      />
                    </a>
                  );
                })}
              </p>
            </section>
          );
        })}
        {/* </section> */}
      </main>
    </section>
  );
}

const swForHeader = (index: number) => {
  let res = "";
  switch (index) {
    case 0:
      res = "Languages";
      break;
    case 1:
      res = "Frameworks";
      break;
    case 2:
      res = "Cloud";
      break;
    case 3:
      res = "Others";
      break;
    case 4:
      res = "Databases";
      break;
    case 5:
      res = "Tools";
      break;
    default:
      return;
  }
  return res;
};

const swForLinks = (skillName: string) => {
  let res = "";
  switch (skillName) {
    default:
      return;
    case "Linode":
      res = "https://linode.com/";
      break;
    case "Dart":
      res = "https://dart.dev/";
      break;
    case "React":
      res = "https://reactjs.org/";
      break;
    case "Go":
      res = "https://go.dev/";
      break;
    case "JavaScript":
      res = "https://www.javascript.com/";
      break;
    case "Bash":
      res = "https://tldp.org/LDP/Bash-Beginners-Guide/html/";
      break;
    case "SQL":
      res = "https://www.w3schools.com/sql/";
      break;
    case "Java":
      res = "https://www.java.com/en/";
      break;
    case "Express":
      res = "https://expressjs.com/";
      break;
    case "Flutter":
      res = "https://flutter.dev/";
      break;
    case "MySQL":
      res = "https://www.mysql.com/";
      break;
    case "PostgreSQL":
      res = "https://www.postgresql.org/";
      break;
    case "MongoDB":
      res = "https://www.mongodb.com/try/download/community";
      break;
    case "Redis":
      res = "https://redis.io/";
      break;
    case "Docker":
      res = "https://www.docker.com/";
      break;
    case "Kubernetes":
      res = "https://kubernetes.io/";
      break;
    case "Terraform":
      res = "https://www.terraform.io/";
      break;
    case "Jenkins":
      res = "https://www.jenkins.io/";
      break;
    case "Git":
      res = "https://git-scm.com/";
      break;
    case "Azure":
      res = "https://portal.azure.com/#home";
      break;
    case "Civo":
      res = "https://www.civo.com/";
      break;
    case "Linux":
      res = "https://www.linux.org/";
      break;
    case "Firebase":
      res = "https://firebase.google.com/";
      break;
  }

  return res;
};

export default SkillSection;
