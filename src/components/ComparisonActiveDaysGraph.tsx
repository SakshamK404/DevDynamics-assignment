

import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AuthorWorklogRow } from "../types";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatNameFromEmail = (email: string) => {
  const name = email.split("@")[0];
  return capitalizeFirstLetter(name);
};

interface ComparisonActiveDaysGraphProps {
  data: AuthorWorklogRow[];
  emails: string[];
}

const ComparisonActiveDaysGraph: React.FC<ComparisonActiveDaysGraphProps> = ({ data, emails }) => {
  const comparisonData = emails.map(email => {
    const record = data.find(record => record.name === email);
    return {
      email,
      name: formatNameFromEmail(email),
      activeDays: record ? record.activeDays.days : 0
    };
  });

  return (
    <div className="chart-wrapper">
      <h3>Active Days Comparison</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="activeDays" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonActiveDaysGraph;
