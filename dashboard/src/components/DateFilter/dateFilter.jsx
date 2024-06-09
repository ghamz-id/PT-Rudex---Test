export default function DateFilter({ handleChange }) {
	return (
		<div className="flex gap-6 justify-between max-lg:w-full max-lg:ps-2 max-sm:p-0 max-lg:h-full max-lg:items-center">
			<label className="form-control w-full max-w-xs">
				<div className="lg:label">
					<span className="label-text font-semibold">Start Date :</span>
				</div>
				<input
					type="date"
					placeholder="Type here"
					className="input max-sm:input-sm max-lg:input-sm input-bordered border border-slate-400 w-full max-w-xs"
					onChange={handleChange}
					name="start_date"
				/>
			</label>
			<label className="form-control w-full max-w-xs">
				<div className="lg:label">
					<span className="label-text font-semibold">End Date :</span>
				</div>
				<input
					type="date"
					placeholder="Type here"
					className="input max-sm:input-sm max-lg:input-sm input-bordered border border-slate-400 w-full max-w-xs"
					onChange={handleChange}
					name="end_date"
				/>
			</label>
		</div>
	);
}
