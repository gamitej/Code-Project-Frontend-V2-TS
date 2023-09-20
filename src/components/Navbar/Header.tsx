import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
import { AppAuth } from "@/types/pages";
import HeaderColorPalette from "./comp/HeaderColorPalette";
import { NavLink } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import UserMenu from "./comp/UserMenu";
import logo from "@/assests/logo-2.png";

const Header = ({ navbarHeight }: AppAuth) => {
  const {
    colorShades,
    setColorShades,
    setGlobalSideBarEnable,
    darkMode,
    setDarkMode,
  } = useGlobal();
  const { isLoggedIn, handleLogout, userInfo } = useAuth();

  /**
   * TSX
   */
  return (
    <div
      className={`sticky top-0 z-[100] dark:bg-darkCard bg-white shadow-md flex justify-between items-center px-5 md:px-8`}
      style={{ height: `${navbarHeight}rem` }}
    >
      <div className="flex items-center">
        {/* ====== side bar button ====== */}
        <div className="px-2 hover:bg-slate-200 dark:hover:bg-slate-400 rounded-md">
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
          className={`RISE font-semibold dark:font-normal -ml-8`}
          style={{ color: colorShades }}
        >
          <img src={logo} alt="" height={120} width={120} />
        </NavLink>
      </div>
      {/* ====== header end ======= */}
      <div className="flex justify-center items-center w-[10rem] gap-x-4">
        <HeaderColorPalette
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          colorShades={colorShades}
          setColorShades={setColorShades}
        />
        <p
          style={{ color: colorShades }}
          className="font-semibold text-[1.3rem]"
        >
          {userInfo && userInfo.name}
        </p>
        {/* logout */}
        <UserMenu colorShades={colorShades} handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Header;
