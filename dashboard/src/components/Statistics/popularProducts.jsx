import { useSelector } from "react-redux";

export default function PopularProducts() {
	const { salesByProducts } = useSelector((state) => state.data);
	const sortedProducts = salesByProducts
		.slice()
		.sort((a, b) => b.sales - a.sales);
	const popularProducts = sortedProducts.slice(0, 5);

	return (
		<>
			<div className="w-80 h-fit bg-white p-1">
				{popularProducts.map((item, i) => (
					<div key={i} className="flex border-b justify-between">
						<div className="flex p-2 gap-2">
							<img
								src={`https://picsum.photos/id/${i}/200/300`}
								alt=""
								className="bg-cover object-cover w-10 h-10 hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
							/>
							<div>
								<p className="font-semibold">{item.product}</p>
								<p className="text-[#34aac1] text-sm">Sold: {item.sales} Pcs</p>
							</div>
						</div>
						<div className="content-center">
							<p className="font-semibold text-sm italic text-slate-400">
								Rp {item.revenue / item.sales}K
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
