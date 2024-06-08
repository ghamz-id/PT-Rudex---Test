import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { salesFetch } from "../redux/slices/salesSlicer";
import SalesTable from "../components/SalesTable/tableProducts";
import BarComponent from "../components/SalesCharts/barChart";
import LineComponent from "../components/SalesCharts/lineChart";
import DateFilter from "../components/DateFilter/dateFilter";
import DataTotal from "../components/Statistics/dataTotal";
import PopularProducts from "../components/Statistics/popularProducts";
import SearchProduct from "../components/DateFilter/searchProduct";

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
			<div className="h-screen w-full bg-slate-200 px-12">
				<div className="h-1/2 flex flex-col justify-center py-2">
					<h1 className="font-bold tracking-widest">DASHBOARD SALES</h1>
					<div className="flex flex-wrap justify-between">
						<DataTotal />
						<div className="content-end">
							<DateFilter handleChange={handleChange} />
						</div>
					</div>
					<div className="flex py-4 gap-4 justify-around">
						<div className="border border-slate-400 rounded-lg shadow-lg bg-white py-1">
							<h1 className="font-bold ps-3 text-lg text-slate-500 pe-3">
								Sales By Products
							</h1>
							<BarComponent />
						</div>
						<div className="border border-slate-400 rounded-lg shadow-lg bg-white py-1">
							<h1 className="font-bold ps-3 text-lg text-slate-500 pe-3">
								Daily Sales
							</h1>
							<LineComponent />
						</div>
					</div>
				</div>
				<div className="h-1/2 w-full flex gap-4">
					<div className="flex-1">
						<div className="flex justify-between p-1 bg-white rounded-lg bg-opacity-50">
							<h1 className="font-bold ps-3 text-lg text-slate-500">
								Recent Sales
							</h1>
							<SearchProduct handleChange={handleChange} />
						</div>
						<div className="h-3/4 overflow-y-scroll bg-white border border-slate-400 rounded-lg shadow-lg">
							<SalesTable />
						</div>
					</div>
					<div>
						<h1 className="font-bold ps-3 text-lg text-slate-500 p-1 bg-white rounded-lg bg-opacity-50">
							Popular Products
						</h1>
						<div className="h-3/4 overflow-y-scroll bg-white rounded-lg border border-slate-400 shadow-lg">
							<PopularProducts />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
