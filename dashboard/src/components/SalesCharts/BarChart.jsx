import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

export default function BarComponent({ sales }) {
	const totalSales = [];
	sales.forEach((item) => {
		const index = totalSales.findIndex(
			(total) => total.product === item.product
		);
		if (index === -1) {
			totalSales.push({
				product: item.product,
				sales: item.sales,
				revenue: item.revenue,
			});
		} else {
			totalSales[index].revenue += item.revenue;
			totalSales[index].sales += item.sales;
		}
	});

	return (
		<BarChart
			width={1000}
			height={300}
			data={totalSales}
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
