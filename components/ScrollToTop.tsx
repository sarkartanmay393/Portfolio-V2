import { useEffect, useState } from "react";
import Image from "next/image";

import ChevronDoubleUp from "../public/assets/chevron-double-up.svg";

const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Add event listener to window on mount
  useEffect(() => {
    window.addEventListener("scroll", showScrollToTopHandler);
  }, []);

  // Check if window is scrolled down more than 300px
  // If yes, show the scroll to top button
  const showScrollToTopHandler = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showScrollToTop ? (
    <div className="fixed bottom-0 right-3 pl-[1rem] pb-[1rem]">
      <button
        className="flex justify-center items-center h-[35px] w-[35px] lg:h-[50px] lg:w-[50px] bg-[#bbb] rounded-[100%]"
        onClick={scrollToTop}
        title="Click to scroll top"
      >
        <Image className="" src={ChevronDoubleUp} alt="Scroll-To-Top" />
      </button>
    </div>
  ) : (
    <></>
  );
};

export default ScrollToTop;
