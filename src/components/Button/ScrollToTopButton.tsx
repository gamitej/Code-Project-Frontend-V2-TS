import React, { useEffect, useState } from "react";
import { useGlobal } from "@/store/global/useGlobal";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";

type ScrollToTopPorps = {
  handleScrollToTop: () => void;
};

const ScrollToTopButton = ({ handleScrollToTop }: ScrollToTopPorps) => {
  const { colorShades } = useGlobal();
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
          className="fixed z-[100] bottom-6 right-2 rounded-full p-3 shadow-xl"
          onClick={handleScrollToTop}
          style={{
            backgroundColor: colorShades,
          }}
        >
          <ArrowBackIosNewSharpIcon
            className="rotate-90"
            style={{
              fontSize: "1.5rem",
            }}
          />
        </button>
      )}
    </React.Fragment>
  );
};

export default ScrollToTopButton;
