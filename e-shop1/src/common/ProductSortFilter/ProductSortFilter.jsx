import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./ProductSortFilter.css";
import {useDispatch} from "react-redux";
import {selectDropDownListFilter} from "../redux/FilterReducer";

export default function ProductSortFilter() {
  const [dropDownFilterValue, setDropDownFilterValue] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setDropDownFilterValue(event.target.value);
    dispatch(selectDropDownListFilter(event.target.value));
  };

  return (
    <div className="product-sort-filter-container">
      <div className="sort-label">Sort by :</div>
      <FormControl sx={{m: 1, minWidth: 120}}>
        <Select
          value={dropDownFilterValue}
          onChange={handleChange}
          displayEmpty
          placeholder="Select ..."
          inputProps={{"aria-label": "Without label"}}
        >
          <MenuItem disabled value="">
            <em>Select ...</em>
          </MenuItem>
          <MenuItem value={"Default"}>Default</MenuItem>
          <MenuItem value={"HighToLow"}>Price : High to Low</MenuItem>
          <MenuItem value={"LowToHigh"}>Price : Low to High</MenuItem>
          <MenuItem value={"Newest"}>Newest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
