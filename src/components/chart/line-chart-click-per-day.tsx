"use client";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import moment from "moment";

interface DataPoint {
  value: number;
  date: string;
}

const data: DataPoint[] = [
  {
    value: 50,
    date: "2024-12-23",
  },
  {
    value: 23,
    date: "2024-12-23",
  },
  {
    value: 56,
    date: "2024-12-23",
  },
  {
    value: 30,
    date: "2024-12-24",
  },
  {
    value: 38,
    date: "2024-12-25",
  },
  {
    value: 68,
    date: "2024-12-26",
  },
  {
    value: 106,
    date: "2024-12-27",
  },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip rounded bg-gray-800 p-2 text-white shadow-lg">
        <p className="label">{`Date: ${moment(label).format("MMM D, YYYY")}`}</p>
        <p className="text-primary-600">{`Clicks: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function LineChartClickPerDay() {
  const formatXAxis = (tickItem: string) => {
    return moment(tickItem).format("MMM D, YYYY");
  };

  const maxValue = Math.max(...data.map((d) => d.value));
  const step = Math.ceil(maxValue / 3 / 20) * 20;

  const referenceLines = [];
  for (let i = step; i <= step * 3; i += step) {
    referenceLines.push(
      <ReferenceLine key={i} y={i} stroke="hsl(var(--muted-foreground))" />,
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%" className="pb-6">
      <LineChart data={data}>
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis dataKey="date" name="Date" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {referenceLines}
        <Line dataKey="value" stroke="hsl(var(--primary))" />
      </LineChart>
    </ResponsiveContainer>
  );
}
