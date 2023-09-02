import { useGlobal } from "@/store/global/useGlobal";
import { useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { NavLink, useLocation } from "react-router-dom";

interface NavButtonProps {
  to: string;
  isActive: boolean;
  colorShades: string;
  icon: React.ReactElement;
}

const NavButton = ({ to, isActive, colorShades, icon }: NavButtonProps) => (
  <NavLink
    to={to}
    className="rounded-md p-1 hover:bg-zinc-500"
    style={{
      backgroundColor: isActive ? colorShades : "",
      color: isActive ? "black" : "#D1D6D8",
    }}
  >
    {icon}
  </NavLink>
);

const Sidebar = () => {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const { globalSideBarEnable, setGlobalSideBarEnable, colorShades } =
    useGlobal();

  // If the menu is open and the clicked target is not within the menu, then close the menu
  useEffect(() => {
    const checkIfClickedOutside = () => {
      if (globalSideBarEnable && ref.current) {
        setGlobalSideBarEnable(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [globalSideBarEnable]);

  /**
   * TSX
   */
  return (
    <div
      ref={ref}
      className={`fixed z-[1000] top-0 left-0 w-[4rem] h-full bg-modal ease-in-out duration-300 ${
        globalSideBarEnable ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-between h-[85vh] mt-[10vh]">
        <div className="h-[15rem] full flex flex-col justify-evenly items-center">
          <NavButton
            to="/"
            isActive={pathname === "/"}
            colorShades={colorShades}
            icon={<HomeIcon style={{ fontSize: "1.8rem" }} />}
          />
          <NavButton
            to="/profile"
            isActive={pathname.startsWith("/profile")}
            colorShades={colorShades}
            icon={<AccountBoxIcon style={{ fontSize: "1.8rem" }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
