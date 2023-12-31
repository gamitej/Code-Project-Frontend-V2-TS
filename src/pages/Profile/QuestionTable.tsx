import React, { useMemo } from "react";
import { Link } from "react-router-dom";
// libs
import moment from "moment";
import { orderBy } from "lodash";
// mui
import { Divider } from "@mui/material";
// store
import { useGlobal } from "@/store/global/useGlobal";
// type-utils
import { QuestionsData } from "@/types/pages";
import colorCode from "@/utils/colorCode.json";

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

  // formate date
  const formateDate = (date: Date | null) => {
    const newDate = moment(date).format("DD-MM-YYYY");
    return newDate;
  };

  /**
   * TSX
   */
  return (
    <div className="flex flex-col w-full m-auto h-full overflow-x-scroll">
      <h1
        className="text-purple-600 text-2xl font-semibold text-center mb-5 mt-4"
        style={{ color: colorShades }}
      >
        Questions Solved
      </h1>

      {quesData?.length === 0 && (
        <div className="text-slate-400 text-4xl h-full flex justify-center items-center font-semibold">
          No Questions Solved
        </div>
      )}
      {/* HEADER */}
      {quesData?.length > 0 && (
        <div className="h-full overflow-auto w-full min-w-[50rem]">
          <div className="grid grid-cols-9 mt-0 h-[4rem] dark:bg-darkText bg-slate-200 items-center font-semibold dark:text-lightText text-darkText sticky top-0">
            <div className="col-span-2 capitalize text-xl text-center">
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
              <div
                className="grid grid-cols-9 items-center h-[4rem] mt-2 dark:hover:bg-darkText
              hover:bg-slate-200
              cursor-pointer font-semibold dark:text-lightText text-darkText"
              >
                <div className="col-span-2 text-center">
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
