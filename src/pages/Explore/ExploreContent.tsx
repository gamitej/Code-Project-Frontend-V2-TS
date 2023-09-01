import { useGlobal } from "@/store/global/useGlobal";
import { ExploreTopicsData } from "@/types/pages";

const ExploreContent = ({
  urlTitle,
  title,
  total,
  solved,
}: ExploreTopicsData) => {
  const { colorShades } = useGlobal();

  /**
   * TSX
   */
  return (
    <div
      className="col-span-12 md:col-span-6 h-[6rem] lg:col-span-4 bg-darkCard rounded-md hover:bg-slate-800"
      style={{ boxShadow: `1px 1px 2px 0 ${colorShades}` }}
    >
      <div className="flex justify-between items-center px-3 h-full">
        <p className="text-white text-xl">{title}</p>
        <div>
          <button
            className=" px-4 py-1 rounded-md shadow-md"
            style={{
              backgroundColor: colorShades,
            }}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreContent;
