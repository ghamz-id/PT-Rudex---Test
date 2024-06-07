export default function SalesTable({ sales, handleChange }) {
	return (
		<div className="h-screen">
			<label htmlFor="product">Search</label>
			<input
				type="text"
				className="border border-black mb-4"
				name="product"
				onChange={handleChange}
			/>
			<div className="h-1/2 overflow-y-scroll">
				<table className="table-auto">
					<thead>
						<tr>
							<th className="border px-4 py-2 w-10">No</th>
							<th className="border px-4 py-2">Product</th>
							<th className="border px-4 py-2">Date</th>
							<th className="border px-4 py-2">Sales</th>
							<th className="border px-4 py-2">Revenue</th>
						</tr>
					</thead>
					<tbody>
						{sales.map((item, idx) => (
							<tr key={idx}>
								<td className="border px-4 py-2">{idx + 1}</td>
								<td className="border px-4 py-2">{item.product}</td>
								<td className="border px-4 py-2">{item.date}</td>
								<td className="border px-4 py-2">{item.sales}</td>
								<td className="border px-4 py-2">
									{new Intl.NumberFormat("id-ID", {
										style: "currency",
										currency: "IDR",
									}).format(item.revenue)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
