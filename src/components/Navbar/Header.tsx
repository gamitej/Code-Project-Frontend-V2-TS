import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
import { AppAuth } from "@/types/pages";
import HeaderColorPalette from "./comp/HeaderColorPalette";

const Header = ({ navbarHeight }: AppAuth) => {
  const { colorShades, setColorShades } = useGlobal();
  const { isLoggedIn, handleLogout } = useAuth();

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
      {/* ===== header end ======= */}
      <div className="flex justify-center items-center w-[8rem] gap-x-4">
        <HeaderColorPalette
          colorShades={colorShades}
          setColorShades={setColorShades}
        />
        {/* logout */}
        <button
          onClick={handleLogout}
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
