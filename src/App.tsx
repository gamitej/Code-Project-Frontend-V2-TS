import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Router from "@/routes/Router";
// comp
import {
  FullScreenLoader,
  Header,
  ScrollToTopButton,
  Sidebar,
} from "@/components";
// data / utils
import colorCode from "@/utils/colorCode.json";
import { getWindowDimensions } from "./data/data";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "./store/global/useGlobal";

function App() {
  const { isLoggedIn } = useAuth();
  const { setWindowDimensions, windowDimensions, darkMode, colorShades } =
    useGlobal();

  const AppProps = {
    isLoggedIn,
    navbarHeight: "5",
  };

  // Scroll to the top of the page when the button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // dark mode / light mode 
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // scroll bar color set
      root.style.setProperty("--scrollBarColor", "#4c585f");
    } else {
      document.documentElement.classList.remove("dark");
      // scroll bar color set
      root.style.setProperty("--scrollBarColor", colorShades);
    }

    document.body.style.backgroundColor = darkMode
      ? colorCode.darkColorBg
      : colorCode.lightColorBg;
  }, [darkMode, colorShades]);

  /**
   * JSX
   */
  return (
    <div onScroll={handleScrollToTop}>
      {/* scroll to top btn */}
      <ScrollToTopButton handleScrollToTop={handleScrollToTop} />
      <Toaster position="top-center" reverseOrder={false} />
      <Sidebar
        keeySidebarEnabled={windowDimensions.width >= 800 ? true : false}
      />
      {/* Navbar */}
      <Header {...AppProps} />
      <Suspense fallback={<FullScreenLoader />}>
        <Router {...AppProps} />
      </Suspense>
    </div>
  );
}

export default App;
