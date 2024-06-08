import SalesTable from "../components/SalesTable/tableProducts";
import BarComponent from "../components/SalesCharts/barChart";
import LineComponent from "../components/SalesCharts/lineChart";
import DateFilter from "../components/DateFilter/dateFilter";
import DataTotal from "../components/Statistics/dataTotal";
import PopularProducts from "../components/Statistics/popularProducts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { salesFetch } from "../redux/slices/salesSlicer";

export default function DashboardPages() {
	const [params, setParams] = useState({});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(salesFetch(params));
	}, [params]);

	const handleChange = (e) => {
		setParams({ ...params, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="flex">
				<div>
					<SalesTable handleChange={handleChange} />
				</div>
				<div className="ms-10">
					<DateFilter handleChange={handleChange} />
					<BarComponent />
					<LineComponent />
					<DataTotal />
				</div>
				<PopularProducts />
			</div>
		</>
	);
}
