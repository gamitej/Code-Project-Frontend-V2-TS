import { useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// store
import { useGlobal } from "@/store/global/useGlobal";
// type
import { ExploreTopicsData } from "@/types/pages";

const ExploreContent = ({
  urlTitle,
  title,
  total,
  solved,
  onGoingTopic,
}: ExploreTopicsData) => {
  const { colorShades } = useGlobal();
  const [hoverElement, setHoverElement] = useState<string>("");

  /**
   * TSX
   */
  return (
    <div
      className="col-span-12 md:col-span-6 h-[10rem] lg:col-span-4 bg-darkCard rounded-md hover:bg-slate-800 cursor-pointer"
      onMouseEnter={() => setHoverElement(urlTitle)}
      onMouseLeave={() => setHoverElement("")}
      style={{ boxShadow: `1px 1px 2px 0 ${colorShades}` }}
    >
      <div className="relative flex justify-center items-center px-3 h-full">
        <p className="text-white text-xl">{title}</p>
        {/* in progress */}
        <div className="absolute top-3 left-3">
          <button
            className={`px-2 rounded-sm shadow-md`}
            style={{
              color: colorShades,
              display:
                onGoingTopic && onGoingTopic.data === urlTitle
                  ? "block"
                  : "none",
            }}
          >
            In progress
          </button>
        </div>
        {/* status */}
        <div className="absolute top-3 right-3 text-white">
          <p>{solved === total ? "Completed" : `(${solved}/${total})`}</p>
        </div>
        {/* go to topic page */}
        <div className="absolute bottom-3 right-3">
          <NavLink
            to={`/explore/${urlTitle}`}
            className={`px-2 rounded-sm shadow-md ${
              hoverElement === urlTitle ? "block" : "hidden"
            } duration-300 ease-in-out border cursor-pointer hover:bg-zinc-500`}
            style={{
              color: colorShades,
              borderColor: colorShades,
              fontSize: ".5rem",
            }}
          >
            <EastOutlinedIcon />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ExploreContent;
