import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Router from "@/routes/Router";
// store
import { useAuth } from "@/store/auth/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

  /**
   * JSX
   */
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Navbar */}
      <Suspense fallback={<Loading />}>
        <Router isLoggedIn={isLoggedIn} />
      </Suspense>
    </div>
  );
}

// =========== LOADING-COMP ==============

const Loading = () => {
  return (
    <div
      className="h-[100vh] w-full flex justify-center
   items-center text-white text-xl"
    >
      loading...
    </div>
  );
};

export default App;
