import React from "react";
import { useSelector } from "react-redux";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

export default function BarComponent() {
	const { salesByProducts } = useSelector((state) => state.data);

	return (
		<BarChart
			width={1000}
			height={300}
			data={salesByProducts}
			margin={{
				top: 20,
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
			<Bar dataKey="revenue" stackId="a" fill="#8884d8" />
			<Bar dataKey="sales" stackId="a" fill="#82ca9d" />
		</BarChart>
	);
}
