import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
import { AppAuth } from "@/types/pages";
import HeaderColorPalette from "./comp/HeaderColorPalette";
import { NavLink } from "react-router-dom";

const Header = ({ navbarHeight }: AppAuth) => {
  const { colorShades, setColorShades } = useGlobal();
  const { isLoggedIn, handleLogout } = useAuth();

  return (
    <div
      className={`bg-darkCard shadow-md flex justify-between items-center px-4`}
      style={{ height: `${navbarHeight}rem` }}
    >
      <div>
        <NavLink
          to="/"
          className={`RISE`}
          style={{ color: colorShades, fontSize: "1.8rem" }}
        >
          Code
        </NavLink>
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
