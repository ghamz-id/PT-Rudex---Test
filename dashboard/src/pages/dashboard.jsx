import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { salesFetch } from "../redux/sales.slice";
import SalesTable from "../components/SalesTable/SalesTable";
import BarComponent from "../components/SalesCharts/barChart";
import LineComponent from "../components/SalesCharts/lineChart";
import DateFilter from "../components/DateFilter/dateFilter";

export default function DashboardPages() {
	const dispatch = useDispatch();
	const [params, setParams] = useState({});
	const { sales } = useSelector((state) => state.sales);
	useEffect(() => {
		dispatch(salesFetch(params));
	}, [params]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		value ? setParams({ ...params, [name]: value }) : setParams({});
	};

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
		<>
			<div className="flex">
				<div>
					<SalesTable sales={sales} handleChange={handleChange} />
				</div>
				<div className="ms-10">
					<DateFilter handleChange={handleChange} />
					<BarComponent sales={sales} />
					<LineComponent sales={sales} />
					<div>
						<p>
							TOTAL SALES :{" "}
							{totalSales.reduce((a, item) => a + Number(item.sales), 0)} Pcs
						</p>
					</div>
					<div>
						<p>
							TOTAL REVENUE :{" "}
							{Intl.NumberFormat("id-ID", {
								style: "currency",
								currency: "IDR",
							}).format(
								totalSales.reduce((a, item) => a + Number(item.revenue), 0)
							)}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
