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
	ResponsiveContainer,
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
		<div className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center border border-slate-400">
			<h1 className="w-full font-bold px-3 py-1 text-lg max-sm:text-sm max-lg:text-sm text-slate-500">
				Total Sales / Days
			</h1>
			<ResponsiveContainer width="100%" minHeight={200} maxHeight={250}>
				<LineChart width={800} height={250} data={salesByDate} className="pe-3">
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" className="max-sm:text-xs max-lg:text-xs" />
					<YAxis className="max-sm:text-xs max-lg:text-xs" />
					<Tooltip className="max-sm:text-xs max-lg:text-xs" />
					<Legend className="max-sm:text-xs max-lg:text-xs" />
					<Line
						type="monotone"
						dataKey="sales"
						stroke="#135bb9"
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
