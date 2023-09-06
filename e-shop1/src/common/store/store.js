import {configureStore} from "@reduxjs/toolkit";
import FilterReducer from "../redux/FilterReducer";
import ProductsReducer from "../redux/ProductReducer";

export const store = configureStore({
  reducer: {
    filters: FilterReducer,
    products: ProductsReducer,
  },
});
