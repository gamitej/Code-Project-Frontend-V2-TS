import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Router from "@/routes/Router";
// comp
import { Header, ScrollToTopButton } from "@/components";
// store
import { useAuth } from "@/store/auth/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

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

  /**
   * JSX
   */
  return (
    <div onScroll={handleScrollToTop}>
      {/* scroll to top btn */}
      <ScrollToTopButton handleScrollToTop={handleScrollToTop} />
      <Toaster position="top-center" reverseOrder={false} />
      {/* Navbar */}
      <Header {...AppProps} />
      <Suspense fallback={<Loading />}>
        <Router {...AppProps} />
      </Suspense>
    </div>
  );
}

// =========== LOADING-COMP ==============

const Loading = () => {
  return (
    <div
      className="h-[calc(100vh-5rem)] w-full flex justify-center
   items-center text-white text-xl"
    >
      loading...
    </div>
  );
};

export default App;

// useEffect(() => {
//   document.documentElement.style.setProperty("--background", "black");
// }, []);
