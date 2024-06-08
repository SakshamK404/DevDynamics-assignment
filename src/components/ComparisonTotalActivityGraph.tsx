
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AuthorWorklogRow, TotalActivity } from "../types";

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Function to format email into name
const formatNameFromEmail = (email: string) => {
  const name = email.split("@")[0];
  return capitalizeFirstLetter(name);
};

interface ComparisonTotalActivityGraphProps {
  data: AuthorWorklogRow[];
}

const ComparisonTotalActivityGraph: React.FC<ComparisonTotalActivityGraphProps> = ({ data }) => {
  const comparisonData = data.map(record => {
    const totalActivities = {
      PR_Open: 0,
      PR_Merged: 0,
      Commits: 0
    };

    record.totalActivity.forEach(activity => {
      switch (activity.name) {
        case 'PR Open':
          totalActivities.PR_Open = parseInt(activity.value, 10);
          break;
        case 'PR Merged':
          totalActivities.PR_Merged = parseInt(activity.value, 10);
          break;
        case 'Commits':
          totalActivities.Commits = parseInt(activity.value, 10);
          break;
        default:
          break;
      }
    });

    return {
      name: formatNameFromEmail(record.name),
      PR_Open: totalActivities.PR_Open,
      PR_Merged: totalActivities.PR_Merged,
      Commits: totalActivities.Commits
    };
  });

  return (
    <div className="chart-wrapper">
      <h3>Total Activity Comparison</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="PR_Open" stackId="a" fill="#8884d8" />
          <Bar dataKey="PR_Merged" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Commits" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonTotalActivityGraph;
