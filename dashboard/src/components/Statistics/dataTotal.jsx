import { useSelector } from "react-redux";

export default function DataTotal() {
	const { salesByProducts } = useSelector((state) => state.data);

	return (
		<>
			<div className="flex gap-5">
				<div className="border border-slate-400 p-2 w-60 bg-white rounded-lg flex items-center gap-2">
					<img
						src="/sales-icons.svg"
						alt=""
						className="h-12 border rounded-full"
					/>
					<div>
						<p className="tracking-tighter text-slate-500">Total Sales</p>
						<p className="font-semibold text-2xl">
							{salesByProducts.reduce((a, item) => a + Number(item.sales), 0)}
						</p>
					</div>
				</div>
				<div className="border border-slate-400 p-2 w-60 bg-white rounded-lg flex items-center gap-2">
					<img
						src="/revenue-icons.svg"
						alt=""
						className="h-12 border rounded-full"
					/>
					<div>
						<p className="tracking-tighter text-slate-500">Total Revenue</p>
						<p className="font-semibold text-2xl">
							{Intl.NumberFormat("id-ID", {
								style: "currency",
								currency: "IDR",
							}).format(
								salesByProducts.reduce((a, item) => a + Number(item.revenue), 0)
							)}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
