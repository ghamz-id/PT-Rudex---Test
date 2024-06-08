import { SubTitle, Title } from "chart.js";
import React from "react";
import { useSelector } from "react-redux";
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

export default function BarComponent() {
	const { salesByProducts } = useSelector((state) => state.data);

	return (
		<BarChart
			width={900}
			height={300}
			data={salesByProducts}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="product" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar
				dataKey="revenue"
				fill="#135bb9"
				activeBar={<Rectangle fill="pink" stroke="blue" />}
			/>
			<Bar
				dataKey="sales"
				fill="#faa009"
				activeBar={<Rectangle fill="gold" stroke="purple" />}
			/>
		</BarChart>
	);
}
