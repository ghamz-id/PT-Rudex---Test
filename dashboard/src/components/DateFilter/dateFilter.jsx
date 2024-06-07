export default function DateFilter({ handleChange }) {
	return (
		<div className="flex gap-6">
			<div className="flex flex-col">
				<label htmlFor="start_date">Start</label>
				<input
					type="date"
					name="start_date"
					onChange={handleChange}
					className="border border-black"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="end_date">End</label>
				<input
					type="date"
					name="end_date"
					onChange={handleChange}
					className="border border-black"
				/>
			</div>
		</div>
	);
}
