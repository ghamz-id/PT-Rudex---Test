import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { salesFetch } from "../redux/slices/salesSlicer";
import SalesTable from "../components/SalesTable/tableProducts";
import DateFilter from "../components/DateFilter/dateFilter";
import DataTotal from "../components/Statistics/dataTotal";
import PopularProducts from "../components/Statistics/popularProducts";
import SearchProduct from "../components/DateFilter/searchProduct";
import BarComponent from "../components/SalesCharts/BarChart";
import LineComponent from "../components/SalesCharts/lineChart";

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
			<div className="lg:h-screen w-full bg-gradient-to-r from-slate-100 to-blue-100 px-12 max-sm:p-4 max-lg:p-4">
				<div className="lg:h-1/2 flex flex-col py-2 max-sm:py-4 max-lg:py-4">
					<h1 className="font-bold tracking-widest lg:text-xl">
						DASHBOARD SALES
					</h1>
					<div className="flex max-sm:flex-wrap lg:flex-wrap justify-between pb-4">
						<div className="max-sm:w-full max-lg:w-1/2">
							<DataTotal />
						</div>
						<div className="max-sm:w-full max-lg:w-1/2">
							<DateFilter handleChange={handleChange} />
						</div>
					</div>
					<div className="flex items-center justify-between h-full gap-4 max-sm:flex-wrap">
						<div className="w-1/2 max-sm:w-full">
							<BarComponent />
						</div>
						<div className="w-1/2 max-sm:w-full">
							<LineComponent />
						</div>
					</div>
				</div>
				<div className="lg:h-1/2 w-full flex gap-4 max-sm:flex-col max-lg:flex-col">
					<div className="lg:flex-1">
						<div className="flex justify-between p-1 bg-white rounded-lg bg-opacity-50">
							<h1 className="font-bold ps-3 text-lg max-sm:text-sm max-lg:text-sm content-center text-slate-500">
								Recent Sales
							</h1>
							<SearchProduct handleChange={handleChange} />
						</div>
						<div className="h-3/4 max-sm:h-72 max-lg:h-72 overflow-y-scroll bg-white border border-slate-400 rounded-lg shadow-lg">
							<SalesTable />
						</div>
					</div>
					<div>
						<h1 className="font-bold ps-3 text-lg max-sm:text-sm max-lg:text-sm text-slate-500 p-1 bg-white rounded-lg bg-opacity-50">
							Popular Products
						</h1>
						<div className="h-3/4 max-sm:h-72 max-lg:h-72 overflow-y-scroll bg-white rounded-lg border border-slate-400 shadow-lg">
							<PopularProducts />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
