import { AppAuth } from "@/types/pages";

const Header = ({ navbarHeight }: AppAuth) => {
  return (
    <div className={`h-[${navbarHeight}] bg-darkCard shadow-md`}>
      <div></div>
    </div>
  );
};

export default Header;
