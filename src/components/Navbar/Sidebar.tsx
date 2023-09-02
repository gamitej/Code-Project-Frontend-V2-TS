import { useGlobal } from "@/store/global/useGlobal";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const ref = useRef(null);
  const { globalSideBarEnable, setGlobalSideBarEnable } = useGlobal();

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
      <div className="text-white">sidebar</div>
    </div>
  );
};

export default Sidebar;
