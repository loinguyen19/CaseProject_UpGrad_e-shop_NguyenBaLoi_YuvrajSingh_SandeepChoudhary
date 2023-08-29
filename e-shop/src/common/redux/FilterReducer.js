import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  filteredProducts: [],
  dropDownListFilterValue: "",
  categoryToggleFilterValue: "ALL",
  searchBarFilterValue: "",
};

export const filterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectCategoryFilter: (state, action) => {
      state.categoryToggleFilterValue = action.payload;
    },
    selectDropDownListFilter: (state, action) => {
      state.dropDownListFilterValue = action.payload;
    },
    setSearchBarFilterValue: (state, action) => {
      state.searchBarFilterValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectDropDownListFilter,
  selectCategoryFilter,
  setSearchBarFilterValue,
} = filterSlice.actions;

export default filterSlice.reducer;
