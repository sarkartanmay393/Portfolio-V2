import { useEffect, useState } from "react";
import Image from "next/image";

import ChevronDoubleUp from "../public/assets/chevron-double-up.svg";

const ScrollToTop = () => {
  
  useEffect(() => {
    window.addEventListener("scroll", showScrollToTopHandler);
  }, []);

  const showScrollToTopHandler = () => {
    const scrollbutton = document.getElementById("scrollbutton");
    if (window.scrollY > 300) {
      scrollbutton?.classList.remove("hidden");
    } else {
      scrollbutton?.classList.add("hidden");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="scrollbutton"
      className="hidden fixed bottom-0 right-3 pl-[1rem] pb-[1rem]"
    >
      <button
        className="flex justify-center items-center h-[35px] w-[35px] lg:h-[50px] lg:w-[50px] bg-[#bbb] rounded-[100%]"
        onClick={scrollToTop}
        title="Click to scroll top"
      >
        <Image className="" src={ChevronDoubleUp} alt="Scroll-To-Top" />
      </button>
    </div>
  );
};

export default ScrollToTop;
