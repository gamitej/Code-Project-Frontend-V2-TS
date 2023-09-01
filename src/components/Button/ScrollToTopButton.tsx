import React, { useEffect, useState } from "react";

type ScrollToTopPorps = {
  handleScrollToTop: () => void;
};

const ScrollToTopButton = ({ handleScrollToTop }: ScrollToTopPorps) => {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
      ) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * TSX
   */
  return (
    <React.Fragment>
      {showScrollToTop && (
        <button
          id="scrollToTopBtn"
          className="fixed z-[100] bottom-6 right-8 rounded-full p-2 bg-red-300"
          onClick={handleScrollToTop}
        >
          top
        </button>
      )}
    </React.Fragment>
  );
};

export default ScrollToTopButton;
