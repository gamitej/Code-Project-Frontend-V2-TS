import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
import { AppAuth } from "@/types/pages";
import HeaderColorPalette from "./comp/HeaderColorPalette";
import { NavLink } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Header = ({ navbarHeight }: AppAuth) => {
  const {
    colorShades,
    setColorShades,
    setGlobalSideBarEnable,
    darkMode,
    setDarkMode,
  } = useGlobal();
  const { isLoggedIn, handleLogout } = useAuth();

  return (
    <div
      className={`sticky top-0 z-[100] dark:bg-darkCard bg-white shadow-md flex justify-between items-center px-5 md:px-8`}
      style={{ height: `${navbarHeight}rem` }}
    >
      <div className="flex items-center gap-x-3">
        {/* ====== side bar button ====== */}
        <div className="px-2 hover:bg-slate-700 rounded-md">
          <DehazeIcon
            onClick={() => setGlobalSideBarEnable(true)}
            className="cursor-pointer"
            style={{
              color: colorShades,
              fontSize: "2rem",
              display: isLoggedIn ? "block" : "none",
            }}
          />
        </div>
        {/* title */}
        <NavLink
          to="/"
          className={`RISE font-semibold dark:font-normal`}
          style={{ color: colorShades, fontSize: "1.8rem" }}
        >
          Code
        </NavLink>
      </div>
      {/* ====== header end ======= */}
      <div className="flex justify-center items-center w-[8rem] gap-x-4">
        <HeaderColorPalette
          darkMode={darkMode}
          setDarkMode={setDarkMode}
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
