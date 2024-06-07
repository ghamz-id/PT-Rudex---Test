import { configureStore } from "@reduxjs/toolkit";
import sales from "./sales.slice";

const store = configureStore({
	reducer: {
		sales,
	},
});

export default store;
