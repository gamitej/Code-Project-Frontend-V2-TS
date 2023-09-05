import { useGlobal } from "@/store/global/useGlobal";
import { useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/store/auth/useAuth";

interface NavButtonProps {
  to: string;
  isActive: boolean;
  colorShades: string;
  icon: React.ReactElement;
}

const NavButton = ({ to, isActive, colorShades, icon }: NavButtonProps) => (
  <NavLink
    to={to}
    className="rounded-md p-2 hover:bg-zinc-500"
    style={{
      backgroundColor: isActive ? colorShades : "",
      color: isActive ? "black" : "#D1D6D8",
    }}
  >
    {icon}
  </NavLink>
);

const Sidebar = ({
  keeySidebarEnabled = false,
}: {
  keeySidebarEnabled?: boolean;
}) => {
  const ref = useRef<any>();
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  const { globalSideBarEnable, setGlobalSideBarEnable, colorShades } =
    useGlobal();

  // sidebar toggle event handler
  const handleSidebarToggle = () => {
    if (keeySidebarEnabled && isLoggedIn) setGlobalSideBarEnable(true);
    else {
      setGlobalSideBarEnable(false);
    }
  };

  // If the menu is open and the clicked target is not within the menu, then close the menu
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        keeySidebarEnabled &&
        globalSideBarEnable &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        handleSidebarToggle();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [globalSideBarEnable]);

  useEffect(() => {
    handleSidebarToggle();
  }, [keeySidebarEnabled, isLoggedIn]);

  /**
   * TSX
   */
  return (
    <div
      ref={ref}
      className={`fixed z-[1000] top-0 left-0 w-[5rem] h-full bg-modal ease-in-out duration-300 ${
        globalSideBarEnable ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-between h-[85vh] mt-[10vh]">
        <div className="h-[15rem] full flex flex-col justify-evenly items-center">
          <NavButton
            to="/"
            isActive={pathname === "/"}
            colorShades={colorShades}
            icon={<HomeIcon style={{ fontSize: "2rem" }} />}
          />
          <NavButton
            to="/profile"
            isActive={pathname.startsWith("/profile")}
            colorShades={colorShades}
            icon={<AccountBoxIcon style={{ fontSize: "2rem" }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
