import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3000";

// --------------------------- CREATE REDUCER -------------------------------
const salesSlicer = createSlice({
	name: "sales",
	initialState: {
		dataSales: [],
		salesByProducts: [],
	},
	reducers: {
		dataSales: (state, action) => {
			state.dataSales = action.payload;
		},
		salesByProducts: (state) => {
			const salesByProducts = [];
			state.dataSales.forEach((item) => {
				const index = salesByProducts.findIndex(
					(total) => total.product === item.product
				);
				if (index === -1) {
					salesByProducts.push({
						product: item.product,
						sales: item.sales,
						revenue: item.revenue,
					});
				} else {
					salesByProducts[index].revenue += item.revenue;
					salesByProducts[index].sales += item.sales;
				}
			});
			state.salesByProducts = salesByProducts;
		},
	},
});
export const { dataSales, salesByProducts } = salesSlicer.actions;
export default salesSlicer.reducer;

// --------------------------- CREATE ASYNC FUNCTION -------------------------------
export function salesFetch(params) {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `${BASE_URL}/sales`,
				params: params,
			});
			dispatch(dataSales(data));
			dispatch(salesByProducts());
		} catch (error) {
			console.log(error);
		}
	};
}
