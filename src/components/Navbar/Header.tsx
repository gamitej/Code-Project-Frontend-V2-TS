import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
import { AppAuth } from "@/types/pages";

const Header = ({ navbarHeight }: AppAuth) => {
  const { colorShades } = useGlobal();
  const { isLoggedIn } = useAuth();

  return (
    <div
      className={`bg-darkCard shadow-md flex justify-between items-center px-4`}
      style={{ height: `${navbarHeight}rem` }}
    >
      <div>
        <h2 className={`font-semibold text-2xl`} style={{ color: colorShades }}>
          Code
        </h2>
      </div>
      <div className="text-md">
        <button
          className={`text-black px-3 py-1 rounded-sm shadow-md`}
          style={{
            backgroundColor: colorShades,
            display: isLoggedIn ? "block" : "none",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
