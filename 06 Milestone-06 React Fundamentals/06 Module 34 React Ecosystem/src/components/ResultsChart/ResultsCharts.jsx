import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const resultData = [
  {
    student_id: 1,
    name: "Alice",
    Physics: 85,
    Chemistry: 90,
    Mathematics: 95,
  },
  {
    student_id: 2,
    name: "Bob",
    Physics: 78,
    Chemistry: 82,
    Mathematics: 88,
  },
  {
    student_id: 3,
    name: "Charlie",
    Physics: 92,
    Chemistry: 87,
    Mathematics: 91,
  },
  {
    student_id: 4,
    name: "David",
    Physics: 88,
    Chemistry: 91,
    Mathematics: 85,
  },
  {
    student_id: 5,
    name: "Eve",
    Physics: 85,
    Chemistry: 89,
    Mathematics: 93,
  },
  {
    student_id: 6,
    name: "Frank",
    Physics: 80,
    Chemistry: 84,
    Mathematics: 90,
  },
  {
    student_id: 7,
    name: "Grace",
    Physics: 90,
    Chemistry: 88,
    Mathematics: 92,
  },
  {
    student_id: 8,
    name: "Heidi",
    Physics: 82,
    Chemistry: 85,
    Mathematics: 89,
  },
  {
    student_id: 9,
    name: "Ivan",
    Physics: 87,
    Chemistry: 91,
    Mathematics: 88,
  },
  {
    student_id: 10,
    name: "Judy",
    Physics: 89,
    Chemistry: 90,
    Mathematics: 94,
  },
];

const ResultsCharts = () => {
  return (
    <div>
      <LineChart width={500} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line dataKey="Mathematics" stroke="#8884d8" />
        <Line dataKey="Physics" stroke="#82ca9d" />
        <Line dataKey="Chemistry" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};

export default ResultsCharts;
