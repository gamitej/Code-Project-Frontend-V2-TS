import { useGlobal } from "@/store/global/useGlobal";
import { AppAuth } from "@/types/pages";

const Header = ({ navbarHeight }: AppAuth) => {
  const { colorShades } = useGlobal();

  return (
    <div
      className={`bg-darkCard shadow-md flex justify-between items-center px-4`}
      style={{ height: `${navbarHeight}rem` }}
    >
      <div>
        <h2
          className="text-white font-semibold text-2xl"
          style={{ color: colorShades }}
        >
          Code
        </h2>
      </div>
      <div className="text-white font-semibold text-xl">logout</div>
    </div>
  );
};

export default Header;
