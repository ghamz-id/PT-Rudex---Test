import { useSelector } from "react-redux";

export default function DataTotal() {
	const { salesByProducts } = useSelector((state) => state.data);

	return (
		<>
			<div className="flex gap-4 max-sm:gap-1 max-sm:w-full max-lg:gap-1 max-lg:w-full max-lg:pe-2 max-sm:p-0">
				<div
					className="border border-slate-400 p-2 w-60 bg-white rounded-lg flex items-center gap-2
				max-sm:w-1/2 max-lg:3/4
				"
				>
					<img
						src="/sales-icons.svg"
						alt=""
						className="h-12 border rounded-full max-sm:h-8 max-lg:h-8"
					/>
					<div>
						<p className="tracking-tighter text-slate-500">Total Sales</p>
						<p className="font-semibold text-2xl max-sm:text-base max-lg:text-base">
							{salesByProducts.reduce((a, item) => a + Number(item.sales), 0)}
						</p>
					</div>
				</div>
				<div
					className="border border-slate-400 p-2 w-60 bg-white rounded-lg flex items-center gap-2
				max-sm:w-1/2 max-lg:w-3/4
				"
				>
					<img
						src="/revenue-icons.svg"
						alt=""
						className="h-12 border rounded-full max-sm:h-8 max-lg:h-8"
					/>
					<div>
						<p className="tracking-tighter text-slate-500">Total Revenue</p>
						<p className="font-semibold text-2xl max-sm:text-base max-lg:text-base">
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
