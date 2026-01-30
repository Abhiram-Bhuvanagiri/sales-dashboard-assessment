"use client";

import { useState } from "react";
import { salesData } from "../../data/salesData";
import ChartToggle from "../molecules/ChartToggle";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart() {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Sales Report (2022–2024)
      </h2>

      <ChartToggle chartType={chartType} setChartType={setChartType} />

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={salesData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#2563eb" />
            </BarChart>
          ) : (
            <LineChart data={salesData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line dataKey="sales" stroke="#16a34a" strokeWidth={3} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
