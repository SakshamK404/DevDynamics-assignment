

import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ActiveDays } from "../types";

interface ActiveDaysGraphProps {
  data: ActiveDays;
}

const ActiveDaysGraph: React.FC<ActiveDaysGraphProps> = ({ data }) => {
  const insightData = data.insight.map((insight, index) => ({
    insight,
    index,
    days: data.days 
  }));

  return (
    <div className="chart-wrapper">
      <h3>Active Days</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={insightData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="days" fill="#8884d8" />
          layout="vertical"
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveDaysGraph;
