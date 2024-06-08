
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
  Rectangle,
} from "recharts";
import { TotalActivity } from "../types";

interface Props {
  totalActivity: TotalActivity[];
  name: string;
}

const TotalActivities: React.FC<Props> = ({ totalActivity, name }) => {
  

  const maxValue = Math.max(...totalActivity.map((d) => Number(d.value)));

  const capitalizeAndBoldFirstWord = (str: string) => {
    const firstWord = str.split("@")[0];
    const capitalizedWord =
      firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    return <strong>{capitalizedWord}</strong>;
  };

  return (
    <div className="container">
      <style>
        {`
          .container {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .top-left {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px;
          }
        `}
      </style>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={totalActivity}
          margin={{
            top: 45,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, maxValue + maxValue * 0.1]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="top-left">{capitalizeAndBoldFirstWord(name)}</div>
    </div>
  );
};

export default TotalActivities;

//this is a comment