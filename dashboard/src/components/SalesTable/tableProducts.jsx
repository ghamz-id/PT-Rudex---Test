import { useSelector } from "react-redux";

export default function SalesTable() {
	const { dataSales } = useSelector((state) => state.data);

	// Sort form latest date
	const sortedDataSales = [...dataSales];
	sortedDataSales.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Dummy code product
	const codeProduct = dataSales.map((item) => {
		const code = item.product
			.split(" ")
			.map((word) => word[0].toUpperCase())
			.join("");
		const codeDate = item.date.split("-").join("");
		return `#${code}-${codeDate}`;
	});

	return (
		<table className="table table-pin-rows w-full bg-white shadow-lg">
			<thead>
				<tr className="bg-blue-200 text-black">
					<th className="border px-4 py-2 text-center w-10">ID</th>
					<th className="border px-4 py-2 text-center">Code Product</th>
					<th className="border px-4 py-2 text-center">Product</th>
					<th className="border px-4 py-2 text-center">Date</th>
					<th className="border px-4 py-2 text-center">Sales</th>
					<th className="border px-4 py-2 text-center">Revenue</th>
				</tr>
			</thead>
			<tbody>
				{sortedDataSales.map((item, i) => (
					<tr key={i} className="hover">
						<td className="border px-4 py-2 text-center text-[#135bb9]">
							#{item.id}
						</td>
						<td className="border px-4 py-2 text-center text-[#135bb9]">
							{codeProduct[i]}
						</td>
						<td className="border px-4 py-2 text-center text-[#135bb9]">
							{item.product}
						</td>
						<td className="border px-4 py-2 text-center">{item.date}</td>
						<td className="border px-4 py-2 text-center">{item.sales}</td>
						<td className="border px-4 py-2 text-center">
							{new Intl.NumberFormat("id-ID", {
								style: "currency",
								currency: "IDR",
							}).format(item.revenue)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
