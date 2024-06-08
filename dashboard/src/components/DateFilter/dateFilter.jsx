export default function DateFilter({ handleChange }) {
	return (
		<div className="flex gap-6">
			<label className="form-control w-full max-w-xs">
				<div className="label">
					<span className="label-text font-semibold">Start Date :</span>
				</div>
				<input
					type="date"
					placeholder="Type here"
					className="input input-sm input-bordered border border-slate-400 w-full max-w-xs"
					onChange={handleChange}
					name="start_date"
				/>
			</label>
			<label className="form-control w-full max-w-xs">
				<div className="label">
					<span className="label-text font-semibold">End Date :</span>
				</div>
				<input
					type="date"
					placeholder="Type here"
					className="input input-sm input-bordered border border-slate-400 w-full max-w-xs"
					onChange={handleChange}
					name="end_date"
				/>
			</label>
		</div>
	);
}
