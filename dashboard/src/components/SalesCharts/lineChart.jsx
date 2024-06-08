import React from "react";
import { useSelector } from "react-redux";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	YAxis,
} from "recharts";

export default function LineComponent() {
	const { dataSales } = useSelector((state) => state.data);
	const salesByDate = [];
	dataSales.forEach((item) => {
		const index = salesByDate.findIndex((total) => total.date === item.date);
		if (index === -1) {
			salesByDate.push({
				date: item.date,
				sales: item.sales,
			});
		} else {
			salesByDate[index].sales += item.sales;
		}
	});

	return (
		<LineChart
			width={900}
			height={300}
			data={salesByDate}
			margin={{
				top: 5,
				right: 30,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" className="italic text-sm" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line
				type="monotone"
				dataKey="sales"
				stroke="#135bb9"
				activeDot={{ r: 8 }}
			/>
		</LineChart>
	);
}
