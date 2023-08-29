import {createSlice} from "@reduxjs/toolkit";
import shoes1 from "../../assets/images/shoes1.jpg";
import shoes2 from "../../assets/images/shoes2.jpg";
import airpods from "../../assets/images/airpods.jpg";
import bose from "../../assets/images/bose.jpg";
import iphoneX from "../../assets/images/iphoneX.jpg";
import jeans from "../../assets/images/jeans.jpg";
const staticData = [
  {
    id: "1",
    img: shoes1,
    name: "Nike 1",
    desc: "A high-quality product with great features.",
    price: 99.99,
    category: "APPAREL",
    uploadDate: "2023-08-14",
  },
  {
    id: "2",
    img: shoes2,
    name: "Nike 2",
    desc: "An elegant and stylish accessory for any occasion.",
    price: 49.95,
    category: "APPAREL",
    uploadDate: "2023-08-12",
  },
  {
    id: "3",
    img: airpods,
    name: "Airpods",
    desc: "A versatile tool that makes your tasks easier.",
    price: 29.5,
    category: "ELECTRONICS",
    uploadDate: "2023-08-10",
  },
  {
    id: "4",
    img: bose,
    name: "Bose Headset",
    desc: "A delicious treat that brings joy to your taste buds.",
    price: 5.99,
    category: "ELECTRONICS",
    uploadDate: "2023-08-09",
  },
  {
    id: "5",
    img: iphoneX,
    name: "Iphone X",
    desc: "A captivating book that takes you on an adventure.",
    price: 12.95,
    category: "ELECTRONICS",
    uploadDate: "2023-08-08",
  },
  {
    id: "6",
    img: jeans,
    name: "Levis Jeans",
    desc: "A comfortable and trendy piece of clothing.",
    price: 39.99,
    category: "APPAREL",
    uploadDate: "2023-08-07",
  },
];
const initialState = {
  value: 0,
  selectedProduct: null,
  productsList: staticData,
  deleteDialogOpen: false,
  updateDialogOpen: false,
  addProductDialogOpen: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    openDeleteDialog: (state, action) => {
      state.deleteDialogOpen = action.payload;
    },
    openUpdateDialog: (state, action) => {
      state.updateDialogOpen = action.payload;
    },
    openAddProductDialog: (state, action) => {
      state.addProductDialogOpen = action.payload;
    },
    updateProductsList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectProduct,
  openDeleteDialog,
  updateProductsList,
  openUpdateDialog,
  openAddProductDialog
} = productsSlice.actions;

export default productsSlice.reducer;
