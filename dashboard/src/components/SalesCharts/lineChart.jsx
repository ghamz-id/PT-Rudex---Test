import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

export default function LineComponent({ sales }) {
	const totalSales = [];
	sales.forEach((item) => {
		const index = totalSales.findIndex((total) => total.date === item.date);
		if (index === -1) {
			totalSales.push({
				date: item.date,
				sales: item.sales,
			});
		} else {
			totalSales[index].sales += item.sales;
		}
	});

	return (
		<LineChart
			width={1000}
			height={300}
			data={totalSales}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line
				type="monotone"
				dataKey="sales"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
		</LineChart>
	);
}
