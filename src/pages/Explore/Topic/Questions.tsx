import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
// icons
import TaskAltIcon from "@mui/icons-material/TaskAlt";
// store
import { useGlobal } from "@/store/global/useGlobal";
//type
import { SelectedTopicData } from "@/types/pages";

const Questions = ({
  body: questions = [],
  cardType,
  handleMarkAsDone = () => {},
}: SelectedTopicData) => {
  const { colorShades, darkMode } = useGlobal();
  const [hoveredQue, setHoveredQue] = useState<string>("");

  const totalCount = useMemo(() => {
    let completedCount = 0;
    let notCompletedCount = 0;

    // Iterate through the array and count completed and not completed questions
    questions.forEach((question) => {
      if (question.completed) {
        completedCount++;
      } else {
        notCompletedCount++;
      }
    });

    if (completedCount === 0 && notCompletedCount === 0) return "Empty";

    return completedCount === notCompletedCount + completedCount
      ? "Completed"
      : `${completedCount}/${completedCount + notCompletedCount}`;
  }, [questions]);

  /**
   * TSX
   */
  return (
    <div
      className="col-span-6 md:col-span-3 lg:col-span-2 p-2 rounded-md shadow-md h-[25rem] dark:bg-darkCard min-w-[20rem] border border-zinc-400 dark:border"
      style={{
        boxShadow: darkMode
          ? `1px 1px 2px 0 ${colorShades}`
          : `4px 4px 2px 2px ${colorShades}`,
      }}
    >
      {/* heading */}
      <div
        style={{
          backgroundColor: darkMode ? "#2A3942" : colorShades,
        }}
        className="flex justify-between items-center h-[3.5rem] px-4"
      >
        <h3
          className="text-white capitalize text-lg"
          style={{
            color: darkMode ? colorShades : "#2A3942",
            fontWeight: 600,
          }}
        >
          {cardType}
        </h3>
        <p className="dark:text-white">{totalCount}</p>
      </div>
      {/* questions */}
      <div className="h-[20rem] overflow-y-auto mt-2">
        {questions.map(({ completed, url, name, id }, idx) => (
          <div
            key={idx}
            className="flex items-center md:gap-x-4 px-4 py-2 dark:hover:bg-darkText hover:bg-slate-200"
          >
            <div className="w-[4rem]">
              <TaskAltIcon
                onClick={() => handleMarkAsDone(id)}
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
                  color:
                    name === hoveredQue
                      ? colorShades
                      : !darkMode
                      ? "black"
                      : "white",
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
