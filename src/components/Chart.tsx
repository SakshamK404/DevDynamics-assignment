

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";
import { TotalActivity } from "../types";

interface Props {
  data: TotalActivity[];
}

const Chart: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ marginTop: "20px", width: '80%', height: '400px', margin: '0 auto' }}>
      <Typography variant="h6" align="center">Activity Chart</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" name="Activity Value" />
          {}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
