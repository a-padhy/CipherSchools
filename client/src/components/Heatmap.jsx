import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../App.css";
const data = [
  { date: "2022-04-10", value: 3 },
  { date: "2022-04-19", value: 1 },
  { date: "2022-04-27", value: 5 },
  { date: "2022-05-08", value: 2 },
  { date: "2022-05-09", value: 1 },
  { date: "2022-05-10", value: 4 },
  { date: "2022-06-02", value: 3 },
  { date: "2022-06-14", value: 1 },
  { date: "2022-06-20", value: 5 },
  { date: "2022-08-08", value: 2 },
  { date: "2022-08-17", value: 1 },
  { date: "2022-08-29", value: 4 },
  { date: "2022-09-04", value: 4 },
  { date: "2022-09-07", value: 4 },
  { date: "2022-09-18", value: 4 },
  { date: "2022-09-30", value: 4 },
  { date: "2022-10-02", value: 4 },
  { date: "2022-10-18", value: 4 },
  { date: "2022-10-20", value: 4 },
  { date: "2022-10-31", value: 4 },
  { date: "2022-11-05", value: 4 },
  { date: "2022-11-10", value: 4 },
  { date: "2022-11-15", value: 4 },
  { date: "2022-11-20", value: 4 },
  { date: "2022-12-25", value: 4 },
  { date: "2022-12-07", value: 4 },
  { date: "2022-12-13", value: 4 },
  { date: "2022-12-18", value: 4 },
  { date: "2022-12-27", value: 4 },
  { date: "2023-01-04", value: 4 },
  { date: "2023-01-14", value: 4 },
  { date: "2023-01-17", value: 4 },
  { date: "2023-01-24", value: 4 },
  { date: "2023-02-12", value: 4 },
  { date: "2023-02-19", value: 4 },
  { date: "2023-02-25", value: 4 },
  { date: "2023-02-28", value: 4 },
  { date: "2023-03-06", value: 4 },
  { date: "2023-03-16", value: 4 },
  { date: "2023-03-20", value: 4 },
  { date: "2023-03-25", value: 4 },
];
const Heatmap = () => {
  const classForValue = (value) => {
    return value ? `color-scale-1` : "color-scale-0";
  };

  const tooltipDataAttrs = (value) => {
    return value ? { "data-tip": `${value.date}: ${value.value} units` } : null;
  };
  return (
    <div className=" px-10">
      <div className="flex justify-between mb-5">
        <h2 className="uppercase font-semibold text-lg leading-6">
          cipher graph
        </h2>
      </div>
      <div className="">
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
    </div>
  );
};

export default Heatmap;
