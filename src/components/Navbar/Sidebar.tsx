import { useGlobal } from "@/store/global/useGlobal";

const Sidebar = () => {
  const { globalSideBarEnable, setGlobalSideBarEnable } = useGlobal();

  /**
   * TSX
   */
  return (
    <div
      onBlur={() => setGlobalSideBarEnable(false)}
      className={`fixed z-[1000] top-0 left-0 w-[4rem] h-full bg-modal ease-in-out duration-300 ${
        globalSideBarEnable ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
      <div className="text-white">sidebar</div>
    </div>
  );
};

export default Sidebar;
