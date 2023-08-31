import { AppAuth } from "@/types/pages";

const Header = ({ navbarHeight }: AppAuth) => {
  return (
    <div
      className={`bg-darkCard shadow-md`}
      style={{ height: `${navbarHeight}rem` }}
    >
      <div>
        <h2>Code</h2>
      </div>
    </div>
  );
};

export default Header;
