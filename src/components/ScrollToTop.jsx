import { useEffect, useState } from "react";
import * as styles from "./ScrollToTop.module.css";
import ChevronDoubleUp from "../assets/chevron-double-up.svg";

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
        <div className={styles.scrollToTopContainer}>
            <button
                className={styles.scrollToTopButton}
                onClick={scrollToTop}
                title="Click to scroll top"
            >
                <img src={ChevronDoubleUp} alt="Scroll-To-Top" />
            </button>
        </div>
    ) : (
        <></>
    );
};

export default ScrollToTop;
