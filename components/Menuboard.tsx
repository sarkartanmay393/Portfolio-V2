import { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import GithubSVG from "../public/assets/github.svg";
import TwitterSVG from "../public/assets/twitter.svg";
import LinkedinSVG from "../public/assets/linkedin.svg";

const Tabs = {
  "/": {
    name: "home",
  },
  "/blogs": {
    name: "blogs",
  },
  "/projects": {
    name: "projects",
  },
  "/about": {
    name: "about",
  },
};

export function MenuBoardChild() {
  const pathname = usePathname();
  const SVGWIDTH = 32;

  return (
    <div
      id="menuboard"
      className="z-[999] hidden lg:hidden z-[1000] h-[calc(100vh-54px)]	w-screen top-[54px] right-0 fixed bg-gray"
    >
      <div className="text-white px-2 flex flex-col items-center justify-center h-[80%]">
        <ul className="list-none p-0">
          {Object.entries(Tabs).map(([path, { name }]) => {
            return (
              <li key={path} className="mt-[12px]">
                <Link
                  id={path}
                  className="flex text-[1.8rem] lg:text-[1rem] hover:text-green"
                  href={path}
                  tabIndex={0}
                >
                  <span className="">/</span>
                  <p className={pathname.includes(path) ? "font-[600]" : ""}>
                    {name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="w-[40%] md:w-[25%] h-fit flex justify-between items-center absolute bottom-[15%]">
          <a href="https://twitter.com/sarkartanmay393">
            <Image
              className="w-[36px] md:w-[48px]"
              width={SVGWIDTH}
              src={TwitterSVG}
              alt="twitter-ref"
            />
          </a>
          <a href="https://github.com/sarkartanmay393">
            <Image
              className="w-[36px] md:w-[48px]"
              width={SVGWIDTH}
              src={GithubSVG}
              alt="github-ref"
            />
          </a>
          <a href="https://linkedin.com/in/tanmaysrkr">
            <Image
              className="w-[36px] md:w-[48px]"
              width={SVGWIDTH}
              src={LinkedinSVG}
              alt="linkedin-ref"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function NavBarItems() {
  const pathname = usePathname();

  return (
    <ul className="list-none m-0 hidden lg:flex gap-[22px]">
      {Object.entries(Tabs).map(([path, { name }]) => {
        return (
          <li key={path} className="">
            <Link
              id={path}
              className={`flex lg:text-[1rem] hover:text-green ${
                pathname === path ? "font-[600]" : "font-[400]"
              }`}
              href={path}
              tabIndex={0}
            >
              <span className="">/</span>
              <p>{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
