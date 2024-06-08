import { useSelector } from "react-redux";

export default function DataTotal() {
	const { salesByProducts } = useSelector((state) => state.data);

	return (
		<>
			<div className="flex gap-2">
				<div className="border border-black p-3 w-48">
					<p className="text-xs">Total Sales</p>
					<p className="font-bold">
						{salesByProducts.reduce((a, item) => a + Number(item.sales), 0)}
					</p>
				</div>
				<div className="border border-black p-3 w-48">
					<p className="text-xs">Total Revenue</p>
					<p className="font-bold">
						{Intl.NumberFormat("id-ID", {
							style: "currency",
							currency: "IDR",
						}).format(
							salesByProducts.reduce((a, item) => a + Number(item.revenue), 0)
						)}
					</p>
				</div>
			</div>
		</>
	);
}
