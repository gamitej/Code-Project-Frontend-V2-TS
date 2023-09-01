import { useGlobal } from "@/store/global/useGlobal";

const ExploreContent = () => {
  const { colorShades } = useGlobal();

  /**
   * TSX
   */
  return (
    <div className="grid grid-cols-12 gap-x-2 gap-y-4">
      <div
        className="col-span-12 md:col-span-6 h-[4rem] lg:col-span-4 bg-darkCard rounded-md hover:bg-slate-800"
        style={{ boxShadow: `1px 1px 2px 0 ${colorShades}` }}
      >
        <div className="flex justify-between items-center px-3 h-full">
          <p className="text-white">name</p>
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
    </div>
  );
};

export default ExploreContent;
