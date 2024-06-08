import { configureStore } from "@reduxjs/toolkit";
import salesReducer from "./slices/salesSlicer";

const store = configureStore({
	reducer: { data: salesReducer },
});

export default store;
