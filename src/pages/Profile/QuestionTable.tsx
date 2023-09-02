import { Divider } from "@mui/material";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import colorCode from "@/utils/colorCode.json";
import { QuestionsData } from "@/types/pages";
import moment from "moment";
import { orderBy } from "lodash";
import { useGlobal } from "@/store/global/useGlobal";

const QuestionTable = ({
  questionsData,
}: {
  questionsData: QuestionsData[];
}) => {
  const { colorShades } = useGlobal();

  // sort the questions data by date
  const quesData = useMemo(() => {
    const sortedData = orderBy(
      questionsData,
      ["date", "question"],
      ["desc", "asc"]
    );
    return sortedData?.filter((item: QuestionsData) => item.done === "Yes");
  }, [questionsData]);

  // format date
  const formateDate = (date: Date | null) => {
    const newDate = moment(date).format("DD-MM-YYYY");
    return newDate;
  };

  /**
   * TSX
   */
  return (
    <div className="flex flex-col w-full m-auto h-full">
      <h1
        className="text-purple-600 text-2xl font-semibold text-center mb-5 mt-4"
        style={{ color: colorShades }}
      >
        Question Solved
      </h1>

      {quesData?.length === 0 && (
        <div className="text-slate-400 text-4xl h-full flex justify-center items-center font-semibold">
          No Questions Solved
        </div>
      )}
      {/* HEADER */}
      {quesData?.length > 0 && (
        <div className="h-full overflow-auto w-full min-w-[30rem]">
          <div className="grid grid-cols-9 mt-0 h-[4rem] bg-darkText items-center p-3 font-semibold text-lightText sticky top-0">
            <div className="col-span-2 capitalize text-xl">
              <h1>topic</h1>
            </div>
            <div className="col-span-1 capitalize text-xl">
              <h1>date</h1>
            </div>
            <div className="col-span-5 capitalize text-xl">
              <h1>question</h1>
            </div>
            <div className="col-span-1 capitalize text-xl">
              <h1>level</h1>
            </div>
          </div>
          <Divider sx={{ backgroundColor: colorShades }} />
          {/* DATA */}
          {quesData?.map((item: QuestionsData, idx: number) => (
            <React.Fragment key={idx}>
              <div className="grid grid-cols-9 items-center h-[4rem] px-2 mt-2 hover:bg-darkText cursor-pointer font-semibold text-lightText">
                <div className="col-span-2">
                  <p>{item?.topic}</p>
                </div>
                <div className="col-span-1 ">
                  <p>{formateDate(item.date!)}</p>
                </div>
                <Link to={item?.url!} target="_blank" className="col-span-5 ">
                  <span className="hover:text-blue-500 hover:underline">
                    {item?.question}
                  </span>
                </Link>
                <div className="col-span-1 capitalize font-semibold">
                  <p
                    style={{
                      color:
                        colorCode[
                          (
                            item?.level ?? "default-level"
                          ).toUpperCase() as keyof typeof colorCode
                        ],
                    }}
                  >
                    {item?.level}
                  </p>
                </div>
              </div>
              {/* <Divider sx={{ backgroundColor: darkMode ? "silver" : "" }} /> */}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionTable;
