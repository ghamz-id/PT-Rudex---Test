import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants";

// ---------------- CREATE REDUSER ----------------
const slicer = createSlice({
	name: "sales",
	initialState: {
		sales: [],
	},
	reducers: {
		sales: (state, action) => {
			state.sales = action.payload;
		},
	},
});
const { sales } = slicer.actions;

// ---------------- ASYNC THUNK ----------------
export function salesFetch(params) {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `${BASE_URL}/sales`,
				params: params,
			});
			dispatch(sales(data));
		} catch (error) {
			console.log(error);
		}
	};
}

export default slicer.reducer;
