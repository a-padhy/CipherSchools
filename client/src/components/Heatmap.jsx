import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../App.css";
const data = [
  { date: "2022-08-09", value: 3 },
  { date: "2022-08-10", value: 1 },
  { date: "2022-08-11", value: 5 },
  // ...
  { date: "2023-04-08", value: 2 },
  { date: "2023-04-09", value: 0 },
  { date: "2023-04-10", value: 4 },
];
const Heatmap = () => {
  const classForValue = (value) => {
    return value ? `color-scale-${value.value}` : "color-empty";
  };

  const tooltipDataAttrs = (value) => {
    return value ? { "data-tip": `${value.date}: ${value.value} units` } : null;
  };
  return (
    <div className=" px-10 pb-5">
      <div className="flex justify-between mb-5">
        <h2 className="uppercase font-bold text-base leading-6">
          cipher graph
        </h2>
      </div>
      <div className="">
        {/* <CalendarHeatmap
          startDate={new Date("2022-08-09")}
          endDate={new Date("2023-04-10")}
          values={data}
          showWeekdayLabels={true}
          titleForValue={(value) =>
            value ? `Value on ${value.date}: ${value.value}` : "No data"
          }
          classForValue={classForValue}
          tooltipDataAttrs={tooltipDataAttrs}
        /> */}
        <CalendarHeatmap
          startDate={new Date("2022-04-09")}
          endDate={new Date("2023-04-10")}
          values={data}
          showWeekdayLabels={true}
          titleForValue={(value) =>
            value ? `Value on ${value.date}: ${value.value}` : "No data"
          }
          classForValue={classForValue}
          tooltipDataAttrs={tooltipDataAttrs}
        />
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Heatmap;
