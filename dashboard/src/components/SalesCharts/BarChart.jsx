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
		<div className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center border border-slate-400">
			<h1 className="w-full font-bold px-3 py-1 text-lg max-sm:text-sm max-lg:text-sm text-slate-500">
				Total Sales / Products
			</h1>
			<ResponsiveContainer width="100%" minHeight={200} maxHeight={250}>
				<BarChart
					width={800}
					height={250}
					data={salesByProducts}
					className="pe-3"
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="product" className="max-sm:text-xs max-lg:text-xs" />
					<YAxis className="max-sm:text-xs max-lg:text-xs" />
					<Tooltip className="max-sm:text-xs max-lg:text-xs" />
					<Legend className="max-sm:text-xs max-lg:text-xs" />
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
			</ResponsiveContainer>
		</div>
	);
}
