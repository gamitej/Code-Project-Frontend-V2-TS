import { Link } from "react-router-dom";
import { SelectedTopicData } from "@/types/pages";
import { useGlobal } from "@/store/global/useGlobal";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useState } from "react";

const Questions = (props: SelectedTopicData) => {
  const { body: questions = [], cardType } = props;
  const { colorShades } = useGlobal();
  const [hoveredQue, setHoveredQue] = useState<string>("");

  /**
   * TSX
   */
  return (
    <div
      className="col-span-6 md:col-span-3 lg:col-span-2 p-2 rounded-md shadow-md h-[25rem] bg-darkCard min-w-[20rem]"
      style={{ boxShadow: `1px 1px 2px 0 ${colorShades}` }}
    >
      {/* heading */}
      <div className="bg-darkText flex justify-between items-center h-[3.5rem] px-4">
        <h3
          className="text-white capitalize text-lg"
          style={{ color: colorShades, fontWeight: 600 }}
        >
          {cardType}
        </h3>
        <p className="text-white">(0/10)</p>
      </div>
      {/* questions */}
      <div className="h-[20rem] overflow-y-auto mt-2">
        {questions.map(({ completed, url, name }, idx) => (
          <div key={idx} className="flex items-center md:gap-x-4 px-4 py-2">
            <div className="w-[4rem]">
              <TaskAltIcon
                style={{
                  color: completed ? colorShades : "#4C585F",
                  cursor: "pointer",
                  fontSize: "1.7rem",
                }}
              />
            </div>
            <div className="w-[calc(100%-4rem)]">
              <Link
                onMouseEnter={() => setHoveredQue(name)}
                onMouseLeave={() => setHoveredQue("")}
                to={url}
                target="_blank"
                className={`text-white text-md`}
                style={{
                  color: name === hoveredQue ? colorShades : "white",
                }}
              >
                {name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
