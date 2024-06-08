
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { DayWiseActivityItem } from "../types";

interface Props {
  dayWiseActivity: DayWiseActivityItem[];
}

const ActivityBreakdown: React.FC<Props> = ({ dayWiseActivity }) => {
  return (
    <div className="container">
      <style>
        {`
          .container {
            position: relative;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={dayWiseActivity}
          margin={{
            top: 45,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dayWiseActivity.map((item, index) => (
            <Bar key={index} dataKey="count" fill={item.fillColor} name={item.label} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityBreakdown;
