import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis, Legend } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marksChartData = marksData.map((studentData) => ({
    id: studentData.student_id,
    name: studentData.name,
    physics: studentData.marks.Physics,
    chemistry: studentData.marks.Chemistry,
    math: studentData.marks.Mathematics,
  }));

  return (
    <div>
      <BarChart height={500} width={900} data={marksChartData}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} /> {/* Fixed domain for marks */}
        <Tooltip />
        <Legend /> {/* Adds legend to identify bars */}
        <Bar dataKey="physics" fill="#8884d8" />
        <Bar dataKey="chemistry" fill="#82ca9d" />
        <Bar dataKey="math" fill="#ffc658" />
      </BarChart>
    </div>
  );
};

export default MarksChart;
