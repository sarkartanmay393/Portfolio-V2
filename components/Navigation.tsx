import { useEffect, useState } from "react";
import { MenuBoardChild, NavBarItems } from "./Menuboard";
import Hamburger from "./Hamburger";
import Image from "next/image";

import styles from "../styles/Navigation.module.css";
import KakashiSVG from "../public/assets/kakashi.svg";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.onload = () => {
      document
        .getElementById("kakashi-face-nav")
        ?.animate([{ transform: "rotate(360deg)" }], 1000);
    };
  }, []);

  useEffect(() => {
    window.screen.width >= 600 ? setIsMobile(false) : setIsMobile(true);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("hamburger")?.classList.toggle("open");
  };

  return (
    <>
      {isMenuOpen ? <MenuBoardChild /> : <></>}
      <section
        className={"w-[100%] flex flex-col fixed z-999 top-0 bg-gray py-3".concat(
          isMenuOpen ? " bg-gray" : ""
        )}
      >
        <nav className="flex justify-between items-center py-1 px-12 text-white">
          <a className="flex" href="/">
            <Image
              id="kakashi-face-nav"
              className={styles.kakashi_face}
              src={KakashiSVG}
              alt="kakashi-face"
              width={22}
            />
            <span className="ml-1 text-md font-bold hover:text-green">
              Tanmay
            </span>
          </a>
          {isMobile ? <Hamburger openMenu={openMenu} /> : <NavBarItems />}
        </nav>
        <div className={styles.progress_bar}></div>
      </section>
    </>
  );
}

export default Navigation;
