import { Link } from "react-router-dom";
import { SelectedTopicData } from "@/types/pages";

const Questions = (props: SelectedTopicData) => {
  const { body, cardType } = props;

  return (
    <div className="col-span-3 md:col-span-1 p-2 border rounded-sm shadow-md">
      <div className="flex justify-between items-center h-[3rem] px-3">
        <h3 className="text-white capitalize">{cardType}</h3>
        <p className="text-white">(0/10)</p>
      </div>
      <div>
        {body.map(({ completed, url, name }, idx) => (
          <tr key={idx} className="flex items-center px-4 py-1">
            <td className="text-white w-[20%]">{completed ? "done" : "not"}</td>
            <td className="w-[80%]">
              <Link to={url} target="_blank" className="text-white">
                {name}
              </Link>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Questions;
