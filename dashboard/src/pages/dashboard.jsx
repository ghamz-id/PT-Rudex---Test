import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { salesFetch } from "../redux/sales.slice";
import SalesTable from "../components/SalesTable/SalesTable";
import BarComponent from "../components/SalesCharts/BarChart";
import LineComponent from "../components/SalesCharts/lineChart";

export default function DashboardPages() {
	const [params, setParams] = useState({});
	const dispatch = useDispatch();
	const { sales } = useSelector((state) => state.sales);
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
					<SalesTable sales={sales} handleChange={handleChange} />
				</div>
				<div>
					<BarComponent sales={sales} />
					<LineComponent sales={sales} />
				</div>
			</div>
		</>
	);
}
