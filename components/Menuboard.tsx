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
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
};

export function MenuBoardChild() {
  const pathname = usePathname();
  const SVGWIDTH = 32;
  return (
    <div
      id="menuboard"
      className="hidden lg:hidden z-[1000] h-full	w-screen top-6 right-0 fixed bg-gray"
    >
      <div className="text-white px-2 flex flex-col items-center justify-center h-[80%]">
        <ul className="list-none p-0">
          {Object.entries(Tabs).map(([path, { name }]) => {
            if (pathname === path) {
              useEffect(() => {
                document.getElementById(path)!.style.fontWeight = "bold";
              }, []);
            }
            return (
              <li key={path} className="mt-2">
                <Link
                  id={path}
                  className="no-underline	text-md text-bold hover:text-green md:text-[1.6rem]"
                  href={path}
                  tabIndex={0}
                >
                  <span className="text-orange">/</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="w-[30%] h-fit flex justify-between items-center absolute bottom-[15%]">
          <a href="https://twitter.com/sarkartanmay393">
            <Image width={SVGWIDTH + 1} src={TwitterSVG} alt="twitter-ref" />
          </a>
          <a href="https://github.com/sarkartanmay393">
            <Image width={SVGWIDTH} src={GithubSVG} alt="github-ref" />
          </a>
          <a href="https://linkedin.com/in/tanmaysrkr">
            <Image width={SVGWIDTH} src={LinkedinSVG} alt="linkedin-ref" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function NavBarItems() {
  const pathname = usePathname();
  return (
    <ul className="list-none m-0 hidden lg:flex">
      {Object.entries(Tabs).map(([path, { name }]) => {
        if (pathname === path) {
          useEffect(() => {
            document.getElementById(path)!.style.fontWeight = "bold";
          }, []);
        }
        return (
          <li key={path} className="px-1">
            <Link
              id={path}
              className="no-underline	text-md text-bold hover:text-green"
              href={path}
              tabIndex={0}
            >
              <span className="text-orange">/</span>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
