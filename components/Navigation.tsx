import { useEffect, useState } from "react";
import { MenuBoardChild, NavBarItems } from "./Menuboard";
import Hamburger from "./Hamburger";
import Image from "next/image";

import {
  firacode,
  inconsolata,
  kalam,
  lato,
  poppins,
  vt323,
} from "../pages/_app";
import KakashiSVG from "../public/assets/kakashi.svg";
import Link from "next/link";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.onload = () => {
      document
        .getElementById("face-nav")
        ?.animate([{ transform: "rotate(360deg)" }], 1000);
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("hamburger")?.classList.toggle("open");
    document.getElementById("menuboard")?.classList.toggle("hidden");
  };

  return (
    <>
      <MenuBoardChild />
      <section
        id="navbar"
        className={`w-[100%] flex flex-col fixed z-[999] top-0 bg-gray ${
          isMenuOpen ? "bg-gray" : ""
        }`}
      >
        <nav className="flex justify-between items-center py-[1rem] px-[1.6rem] lg:px-[10rem] text-white">
          <Link className="flex" href="/">
            <Image
              id="face-nav"
              className="animate-[spin 1s linear]"
              src={KakashiSVG}
              alt="kakashi-face"
              width={22}
            />
            <span
              className={`ml-1 translate-y-[1px] text-white text-[0.9rem] lg:text-[1.1rem] hover:text-green ${lato.className} uppercase`}
            >
              Tanmay
            </span>
          </Link>
          <Hamburger openMenu={openMenu} />
          <NavBarItems />
        </nav>
        <div id="scrollbar" className="h-[1px] w-[0%] bg-white"></div>
      </section>
      <style jsx>{`
        #scrollbar {
          animation: scroll 1s linear;
        }
        @keyframes scroll {
          0% {
            width: 0%;
            height: 1px;
            background-color: white;
          }

          25% {
            width: 25%;
            height: 1.05px;
            background-color: white;
          }

          50% {
            width: 50%;
            height: 1.1px;
            background-color: orange;
          }

          75% {
            width: 75%;
            height: 1.15px;
            background-color: orange;
          }

          100% {
            width: 100%;
            height: 1.2px;
            background-color: #ff6d37;
          }
        }

        /* For scroll animation */
        #navbar * {
          animation-play-state: paused;
          animation-delay: calc(var(--scroll) * -1s);
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }

        #face-nav {
          animation-play-state: paused;
          animation-delay: calc(var(--scroll) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }
      `}</style>
    </>
  );
}

export default Navigation;
