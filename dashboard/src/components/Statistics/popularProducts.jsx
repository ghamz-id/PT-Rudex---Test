import { useSelector } from "react-redux";

export default function PopularProducts() {
	const { salesByProducts } = useSelector((state) => state.data);
	const sortedProducts = salesByProducts
		.slice()
		.sort((a, b) => b.sales - a.sales);
	const popularProducts = sortedProducts.slice(0, 5);

	// Ensure that sortedProducts is a new array and not the original one

	return (
		<>
			<div className="border border-black p-3 w-48 h-fit">
				<p className="text-xs">Popular Products</p>
				{popularProducts.map((item, i) => (
					<p key={i} className="font-bold">
						<p>{item.product}</p>
						<p>{item.sales}</p>
					</p>
				))}
			</div>
		</>
	);
}
