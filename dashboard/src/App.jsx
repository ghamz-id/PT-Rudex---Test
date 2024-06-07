import SalesTable from "./components/SalesTable";
import SalesChart from "./components/SalesChart";

export default function App() {
	return (
		<>
			<div className="flex">
				<SalesTable />
				<SalesChart />
			</div>
		</>
	);
}
