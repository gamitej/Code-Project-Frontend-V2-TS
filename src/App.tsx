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
// store
import { useAuth } from "@/store/auth/useAuth";
import { getWindowDimensions } from "./data/data";
import { useGlobal } from "./store/global/useGlobal";

function App() {
  const { isLoggedIn } = useAuth();
  const { setWindowDimensions, windowDimensions } = useGlobal();

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

  /**
   * JSX
   */
  return (
    <div onScroll={handleScrollToTop}>
      {/* scroll to top btn */}
      <ScrollToTopButton handleScrollToTop={handleScrollToTop} />
      <Toaster position="top-center" reverseOrder={false} />
      <Sidebar
        keeySidebarEnabled={windowDimensions.width >= 500 ? true : false}
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
